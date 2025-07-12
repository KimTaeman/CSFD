import Sidebar from '@/components/sidebar';
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

  // Callbacks for senior hint editing (placeholders for future logic :))
  const handleEditHints = useCallback(() => {}, []);
  const handleConfirmEdit = useCallback(() => {}, []);
  const handleCancelEdit = useCallback(() => {}, []);

  return (
    <>
      {/* Desktop-only content */}
      <div className="hidden min-h-screen w-full bg-[url('frontend/src/assets/bg-2-old.png')] bg-cover bg-fixed bg-center bg-no-repeat text-white xl:flex">
        {/* Sidebar */}
        <div className="p-4 pr-110 pl-10">
          {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />}
        </div>

        {/* Main Content */}
        <main className="relative flex-1 p-8">
          {/* Junior label for first set */}
          {isSenior && (
            <div className="absolute top-[6%] left-[3%] z-10 font-[Poppins] text-xl text-white">
              Junior: {juniorName1}
            </div>
          )}

          {/* First set of Hint Cards */}
          <div className="absolute top-[11%] left-[2%] w-80">
            <HintCard
              title=""
              description=""
              stage="shown"
              type={isSenior ? 'senior' : 'freshman'}
            />
          </div>
          <div className="absolute top-[11%] left-[34%] w-80 pl-40">
            <HintCard
              title=""
              description=""
              stage="shown"
              type={isSenior ? 'senior' : 'freshman'}
            />
          </div>
          <div className="absolute top-[38%] left-[2%] w-80">
            <HintCard
              title=""
              description=""
              stage="shown"
              type={isSenior ? 'senior' : 'freshman'}
            />
          </div>

          {/* Guess/Edit for first ncode */}
          <div
            className={`absolute left-[2%] w-200 ${isSenior ? 'top-[56%] lg:top-[66%]' : 'top-[70%] lg:top-[70%]'}`}
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
              onEditHints={handleEditHints}
              onConfirm={handleConfirmEdit}
              onCancel={handleCancelEdit}
            />
          </div>

          {/* Second set for double ncode senior */}
          {isSenior && isDoubleSenior && (
            <>
              <div className="absolute top-[73%] left-[3%] z-10 font-[Poppins] text-xl text-white">
                Junior: {juniorName2}
              </div>
              <div className="absolute top-[78%] left-[2%] w-80">
                <HintCard title="" description="" stage="shown" type="senior" />
              </div>
              <div className="absolute top-[78%] left-[34%] w-80 pl-40">
                <HintCard title="" description="" stage="shown" type="senior" />
              </div>
              <div className="absolute top-[105%] left-[2%] w-80">
                <HintCard title="" description="" stage="shown" type="senior" />
              </div>
              <div className="absolute top-[123%] left-[2%] w-200 lg:top-[133%]">
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
      <div className="relative min-h-screen w-full bg-[url('frontend/src/assets/bg-2-old.png')] bg-cover bg-fixed bg-center bg-no-repeat text-white xl:hidden">
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
        {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />}
        <main className="relative z-10 flex min-h-screen flex-col space-y-4 px-4 pb-6 lg:pl-[38%]">
          {/* First set of HintCards */}
          <div className="mt-9 mb-24 flex flex-col items-center space-y-7 lg:ml-8 lg:items-start">
            <HintCard
              title=""
              description=""
              stage="shown"
              type={isSenior ? 'senior' : 'freshman'}
            />
            <HintCard
              title=""
              description=""
              stage="shown"
              type={isSenior ? 'senior' : 'freshman'}
            />
            <HintCard
              title=""
              description=""
              stage="shown"
              type={isSenior ? 'senior' : 'freshman'}
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
              <div className="mt-9 mb-24 flex flex-col items-center space-y-7 lg:ml-8 lg:items-start">
                <HintCard title="" description="" stage="shown" type="senior" />
                <HintCard title="" description="" stage="shown" type="senior" />
                <HintCard title="" description="" stage="shown" type="senior" />
              </div>
              <div className="-mt-14 lg:mt-[2%] lg:ml-8">
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
