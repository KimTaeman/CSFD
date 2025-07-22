import { useProfileState } from '@/hooks/useProfileState';
import HintCard from '@/components/hint/hint-card';
import Guess from '@/components/hint/guess';
import RevealResult from '@/components/hint/RevealResult';
import { useState, useCallback, useEffect } from 'react';
import type { GuessState } from '@/types/hint.types';
import filledHeart from '@/assets/filled-heart.svg';
import emptyHeart from '@/assets/empty-heart.svg';
import MainLayout from '../layout';

function getInitialHints(key: string) {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : ['', '', ''];
}

function Page() {
  // User role state to control senior/junior view
  const [isSenior] = useState(false);
  const [isDoubleSenior] = useState(true);

  // Junior names for each set
  const juniorName1 = 'John Doe';
  const juniorName2 = 'Jane Smith';

  type CorrectAnswer = string | number | null;

  // Set correct answer from backend
  const [correctAnswer, setCorrectAnswer] = useState<CorrectAnswer>(100);
  const [guessState, setGuessState] = useState<GuessState>('n/a');
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 3;

  const onResult = useCallback((result: 'success' | 'fail', guess: string) => {
    /**
     * @TODO Handle the result of the guess
     */
  }, []);

  const checkAnswer = useCallback(
    (guess: string | number) => {
      if (correctAnswer === null) return false;
      return String(guess).trim().toLowerCase() === String(correctAnswer).trim().toLowerCase();
    },
    [correctAnswer],
  );

  const handleGuessSubmit = useCallback(
    (guess: string) => {
      if (attempts >= maxAttempts) return;

      const newAttempts = attempts + 1;
      const isCorrect = checkAnswer(guess);
      const result = isCorrect ? 'success' : 'fail';
      setGuessState(result);
      if (!isCorrect) setAttempts(newAttempts);
      console.log(`Guess: ${guess}, Result: ${result}, Attempts: ${newAttempts}`);
      onResult(result, guess);
    },
    [attempts, checkAnswer, onResult],
  );

  const resetGuess = useCallback(() => {
    setGuessState('n/a');
  }, []);

  const HINTS1_KEY = 'csfd_hints_set1';
  const HINTS2_KEY = 'csfd_hints_set2';

  // Hints state for first set (3 hints)
  const [hintsSet1, setHintsSet1] = useState(() => getInitialHints(HINTS1_KEY));
  const [editingSet1, setEditingSet1] = useState(false);
  const [draftHintsSet1, setDraftHintsSet1] = useState(hintsSet1);

  // Hints state for second set (3 hints)
  const [hintsSet2, setHintsSet2] = useState(() => getInitialHints(HINTS2_KEY));
  const [editingSet2, setEditingSet2] = useState(false);
  const [draftHintsSet2, setDraftHintsSet2] = useState(hintsSet2);

  // Reveal count for each set (0 = none, 1 = first, 2 = second, 3 = all)
  // edit here to change how many hints are revealed initially
  // the function to reveal the next hint is revealNextHintSet()
  const [revealedCount, setRevealedCount] = useState(0);

  // Returns array of hint card data for first set
  const getHintCardsSet1 = () => {
    return [0, 1, 2].map((i) => {
      // Senior: all shown, no title
      if (isSenior) {
        return {
          key: i,
          title: '',
          description: editingSet1 ? draftHintsSet1[i] : hintsSet1[i],
          stage: 'shown' as 'shown',
          editable: editingSet1,
        };
      }
      // Non-senior: reveal logic
      return {
        key: i,
        title: i < revealedCount ? '' : `${i - revealedCount + 1}`,
        description: editingSet1 ? draftHintsSet1[i] : hintsSet1[i],
        stage: i < revealedCount ? 'shown' : ('hidden' as 'shown' | 'hidden'),
        editable: editingSet1 && i < revealedCount,
      };
    });
  };

  // Call this to reveal the next hint card
  const revealNextHintSet = () => {
    setRevealedCount((prev) => Math.min(prev + 1, 3));
  };

  // Edit handlers for first set
  const handleEditHintsSet1 = useCallback(() => {
    setDraftHintsSet1(hintsSet1);
    setEditingSet1(true);
  }, [hintsSet1]);

  const handleHintChangeSet1 = useCallback((idx: number, value: string) => {
    setDraftHintsSet1((prev: string[]) => {
      const copy: string[] = [...prev];
      copy[idx] = value;
      return copy;
    });
  }, []);

  const handleConfirmEditSet1 = useCallback(() => {
    setHintsSet1(draftHintsSet1);
    setEditingSet1(false);
  }, [draftHintsSet1]);

  const handleCancelEditSet1 = useCallback(() => {
    setDraftHintsSet1(hintsSet1);
    setEditingSet1(false);
  }, [hintsSet1]);

  // Edit handlers for second set
  const handleEditHintsSet2 = useCallback(() => {
    setDraftHintsSet2(hintsSet2);
    setEditingSet2(true);
  }, [hintsSet2]);

  const handleHintChangeSet2 = useCallback((idx: number, value: string) => {
    setDraftHintsSet2((prev: string[]) => {
      const copy = [...prev];
      copy[idx] = value;
      return copy;
    });
  }, []);

  const handleConfirmEditSet2 = useCallback(() => {
    setHintsSet2(draftHintsSet2);
    setEditingSet2(false);
  }, [draftHintsSet2]);

  const handleCancelEditSet2 = useCallback(() => {
    setDraftHintsSet2(hintsSet2);
    setEditingSet2(false);
  }, [hintsSet2]);

  // Save to localStorage when hints change
  useEffect(() => {
    localStorage.setItem(HINTS1_KEY, JSON.stringify(hintsSet1));
  }, [hintsSet1]);
  useEffect(() => {
    localStorage.setItem(HINTS2_KEY, JSON.stringify(hintsSet2));
  }, [hintsSet2]);

  // Keep draftHintsSet1 in sync with hintsSet1 when not editing
  useEffect(() => {
    if (!editingSet1) setDraftHintsSet1(hintsSet1);
  }, [hintsSet1, editingSet1]);

  // Keep draftHintsSet2 in sync with hintsSet2 when not editing
  useEffect(() => {
    if (!editingSet2) setDraftHintsSet2(hintsSet2);
  }, [hintsSet2, editingSet2]);

  const outOfAttempts = attempts >= maxAttempts;

  return (
    <MainLayout>
      <main className="mx-auto flex w-full max-w-5xl flex-col items-center justify-start gap-y-10 p-4 xl:px-0 xl:py-20">
        <div className="flex w-full flex-col gap-y-10 sm:w-[70%] lg:w-full">
          {/* Junior label for first set */}
          {isSenior && (
            <div className="font-[Poppins] text-xl text-white">Junior: {juniorName1}</div>
          )}

          {/* First set of Hint Cards */}
          <div className="ipadpro-pl-one-col mb-8 grid w-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16">
            {getHintCardsSet1().map((card) => (
              <HintCard
                key={card.key}
                title={card.title}
                description={card.description}
                stage={card.stage}
                type={isSenior ? 'senior' : 'freshman'}
                editable={card.editable}
                onChange={(v) => handleHintChangeSet1(card.key, v)}
              />
            ))}
          </div>

          {/* TEMPPP: To reveal next card button (remove when integrating) */}
          {!isSenior && (
            <button
              className="hover:bg-gry-200 mb-4 rounded bg-white px-4 py-2 text-black"
              onClick={revealNextHintSet}
            >
              Reveal Next Hint
            </button>
          )}

          {/* Guess/Edit for first ncode */}
          <div className="mb-8 w-full">
            {!isSenior && (
              <div className="mb-7 flex items-center gap-0 text-2xl text-white select-none">
                Guess your P'code
                {/* Hearts */}
                <span className="ml-3 flex items-center gap-1">
                  <img
                    src={attempts < 3 ? filledHeart : emptyHeart}
                    alt="heart"
                    className="h-7 w-7"
                  />
                  <img
                    src={attempts < 2 ? filledHeart : emptyHeart}
                    alt="heart"
                    className="h-7 w-7"
                  />
                  <img
                    src={attempts < 1 ? filledHeart : emptyHeart}
                    alt="heart"
                    className="h-7 w-7"
                  />
                </span>
              </div>
            )}
            <Guess
              onGuessSubmit={handleGuessSubmit}
              guessState={guessState}
              attempts={attempts}
              maxAttempts={maxAttempts}
              onReset={resetGuess}
              isSenior={isSenior}
              onEditHints={handleEditHintsSet1}
              onConfirm={handleConfirmEditSet1}
              onCancel={handleCancelEditSet1}
            />
          </div>
        </div>

        {/* Second set for double ncode senior */}
        {isSenior && isDoubleSenior && (
          <div className="flex w-full flex-col gap-y-10 sm:w-[70%] lg:w-full">
            <div className="mb-4 font-[Poppins] text-xl text-white">Junior: {juniorName2}</div>
            <div className="ipadpro-pl-one-col mb-8 grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
              {[0, 1, 2].map((i) => (
                <HintCard
                  key={i}
                  title=""
                  description={editingSet2 ? draftHintsSet2[i] : hintsSet2[i]}
                  stage="shown"
                  type="senior"
                  editable={isSenior && editingSet2}
                  onChange={(v) => handleHintChangeSet2(i, v)}
                />
              ))}
            </div>
            <div className="mb-8 w-full">
              <Guess
                onGuessSubmit={handleGuessSubmit}
                guessState={guessState}
                attempts={attempts}
                maxAttempts={maxAttempts}
                onReset={resetGuess}
                isSenior={isSenior}
                onEditHints={handleEditHintsSet2}
                onConfirm={handleConfirmEditSet2}
                onCancel={handleCancelEditSet2}
              />
            </div>
          </div>
        )}

        {/* Overlay for Success/Fail */}
        {(guessState === 'success' || guessState === 'fail') && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 xl:pl-[11%]"
            onClick={resetGuess}
          >
            <RevealResult
              state={guessState === 'success' ? 'success' : 'fail'}
              outOfAttempts={outOfAttempts}
            />
          </div>
        )}
      </main>
    </MainLayout>
  );
}

export default Page;
