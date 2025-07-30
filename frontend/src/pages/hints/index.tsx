import { useCallback, useEffect, useState, useMemo } from 'react';
import { useAuthContext } from '@/hooks/useAuthContext';
import api from '@/api/axios';
import type { GuessState, Hint } from '@/types/hint.types';
import MainLayout from '../layout';
import LoadingLayout from '@/components/layout/loading';
import HintCard from '@/components/hint/hint-card';
import Guess from '@/components/hint/guess';
import RevealResult from '@/components/hint/RevealResult';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toZonedTime } from 'date-fns-tz';

import { type Mentee, MenteeCard, type User } from '@/components/hint/MenteeCard';
import type { StudentInfo } from '@/types/type';
import MagicalOrb from '@/components/hint/Orb';
import ProfileModal from '@/components/coven/profileModal';
import ProfilePopup from '@/components/coven/profilePopup';
import { useNavigate } from 'react-router-dom';

function Page() {
  const navigate = useNavigate();
  const { user, students, updateGuessStatus, isLoading: isAuthLoading } = useAuthContext();
  const [guessState, setGuessState] = useState<GuessState>('n/a');
  const [revealedCount, setRevealedCount] = useState(0);
  const [luckyCode, setLuckyCode] = useState<string | null>(null);
  const [showLuckyModal, setShowLuckyModal] = useState(false);
  const [guessInput, setGuessInput] = useState('');
  const [isRevealingCode, setIsRevealingCode] = useState(false);
  const [isRevealComplete, setIsRevealComplete] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<StudentInfo | null>(null);

  const handleOpenModal = (user: StudentInfo): void => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const listOfCodes = students
    ? students
        .filter(
          (student: StudentInfo) =>
            student?.house === user?.house && student?.isSenior == true && student?.studentId,
        )
        .map((student: StudentInfo) => student.studentId.slice(-3))
    : [];

  const [editingMenteeId, setEditingMenteeId] = useState<string | null>(null);
  const [draftHints, setDraftHints] = useState<Hint[]>([]);
  const [countdown, setCountdown] = useState<string[]>(['', '', '']);

  const hintReleaseDates = useMemo(
    () => [
      toZonedTime(new Date(2025, 6, 29, 0, 0, 0), 'Asia/Bangkok'),
      toZonedTime(new Date(2025, 7, 6, 0, 0, 0), 'Asia/Bangkok'),
      toZonedTime(new Date(2025, 7, 9, 10, 0, 0), 'Asia/Bangkok'),
    ],
    [],
  );

  const handleLuckyDraw = () => {
    if (!listOfCodes.length) return;

    setIsRevealComplete(false);
    const finalCode = listOfCodes[Math.floor(Math.random() * listOfCodes.length)];
    setLuckyCode(finalCode);
    setShowLuckyModal(true);
    setIsRevealingCode(true);
  };

  const closeModal = () => {
    setShowLuckyModal(false);
    setIsRevealingCode(false);
    setLuckyCode(null);
  };

  const updateCountdown = useCallback(() => {
    const now = new Date();

    const newCountdown = hintReleaseDates.map((date) => {
      if (now < date) {
        const totalSeconds = Math.floor((date.getTime() - now.getTime()) / 1000);
        const days = Math.floor(totalSeconds / (24 * 3600));
        const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        const pad = (n: number) => n.toString().padStart(2, '0');

        return ` ${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
      }
      return '';
    });

    setCountdown(newCountdown);
  }, [hintReleaseDates]);

  useEffect(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [updateCountdown]);

  const queryClient = useQueryClient();

  const { mutate: updateHint } = useMutation({
    mutationFn: (hints: Hint[]) => api.put('/hints', hints),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['authUser'] });
    },
  });

  const { mutate: submitGuess } = useMutation({
    mutationFn: async (guess: string) => {
      if (!user || user.isSenior || revealedCount >= 3) return;

      const { data } = await api.put(`/students/${user.id}/guess`, { guess: guess });
      const isCorrect = data.info.isCorrect;
      const result = isCorrect ? 'success' : 'fail';
      setGuessState(result);
      if (!isCorrect) setRevealedCount((prev) => prev + 1);
      return data;
    },
    onSuccess: (data) => {
      if (!user) return;

      const updatedLives = user.lives !== null ? user.lives - 1 : 2;
      queryClient.setQueryData(['authUser'], {
        ...user,
        lives: data.info.isCorrect ? user.lives : updatedLives,
        guessCheck: data.info.isCorrect ? true : user.guessCheck,
      });
    },
  });

  useEffect(() => {
    updateGuessStatus();
  }, [guessState]);

  useEffect(() => {
    if (user) {
      setDraftHints(user.hints);
      setRevealedCount(3 - (user.lives ?? 3));
    }
  }, [user]);

  const handleGuessSubmit = useCallback((guess: string) => submitGuess(guess), [submitGuess]);

  const resetGuess = useCallback(() => setGuessState('n/a'), []);
  const handleEdit = useCallback((menteeId: string) => setEditingMenteeId(menteeId), []);
  const handleCancel = useCallback(() => {
    setEditingMenteeId(null);
    if (user) setDraftHints(user.hints);
  }, [user]);
  const handleConfirm = useCallback(() => {
    updateHint(draftHints);
    setEditingMenteeId(null);
  }, [draftHints, updateHint]);

  const handleHintChange = useCallback((id: string, content: string) => {
    setDraftHints((prev) => prev.map((hint) => (hint.id === id ? { ...hint, content } : hint)));
  }, []);

  function renderDescription(description: React.ReactNode) {
    if (typeof description !== 'string') return description;

    // Regex to match URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = description.split(urlRegex);

    return (
      <>
        {parts.map((part, i) =>
          urlRegex.test(part) ? (
            <a
              key={i}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              {part}
            </a>
          ) : (
            <span key={i}>{part}</span>
          ),
        )}
      </>
    );
  }

  useEffect(() => {
    if (!isAuthLoading && !user) {
      navigate('/', { replace: true });
    }
  }, [isAuthLoading, user]);

  if (!user || !students || (!user.isSenior && user.guessCheck?.isFound === undefined))
    return <LoadingLayout />;

  const isSenior = user.isSenior;

  return (
    <MainLayout>
      <main className="mx-auto flex w-full max-w-5xl flex-col items-center justify-start gap-y-10 p-4 xl:px-0">
        {isSenior &&
          (user.mentees as Mentee[]).map((mentee, index) => {
            const menteeHints = draftHints.slice(index * 3, index * 3 + 3);
            const isEditingThisMentee = editingMenteeId === mentee.id;
            return (
              <div key={mentee.id} className="flex w-full flex-col gap-y-10 sm:w-[70%] lg:w-full">
                <MenteeCard mentee={mentee} user={user as User} index={index} />
                <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16 lg:[&:has(:nth-child(odd):last-child)>:first-child]:col-span-2">
                  {menteeHints.map((hint, i) => {
                    const hintCountdown = countdown[i];
                    const isHintRevealed = !hintCountdown;
                    const canEdit = isEditingThisMentee && !isHintRevealed;

                    return (
                      <div key={hint.id}>
                        <p className="mb-2 text-center font-mono text-lg tracking-wider text-yellow-300/80">
                          {hintCountdown
                            ? `Reveal in ${hintCountdown}`
                            : hint.content
                              ? 'Revealed'
                              : 'Nuh Uh'}
                        </p>

                        <HintCard
                          key={hint.id}
                          description={canEdit ? hint.content : renderDescription(hint.content)}
                          stage={'shown'}
                          type={'senior'}
                          editable={canEdit}
                          onChange={(v) => handleHintChange(hint.id, v)}
                          isRevealed={isHintRevealed}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="mb-8 w-full">
                  <Guess
                    onGuessSubmit={handleGuessSubmit}
                    guessState={'n/a'}
                    attempts={0}
                    maxAttempts={0}
                    onReset={() => {}}
                    isSenior={isSenior}
                    onEditHints={() => handleEdit(mentee.id)}
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                    isEditing={isEditingThisMentee}
                  />
                </div>
              </div>
            );
          })}

        {!isSenior && (
          <div className="flex w-full flex-col gap-y-10 sm:w-[70%] lg:w-full">
            {user.guessCheck?.isFound ? (
              <div className="flex w-full flex-col items-center justify-center">
                <div className="w-full rounded-xl border border-white/10 bg-gray-800/30 p-8 text-center text-white shadow-2xl backdrop-blur-lg">
                  <h2 className="text-3xl font-bold text-purple-300">Congratulations!</h2>
                  <p className="mt-2 text-xl text-gray-300">
                    You have successfully found your P'code!
                  </p>
                  <p className="mt-4 text-gray-400">Ask them to treat you pizzzzza!</p>

                  <hr className="my-6 border-white/10" />

                  <div className="flex justify-center">
                    {students
                      .filter((student: StudentInfo) => student.id === user.guessCheck?.seniorId)
                      .map((student: StudentInfo) => (
                        <ProfileModal
                          key={student.studentId}
                          user={student}
                          onClick={() => handleOpenModal(student)}
                          className="w-full md:w-50"
                        />
                      ))}
                  </div>
                </div>
                <ProfilePopup isOpen={isModalOpen} onClose={handleCloseModal} user={selectedUser} />
              </div>
            ) : (
              <div className="font-poppins text-white">
                <div className="mx-auto max-w-5xl rounded-xl border border-white/10 bg-gray-800/30 p-6 shadow-2xl backdrop-blur-lg sm:p-8">
                  <div className="relative mb-6 pt-8 text-center md:pt-0 md:pr-0">
                    <div className="absolute -top-2 -right-2 flex items-center gap-1.5 rounded-full bg-purple-500/20 px-3 py-1.5">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <img
                          key={i}
                          src={
                            (user.lives ?? 3) > i
                              ? '/assets/filled-heart.svg'
                              : '/assets/empty-heart.svg'
                          }
                          alt="Heart status"
                          className="size-5"
                        />
                      ))}
                    </div>

                    <h1 className="text-3xl font-bold text-purple-300">Guess Your P'Code</h1>
                  </div>
                  <div className="space-y-4 text-left text-gray-200">
                    <p>
                      Welcome, junior! Your quest is to discover the identity of your senior
                      mentor—your <strong className="font-semibold text-purple-300">P'code</strong>.
                      They will be your personal guide throughout your studies, helping with
                      lectures, projects, and university life.
                    </p>
                    <p>
                      Your P'code has left three secret hints below. Remember this crucial rule:{' '}
                      <strong className="font-semibold text-red-400">
                        your P'code is in the same coven as you!{' '}
                      </strong>
                      Use the hints to deduce who they are before you run out of guesses.
                    </p>
                    <p>
                      Be sure to choose wisely, as a fun{' '}
                      <strong className="font-semibold text-red-400">'punishment'</strong> awaits on
                      the event day for those who can't solve the mystery.
                    </p>
                  </div>
                  <hr className="my-6 border-white/10" />
                  <div className="text-center">
                    <p className="text-gray-300/90">
                      If you're feeling lucky, you can{' '}
                      <strong className="font-semibold text-purple-300">Invoke the Prophecy</strong>{' '}
                      for a random guess!
                    </p>
                  </div>
                </div>
              </div>
            )}
            <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16 lg:[&:has(:nth-child(odd):last-child)>:first-child]:col-span-2">
              {[...Array(3)].map((_, i) => {
                const hint = user.hints[i];
                const hintCountdown = countdown[i];
                const description =
                  user.hints[i]?.content ||
                  (hintCountdown ? (
                    <>
                      <p className="text-lg">Hint available in</p>
                      <p className="font-mono text-2xl font-semibold">{hintCountdown}</p>
                    </>
                  ) : (
                    'Nuh Uh'
                  ));
                return (
                  <HintCard
                    key={hint?.id || `placeholder-${i}`}
                    description={renderDescription(description)}
                    stage={'shown'}
                    type={'freshman'}
                    editable={false}
                    onChange={() => {}}
                  />
                );
              })}
            </div>

            {!user.guessCheck?.isFound && (
              <div className="mb-8 w-full">
                <Guess
                  onGuessSubmit={handleGuessSubmit}
                  guessState={guessState}
                  attempts={revealedCount}
                  maxAttempts={3}
                  onReset={resetGuess}
                  isSenior={isSenior}
                  isEditing={false}
                  inputHint={guessInput}
                  setInputHint={setGuessInput}
                  onLuckyDraw={handleLuckyDraw}
                  luckyDrawDisabled={user.guessCheck?.isFound || (user.lives ?? 3) <= 0}
                  luckyDrawLabel="🕯️ Invoke the Prophecy"
                />
              </div>
            )}
          </div>
        )}

        {(guessState === 'success' || guessState === 'fail') && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 xl:pl-[11%]"
            onClick={resetGuess}
          >
            <RevealResult state={guessState} outOfAttempts={revealedCount >= 3} />
          </div>
        )}

        {showLuckyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
            <div className="w-full max-w-lg transform rounded-3xl bg-gradient-to-br from-indigo-950 via-gray-900 to-purple-950 p-8 shadow-2xl ring-1 shadow-purple-900/40 ring-purple-400/50">
              <div className="mb-6 text-center">
                <h2 className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-5xl font-bold tracking-wider text-transparent drop-shadow-[0_2px_4px_rgba(236,72,153,0.4)]">
                  THE ORACLE SPEAKS
                </h2>
                <p className="mt-2 text-purple-300/80">The runes begin to whisper...</p>
              </div>

              <div className="mb-10 flex justify-center">
                <MagicalOrb
                  code={luckyCode ?? ''}
                  isRevealing={isRevealingCode}
                  onRevealComplete={() => setIsRevealComplete(true)}
                />
              </div>

              {isRevealComplete && (
                <div className="text-center text-purple-200/90 italic">
                  The prophecy has been revealed...
                </div>
              )}

              <div className="mt-8 flex flex-col items-center gap-4">
                <button
                  className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-lg font-bold text-white shadow-lg shadow-pink-500/20 transition-all hover:shadow-xl hover:shadow-pink-500/40 hover:brightness-110 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:opacity-50 disabled:shadow-none"
                  disabled={!isRevealComplete}
                  onClick={() => {
                    setGuessInput(luckyCode ?? '');
                    closeModal();
                  }}
                >
                  Accept the Prophecy
                </button>
                <button
                  className="rounded-lg px-5 py-2 font-semibold text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
                  onClick={closeModal}
                >
                  Return to Mortal Realm
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </MainLayout>
  );
}

export default Page;
