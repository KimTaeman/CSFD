import { useProfileState } from '@/hooks/useProfileState';
import HintCard from '@/components/hint/hint-card';
import Guess from '@/components/hint/guess';
import RevealResult from '@/components/hint/RevealResult';
import { useState, useCallback, useEffect } from 'react';
import type { GuessState } from '@/types/hint.types';

function getInitialHints(key: string) {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : ['', '', ''];
}

function Page() {
  // User role state to control senior/junior view
  const [isSenior] = useState(true);
  const [isDoubleSenior] = useState(true);

  // Junior names for each set
  const juniorName1 = 'John Doe';
  const juniorName2 = 'Jane Smith';

  // Guess state management
  const [guessState, setGuessState] = useState<GuessState>('n/a');
  const [attempts, setAttempts] = useState(0);
  const [correctAnswer] = useState(100); // Example correct answer, change with actual answer
  const maxAttempts = 3;

  const handleGuessSubmit = useCallback(
    (guess: string) => {
      const numericGuess = parseInt(guess, 10);
      const newAttempts = attempts + 1;

      if (numericGuess === correctAnswer) {
        setGuessState('success');
        return;
      }

      setAttempts(newAttempts);
      setGuessState('fail');
    },
    [attempts, correctAnswer],
  );

  const resetGuess = useCallback(() => {
    setGuessState('n/a');
    setAttempts(0);
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

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col items-center justify-start gap-y-10 p-4 xl:px-0 xl:py-12">
      <div className="flex w-full flex-col gap-y-10 sm:w-[70%] lg:w-full">
        {/* Junior label for first set */}
        {isSenior && <div className="font-[Poppins] text-xl text-white">Junior: {juniorName1}</div>}

        {/* First set of Hint Cards */}
        <div className="mb-8 grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
          <HintCard
            title=""
            description={editingSet1 ? draftHintsSet1[0] : hintsSet1[0]}
            stage="shown"
            type={isSenior ? 'senior' : 'freshman'}
            editable={isSenior && editingSet1}
            onChange={(v) => handleHintChangeSet1(0, v)}
          />
          <HintCard
            title=""
            description={editingSet1 ? draftHintsSet1[1] : hintsSet1[1]}
            stage="shown"
            type={isSenior ? 'senior' : 'freshman'}
            editable={isSenior && editingSet1}
            onChange={(v) => handleHintChangeSet1(1, v)}
          />
          <HintCard
            title=""
            description={editingSet1 ? draftHintsSet1[2] : hintsSet1[2]}
            stage="shown"
            type={isSenior ? 'senior' : 'freshman'}
            editable={isSenior && editingSet1}
            onChange={(v) => handleHintChangeSet1(2, v)}
          />
        </div>

        {/* Guess/Edit for first ncode */}
        <div className="mb-8 w-full">
          {!isSenior && (
            <div className="mb-7 text-2xl text-white select-none">Guess your P'code 💚💚💚</div>
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
          <div className="mb-8 grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
            <HintCard
              title=""
              description={editingSet2 ? draftHintsSet2[0] : hintsSet2[0]}
              stage="shown"
              type="senior"
              editable={isSenior && editingSet2}
              onChange={(v) => handleHintChangeSet2(0, v)}
            />
            <HintCard
              title=""
              description={editingSet2 ? draftHintsSet2[1] : hintsSet2[1]}
              stage="shown"
              type="senior"
              editable={isSenior && editingSet2}
              onChange={(v) => handleHintChangeSet2(1, v)}
            />
            <HintCard
              title=""
              description={editingSet2 ? draftHintsSet2[2] : hintsSet2[2]}
              stage="shown"
              type="senior"
              editable={isSenior && editingSet2}
              onChange={(v) => handleHintChangeSet2(2, v)}
            />
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={resetGuess}
        >
          <RevealResult state={guessState === 'success' ? 'success' : 'fail'} />
        </div>
      )}
    </main>
  );
}

export default Page;
