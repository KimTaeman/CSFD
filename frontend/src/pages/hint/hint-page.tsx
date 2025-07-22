import { useState, useCallback, useEffect } from 'react';
import { useAuthContext } from '@/hooks/useAuthContext';
import api from '@/api/axios';
import type { GuessState, Hint } from '@/types/hint.types';
import MainLayout from '../layout';
import LoadingLayout from '@/components/layout/loading';
import HintCard from '@/components/hint/hint-card';
import Guess from '@/components/hint/guess';
import RevealResult from '@/components/hint/RevealResult';
import { useMutation } from '@tanstack/react-query';
import filledHeart from '@/assets/filled-heart.svg';
import emptyHeart from '@/assets/empty-heart.svg';

function Page() {
  const { user } = useAuthContext();
  const [guessState, setGuessState] = useState<GuessState>('n/a');
  const [revealedCount, setRevealedCount] = useState(0);
  const [editing, setEditing] = useState(false);
  const [draftHints, setDraftHints] = useState<Hint[]>([]);

  const { mutate: updateHint } = useMutation({
    mutationFn: (hints: Hint[]) => api.put('/hints', hints),
  });

  useEffect(() => {
    if (user) {
      setDraftHints(user.hints);
    }
  }, [user]);

  console.log(user);

  const handleGuessSubmit = useCallback(
    (guess: string) => {
      if (!user || user.isSenior) return;

      const id = user.id;

      if (revealedCount >= 3) return;

      const res = api.put(`/students/${id}/guess`, guess);
      console.log(res);

      const isCorrect = user.mentor?.id === guess;
      const result = isCorrect ? 'success' : 'fail';
      setGuessState(result);
      if (!isCorrect) setRevealedCount((prev) => prev + 1);
    },
    [user, revealedCount],
  );

  const resetGuess = useCallback(() => {
    setGuessState('n/a');
  }, []);

  const handleEdit = useCallback(() => {
    setEditing(true);
  }, []);

  const handleCancel = useCallback(() => {
    setEditing(false);
    setDraftHints(user.hints);
  }, [user]);

  const handleConfirm = useCallback(() => {
    updateHint(draftHints);
    setEditing(false);
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
            return (
              <div key={mentee.id} className="flex w-full flex-col gap-y-10 sm:w-[70%] lg:w-full">
                <div className="font-[Poppins] text-xl text-white">
                  Junior: {mentee.displayName}
                </div>
                <div className="ipadpro-pl-one-col mb-8 grid w-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16">
                  {menteeHints.map((hint, i) => (
                    <HintCard
                      key={hint.id}
                      title={''}
                      description={hint.content}
                      stage={'shown'}
                      type={'senior'}
                      editable={editing}
                      onChange={(v) => handleHintChange(hint.id, v)}
                    />
                  ))}
                </div>
                {}
                <div className="mb-8 w-full">
                  <Guess
                    onGuessSubmit={() => {}}
                    guessState={'n/a'}
                    attempts={0}
                    maxAttempts={0}
                    onReset={() => {}}
                    isSenior={isSenior}
                    onEditHints={handleEdit}
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                  />
                </div>
              </div>
            );
          })}

        {!isSenior && (
          <div className="flex w-full flex-col gap-y-10 sm:w-[70%] lg:w-full">
            <div className="ipadpro-pl-one-col mb-8 grid w-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16">
              {draftHints.map((hint, i) => (
                <HintCard
                  key={hint.id}
                  title={!isSenior && i >= revealedCount ? `${i - revealedCount + 1}` : ''}
                  description={hint.content}
                  stage={!isSenior && i >= revealedCount ? 'hidden' : 'shown'}
                  type={isSenior ? 'senior' : 'freshman'}
                  editable={editing}
                  onChange={(v) => handleHintChange(hint.id, v)}
                />
              ))}
            </div>
            <div className="mb-8 w-full">
              <div className="mb-7 flex items-center gap-0 text-2xl text-white select-none">
                Guess your P'code
                {/* Hearts */}
                <span className="ml-3 flex items-center gap-1">
                  <img
                    src={user.lives < 3 ? filledHeart : emptyHeart}
                    alt="heart"
                    className="h-7 w-7"
                  />
                  <img
                    src={user.lives < 2 ? filledHeart : emptyHeart}
                    alt="heart"
                    className="h-7 w-7"
                  />
                  <img
                    src={user.lives < 1 ? filledHeart : emptyHeart}
                    alt="heart"
                    className="h-7 w-7"
                  />
                </span>
              </div>
              <Guess
                onGuessSubmit={handleGuessSubmit}
                guessState={guessState}
                attempts={revealedCount}
                maxAttempts={3}
                onReset={resetGuess}
                isSenior={isSenior}
                onEditHints={handleEdit}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
              />
            </div>
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
