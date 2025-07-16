import { useProfileState } from '@/hooks/useProfileState';
import HintCard from '@/components/hint/hint-card';
import Guess from '@/components/hint/guess';
import HamburgerIcon from '@/assets/hamburger.svg';
import FailImage from '@/assets/fail.png';
import SuccessImage from '@/assets/success.png';
import SparkleImage from '@/assets/sparkle.png';
import { useState, useCallback } from 'react';
import RevealResult from '@/components/hint/RevealResult';

type GuessState = 'n/a' | 'success' | 'fail';

function Page() {
  const { isSidebarOpen, closeSidebar, openSidebar } = useProfileState();

  // User role state to control senior/junior view
  // Get these from your database or context
  const [isSenior] = useState(true);
  const [isDoubleSenior] = useState(true);

  // Junior names for each set
  const juniorName1 = 'John Doe';
  const juniorName2 = 'Jane Smith';

  // Guess state management
  const [guessState, setGuessState] = useState<GuessState>('n/a');
  const [attempts, setAttempts] = useState(0);
  const [correctAnswer] = useState(100);
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

  // Hints state for first set (3 hints)
  const [hintsSet1, setHintsSet1] = useState(["", "", ""]);
  const [editingSet1, setEditingSet1] = useState(false);
  const [draftHintsSet1, setDraftHintsSet1] = useState(hintsSet1);

  // Hints state for second set (3 hints)
  const [hintsSet2, setHintsSet2] = useState(["", "", ""]);
  const [editingSet2, setEditingSet2] = useState(false);
  const [draftHintsSet2, setDraftHintsSet2] = useState(hintsSet2);

  // Edit handlers for first set
  const handleEditHintsSet1 = useCallback(() => {
    setDraftHintsSet1(hintsSet1);
    setEditingSet1(true);
  }, [hintsSet1]);

  const handleHintChangeSet1 = useCallback(
    (idx: number, value: string) => {
      setDraftHintsSet1((prev) => {
        const copy = [...prev];
        copy[idx] = value;
        return copy;
      });
    },
    [],
  );

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

  const handleHintChangeSet2 = useCallback(
    (idx: number, value: string) => {
      setDraftHintsSet2((prev) => {
        const copy = [...prev];
        copy[idx] = value;
        return copy;
      });
    },
    [],
  );

  const handleConfirmEditSet2 = useCallback(() => {
    setHintsSet2(draftHintsSet2);
    setEditingSet2(false);
  }, [draftHintsSet2]);

  const handleCancelEditSet2 = useCallback(() => {
    setDraftHintsSet2(hintsSet2);
    setEditingSet2(false);
  }, [hintsSet2]);

  // Callbacks for senior hint editing (placeholders for future logic :))
  const handleEditHints = useCallback(() => {}, []);
  const handleConfirmEdit = useCallback(() => {}, []);
  const handleCancelEdit = useCallback(() => {}, []);
  const [isEditingSet2, setIsEditingSet2] = useState(false);

  return (
    <>
      {/* Desktop-only content */}
      <div className="force-mobile-hide hidden min-h-screen w-full bg-[url('frontend/src/assets/bg-2-old.png')] bg-cover bg-fixed bg-center bg-no-repeat text-white xl:flex pl-[24%]">
        {/* Main Content */}
        <main className="relative flex-1 p-8">
          {/* Junior label for first set */}
          {isSenior && (
            <div className="absolute top-[6%] left-[3%] z-10 font-[Poppins] text-xl text-white">
              Junior: {juniorName1}
            </div>
          )}

          {/* First set of Hint Cards */}
          <div className="absolute top-[6%] left-[2%] w-80 pt-13">
            <HintCard
              title=""
              description={editingSet1 ? draftHintsSet1[0] : hintsSet1[0]}
              stage="shown"
              type={isSenior ? 'senior' : 'freshman'}
              editable={isSenior && editingSet1}
              onChange={(v) => handleHintChangeSet1(0, v)}
            />
          </div>
          <div className="absolute top-[6%] left-[2%] w-80 pt-13 pl-158">
            <HintCard
              title=""
              description={editingSet1 ? draftHintsSet1[1] : hintsSet1[1]}
              stage="shown"
              type={isSenior ? 'senior' : 'freshman'}
              editable={isSenior && editingSet1}
              onChange={(v) => handleHintChangeSet1(1, v)}
            />
          </div>
          <div className="absolute top-[6%] left-[2%] w-80 pt-83">
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
          <div
            className={`absolute left-[2%] w-200 z-20 ${isSenior ? 'top-[56%] lg:top-[6%] lg:pt-158' : 'top-[70%] lg:top-[6%] lg:pt-170'}`}
          >
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

          {/* Second set for double ncode senior */}
          {isSenior && isDoubleSenior && (
            <>
              <div className="absolute top-[11%] left-[3%] z-10 pt-165 font-[Poppins] text-xl text-white">
                Junior: {juniorName2}
              </div>
              <div className="absolute top-[11%] left-[2%] w-80 pt-179">
                <HintCard
                  title=""
                  description={editingSet2 ? draftHintsSet2[0] : hintsSet2[0]}
                  stage="shown"
                  type="senior"
                  editable={isSenior && editingSet2}
                  onChange={(v) => handleHintChangeSet2(0, v)}
                />
              </div>
              <div className="absolute top-[11%] left-[2%] w-80 pt-179 pl-158">
                <HintCard
                  title=""
                  description={editingSet2 ? draftHintsSet2[1] : hintsSet2[1]}
                  stage="shown"
                  type="senior"
                  editable={isSenior && editingSet2}
                  onChange={(v) => handleHintChangeSet2(1, v)}
                />
              </div>
              <div className="absolute top-[11%] left-[2%] w-80 pt-71 pt-248">
                <HintCard
                  title=""
                  description={editingSet2 ? draftHintsSet2[2] : hintsSet2[2]}
                  stage="shown"
                  type="senior"
                  editable={isSenior && editingSet2}
                  onChange={(v) => handleHintChangeSet2(2, v)}
                />
              </div>
              <div className="absolute top-[123%] left-[2%] w-200 lg:top-[11%] lg:pt-322">
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
            </>
          )}
        </main>
        {/* Overlay for Success/Fail - Desktop */}
        {(guessState === 'success' || guessState === 'fail') && (
          <div className="fixed inset-0 z-50 flex bg-black/50" onClick={resetGuess}>
            <div className="hidden w-[270px] lg:block" />
            <div className="flex flex-1 items-center justify-center">
              <RevealResult state={guessState === 'success' ? 'success' : 'fail'} />
            </div>
          </div>
        )}
      </div>

      {/* Mobile content */}
      <div className="force-mobile relative min-h-screen w-full bg-[url('frontend/src/assets/bg-2-old.png')] bg-cover bg-fixed bg-center bg-no-repeat text-white xl:hidden">
        <div className="absolute inset-0 z-0 bg-black/6"></div>
        <div className="relative z-10 flex justify-start p-4">
          <button
            onClick={openSidebar}
            className="rounded-lg p-2 transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Open menu"
          >
            <img src={HamburgerIcon} alt="Menu" className="h-6 w-6" />
          </button>
        </div>
        <main className="relative z-10 flex min-h-screen flex-col space-y-4 px-4 pb-6 lg:pl-[38%]">
          {/* Junior label for first set (MOBILE) */}
          {isSenior && (
            <div className="ipadpro-xl-ml-hint mt-3 mb-2 ml-5 font-[Poppins] text-lg text-white">
              Junior: {juniorName1}
            </div>
          )}
          {/* First set of HintCards */}
          <div className="mt-5 mb-24 flex flex-col items-center space-y-7 lg:ml-8 lg:items-start">
            <HintCard
              title=""
              description=""
              stage="shown"
              type={isSenior ? 'senior' : 'freshman'}
              editable={isSenior}
            />
            <HintCard
              title=""
              description=""
              stage="shown"
              type={isSenior ? 'senior' : 'freshman'}
              editable={isSenior}
            />
            <HintCard
              title=""
              description=""
              stage="shown"
              type={isSenior ? 'senior' : 'freshman'}
              editable={isSenior}
            />
          </div>
          <div className={`${isSenior ? '-mt-14' : '-mt-4'} lg:mt-[2%] lg:ml-8`}>
            {!isSenior && (
              <div className="mb-7 font-[Poppins] text-lg text-white select-none">
                Guess your P'code 💚💚💚
              </div>
            )}
            <Guess
              onGuessSubmit={handleGuessSubmit}
              guessState={guessState}
              attempts={attempts}
              maxAttempts={maxAttempts}
              onReset={resetGuess}
              isSenior={isSenior}
              onEditHints={handleEditHints}
              onConfirm={handleConfirmEdit}
              onCancel={handleCancelEdit}
            />
          </div>
          {isSenior && isDoubleSenior && (
            <>
              {/* Junior label for second set (MOBILE) */}
              <div className="ipadpro-xl-ml-hint mt-5 mb-2 ml-5 font-[Poppins] text-lg text-white">
                Junior: {juniorName2}
              </div>
              <div className="mt-5 mb-24 flex flex-col items-center space-y-7 lg:ml-8 lg:items-start">
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
              <div className="-mt-14 lg:mt-[2%] lg:ml-8">
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
            </>
          )}
        </main>
        {(guessState === 'success' || guessState === 'fail') && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={resetGuess}
          >
            {guessState === 'success' ? (
              <div className="relative flex items-center justify-center">
                <img
                  src={SparkleImage}
                  alt="Sparkle effect"
                  className="absolute z-10 h-[90%] w-[90%] object-contain"
                />
                <img
                  src={SuccessImage}
                  alt="Success"
                  className="relative z-20 h-[90%] w-[90%] object-contain"
                />
              </div>
            ) : (
              <img src={FailImage} alt="Fail" className="h-[100%] w-[100%] object-contain" />
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Page;
