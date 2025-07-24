import { useState, useCallback, useEffect } from 'react';
import { useAuthContext } from '@/hooks/useAuthContext';
import api from '@/api/axios';
import type { GuessState, Hint } from '@/types/hint.types';
import MainLayout from '../layout';
import LoadingLayout from '@/components/layout/loading';
import HintCard from '@/components/hint/hint-card';
import Guess from '@/components/hint/guess';
import RevealResult from '@/components/hint/RevealResult';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { formatDistanceToNowStrict } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

function Page() {
  const { user, updateGuessStatus } = useAuthContext();
  const [guessState, setGuessState] = useState<GuessState>('n/a');
  const [revealedCount, setRevealedCount] = useState(0);

  const [editingMenteeId, setEditingMenteeId] = useState<string | null>(null);
  const [draftHints, setDraftHints] = useState<Hint[]>([]);
  const [countdown, setCountdown] = useState<string[]>(['', '', '']);

  const updateCountdown = useCallback(() => {
    const hintReleaseDates = [
      toZonedTime(new Date(2025, 6, 29, 0, 0, 0), 'Asia/Bangkok'),
      toZonedTime(new Date(2025, 7, 1, 0, 0, 0), 'Asia/Bangkok'),
      toZonedTime(new Date(2025, 7, 3, 0, 0, 0), 'Asia/Bangkok'),
    ];

    const newCountdown = hintReleaseDates.map((date) => {
      const now = new Date();
      if (now < date) {
        return formatDistanceToNowStrict(date, { addSuffix: true });
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
    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ['authUser'] });
    // },
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

  const handleEdit = useCallback((menteeId: string) => {
    setEditingMenteeId(menteeId);
  }, []);

  const handleCancel = useCallback(() => {
    setEditingMenteeId(null);
    if (user) {
      setDraftHints(user.hints);
    }
  }, [user]);

  const handleConfirm = useCallback(() => {
    updateHint(draftHints);
    setEditingMenteeId(null);
  }, [draftHints, updateHint]);

  const handleHintChange = useCallback((id: string, content: string) => {
    setDraftHints((prev) => prev.map((hint) => (hint.id === id ? { ...hint, content } : hint)));
  }, []);

  if (!user) return <LoadingLayout />;

  const isSenior = user.isSenior;

  return (
    <MainLayout>
      <main className="mx-auto flex w-full max-w-5xl flex-col items-center justify-start gap-y-10 p-4 xl:px-0 xl:py-20">
        {isSenior &&
          user.mentees.map((mentee, index) => {
            const menteeHints = draftHints.slice(index * 3, index * 3 + 3);
            const isEditingThisMentee = editingMenteeId === mentee.id;

            return (
              <div key={mentee.id} className="flex w-full flex-col gap-y-10 sm:w-[70%] lg:w-full">
                <div className="space-y-2 text-center font-[Poppins] text-xl text-white">
                  <h1 className="font-semibold">
                    Your Junior {user.mentees.length > 1 && '#' + (index + 1)}
                  </h1>
                  <span>{mentee.displayName}</span>
                </div>
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
                <sub className="text-gray-500">Now tell your P'Code to treat you lunch</sub>
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
                const displayTitle = '';
                const description =
                  user.hints[i]?.content ||
                  (countdown[i] ? `Hint available ${countdown[i]}` : 'Hint not yet available');
                return (
                  <HintCard
                    key={hint?.id || `placeholder-${i}`}
                    title={displayTitle}
                    description={description}
                    stage={'shown'}
                    type={'freshman'}
                    editable={false}
                    onChange={() => {}}
                  />
                );
              })}
            </div>
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
      </main>
    </MainLayout>
  );
}

export default Page;
