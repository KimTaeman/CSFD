import { useState, useCallback, useEffect } from 'react';
import { useAuthContext } from '@/hooks/useAuthContext';
import api from '@/api/axios';
import type { GuessState, Hint } from '@/types/hint.types';
import MainLayout from '../layout';
import LoadingLayout from '@/components/layout/loading';
import HintCard from '@/components/hint/hint-card';
import Guess from '@/components/hint/guess';
import RevealResult from '@/components/hint/RevealResult';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toZonedTime } from 'date-fns-tz';

import { MenteeCard, type Mentee, type User } from '@/components/hint/MenteeCard';
import { useFetch } from '@/hooks/useFetch';
import type { StudentInfo } from '@/types/type';
import Slot from '@/components/hint/Slot';
function Page() {
  const { user, updateGuessStatus } = useAuthContext();

  const [guessState, setGuessState] = useState<GuessState>('n/a');
  const [revealedCount, setRevealedCount] = useState(0);
  // Lucky draw
  const [hasDrawnLucky, setHasDrawnLucky] = useState(false);
  const [luckyCode, setLuckyCode] = useState<string | null>(null);
  const [showLuckyModal, setShowLuckyModal] = useState(false);
  const [guessInput, setGuessInput] = useState('');
  const [reels, setReels] = useState(['-', '-', '-']);
  const [isSpinning, setIsSpinning] = useState([false, false, false]);
  const { fetchStudents } = useFetch();
  const { data: students } = useQuery({
    queryKey: ['students'],
    queryFn: fetchStudents,
  });
  const listOfCodes = students
    ? students
        .filter(
          (student: StudentInfo) =>
            student?.house === user.house && student?.isSenior == true && student?.studentId,
        )
        .map((student: StudentInfo) => student.studentId.slice(-3))
    : [];

  const [editingMenteeId, setEditingMenteeId] = useState<string | null>(null);
  const [draftHints, setDraftHints] = useState<Hint[]>([]);
  const [countdown, setCountdown] = useState<string[]>(['', '', '']);

  const handleLuckyDraw = () => {
    if (!listOfCodes.length) return;

    const finalCode = listOfCodes[Math.floor(Math.random() * listOfCodes.length)];
    const finalReels = finalCode.split('');

    setShowLuckyModal(true);
    setReels(['-', '-', '-']);
    setIsSpinning([true, true, true]);
    setLuckyCode(finalCode);
    setTimeout(() => {
      setIsSpinning((prev) => [false, prev[1], prev[2]]);
      setReels((prev) => [finalReels[0], prev[1], prev[2]]);
    }, 1500);

    setTimeout(() => {
      setIsSpinning((prev) => [prev[0], false, prev[2]]);
      setReels((prev) => [prev[0], finalReels[1], prev[2]]);
    }, 2500);

    setTimeout(() => {
      setIsSpinning((prev) => [prev[0], prev[1], false]);
      setReels((prev) => [prev[0], prev[1], finalReels[2]]);
      setHasDrawnLucky(true);
    }, 3500);
  };
  const updateCountdown = useCallback(() => {
    const hintReleaseDates = [
      toZonedTime(new Date(2025, 6, 29, 0, 0, 0), 'Asia/Bangkok'),
      toZonedTime(new Date(2025, 7, 1, 0, 0, 0), 'Asia/Bangkok'),
      toZonedTime(new Date(2025, 7, 3, 0, 0, 0), 'Asia/Bangkok'),
    ];

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
  }, []);

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
        isFound: data.info.isCorrect ? true : user.isFound,
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

  if (!user || (!user.isSenior && user.isFound === undefined)) return <LoadingLayout />;

  const isSenior = user.isSenior;

  return (
    <MainLayout>
      <main className="mx-auto flex w-full max-w-5xl flex-col items-center justify-start gap-y-10 p-4 xl:px-0 xl:py-20">
        {isSenior &&
          (user.mentees as Mentee[]).map((mentee, index) => {
            const menteeHints = draftHints.slice(index * 3, index * 3 + 3);
            const isEditingThisMentee = editingMenteeId === mentee.id;

            return (
              <div key={mentee.id} className="flex w-full flex-col gap-y-10 sm:w-[70%] lg:w-full">
                <MenteeCard mentee={mentee} user={user as User} index={index} />
                <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16 lg:[&:has(:nth-child(odd):last-child)>:first-child]:col-span-2">
                  {menteeHints.map((hint) => (
                    <HintCard
                      key={hint.id}
                      title={''}
                      description={hint.content}
                      stage={'shown'}
                      type={'senior'}
                      editable={isEditingThisMentee}
                      onChange={(v) => handleHintChange(hint.id, v)}
                    />
                  ))}
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
            {user.isFound ? (
              <div className="text-center text-white">
                <h2 className="mb-4 text-3xl font-semibold">Congratulations!</h2>
                <p className="mb-2 text-xl text-gray-300">You've already found your P'code.</p>
                <sub className="text-gray-500">Now tell your P'Code to treat you to lunch</sub>
              </div>
            ) : (
              <div className="space-y-2 text-center font-[Poppins] text-white">
                <h1 className="text-xl font-semibold">Guess Your P'Code</h1>
                <div className="ml-3 flex items-center justify-center gap-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <img
                      key={i}
                      src={
                        (user.lives ?? 3) > i
                          ? '/assets/filled-heart.svg'
                          : '/assets/empty-heart.svg'
                      }
                      alt="heart"
                      className="size-8"
                    />
                  ))}
                </div>
                <span className="text-sm">{user.lives ?? 3} Live(s) Left</span>
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
                    title={''}
                    description={description}
                    stage={'shown'}
                    type={'freshman'}
                    editable={false}
                    onChange={() => {}}
                  />
                );
              })}
            </div>
            {!hasDrawnLucky && !user.isFound && (user.lives ?? 3) > 0 && (
              <button
                className="mb-4 rounded-2xl bg-orange-400 px-6 py-3 text-lg font-semibold text-white shadow-lg transition hover:scale-105"
                onClick={handleLuckyDraw}
              >
                🎰 Test Your Luck!
              </button>
            )}
            {!user.isFound && (
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
            {/* New: A more thematic modal with a cosmic gradient and glowing ring */}
            <div className="w-full max-w-lg scale-100 transform rounded-2xl bg-gradient-to-br from-indigo-950 via-gray-900 to-purple-950 p-8 shadow-2xl ring-1 shadow-purple-800/40 ring-purple-400/50">
              <div className="mb-6 text-center">
                {/* New: Thematic title and subtitle */}
                <h2 className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-5xl font-bold tracking-wider text-transparent drop-shadow-[0_2px_4px_rgba(236,72,153,0.4)]">
                  FATE'S DRAW
                </h2>
                <p className="mt-2 text-purple-300/80">The runes are cast...</p>
              </div>

              {/* The Slot Machine Reels */}
              <div className="mb-10 flex justify-center gap-4 font-mono">
                {reels.map((number, index) => (
                  <Slot
                    key={index}
                    finalNumber={number}
                    isSpinning={isSpinning[index]}
                    symbols={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
                  />
                ))}
              </div>

              <div className="flex flex-col items-center gap-4">
                {/* New: Thematic "Accept Fate" button */}
                <button
                  className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-lg font-bold text-white shadow-lg shadow-pink-500/20 transition-all hover:shadow-xl hover:shadow-pink-500/40 hover:brightness-110 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:opacity-50 disabled:shadow-none"
                  disabled={isSpinning.some((s) => s)}
                  onClick={() => {
                    setGuessInput(luckyCode ?? '');
                    setShowLuckyModal(false);
                  }}
                >
                  Accept Fate
                </button>
                {/* New: Ethereal "Close" button */}
                <button
                  className="rounded-lg px-5 py-2 font-semibold text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
                  onClick={() => setShowLuckyModal(false)}
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
