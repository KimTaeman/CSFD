import Sidebar from '@/components/sidebar';
import { useProfileState } from '@/hooks/useProfileState';
import HintCard from '@/components/hint/hint-card';
import Guess from '@/components/hint/guess';
import HamburgerIcon from '@/assets/hamburger.svg';
import FailImage from '@/assets/fail.png';
import SuccessImage from '@/assets/success.png';
import SparkleImage from '@/assets/sparkle.png';
import { useState, useCallback } from 'react';

type GuessState = 'n/a' | 'success' | 'fail';

function Page() {
  const {
    isSidebarOpen,
    isEditing,
    closeSidebar,
    openSidebar,
    handleEditClick,
    handleConfirm,
    handleCancel,
  } = useProfileState();

  // Guess state management
  const [guessState, setGuessState] = useState<GuessState>('n/a');
  const [attempts, setAttempts] = useState(0);
  const [correctAnswer] = useState(100); // Default correct answer
  const maxAttempts = 3;

  const handleGuessSubmit = useCallback(
    (guess: string) => {
      const numericGuess = parseInt(guess, 10);
      const newAttempts = attempts + 1;

      console.log(`Guess attempt ${newAttempts}: ${numericGuess}`);

      if (numericGuess === correctAnswer) {
        setGuessState('success');
        console.log('State changed to: success');
        return;
      }

      setAttempts(newAttempts);

      if (newAttempts >= maxAttempts) {
        setGuessState('fail');
        console.log('State changed to: fail');
      } else {
        console.log(`State remains: n/a (${newAttempts}/${maxAttempts} attempts used)`);
      }
    },
    [attempts, correctAnswer, maxAttempts],
  );

  const resetGuess = useCallback(() => {
    setGuessState('n/a');
    setAttempts(0);
    console.log('Guess state reset to: n/a');
  }, []);

  return (
    <>
      {/* Desktop-only content */}
      <div className="hidden min-h-screen w-full bg-[url('frontend/src/assets/bg-2-old.png')] bg-cover bg-center bg-no-repeat text-white lg:flex">
        {/* Sidebar */}
        <div className="p-4 pr-110 pl-10">
          {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />}
        </div>

        {/* Main Content */}
        <main className="relative flex-1 p-8">
          {/* First Hint Card - Top Left */}
          <div className="absolute top-[11%] left-[2%] w-80">
            <HintCard title="" description="" stage="shown" />
          </div>

          {/* Second Hint Card - Top Right */}
          <div className="absolute top-[11%] left-[34%] w-80 pl-40">
            <HintCard title="" description="" stage="shown" />
          </div>

          {/* Third Hint Card - Bottom Left */}
          <div className="absolute top-[38%] left-[2%] w-80">
            <HintCard title="" description="" stage="shown" />
          </div>

          {/* Guess Component - Below Third Card */}
          <div className="absolute top-[70%] left-[2%] w-200">
            <Guess
              onGuessSubmit={handleGuessSubmit}
              guessState={guessState}
              attempts={attempts}
              maxAttempts={maxAttempts}
              onReset={resetGuess}
            />
          </div>
        </main>

        {/* Desktop Overlay for Success/Fail */}
        {(guessState === 'success' || guessState === 'fail') && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            {guessState === 'success' ? (
              <div className="relative flex items-center justify-center">
                <img
                  src={SparkleImage}
                  alt="Sparkle effect"
                  className="absolute z-10 h-[1200px] w-[1200px] object-contain"
                  onError={() => console.log('Sparkle image failed to load')}
                  onLoad={() => console.log('Sparkle image loaded successfully')}
                />
                <img
                  src={SuccessImage}
                  alt="Success"
                  className="relative z-20 h-[700px] w-[700px] object-contain"
                  onError={() => console.log('Success image failed to load')}
                  onLoad={() => console.log('Success image loaded successfully')}
                />
              </div>
            ) : (
              <img src={FailImage} alt="Fail" className="max-h-[50%] max-w-[50%] object-contain" />
            )}
          </div>
        )}
      </div>

      {/* Mobile content */}
      <div className="relative min-h-screen w-full bg-[url('frontend/src/assets/bg-2-old.png')] bg-cover bg-center bg-no-repeat text-white lg:hidden">
        {/* Background overlay for opacity */}
        <div className="absolute inset-0 z-0 bg-black/6"></div>

        {/* Mobile Header with Hamburger */}
        <div className="relative z-10 flex justify-start p-4">
          <button
            onClick={openSidebar}
            className="rounded-lg p-2 transition-colors hover:bg-white/10"
            aria-label="Open menu"
          >
            <img src={HamburgerIcon} alt="Menu" className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Sidebar */}
        {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />}

        {/* Mobile Main Content */}
        <main className="relative z-10 flex min-h-screen flex-col space-y-4 px-4 pb-6">
          {/* Hint Cards in single column */}
          <div className="mt-9 mb-16 flex flex-col items-center space-y-7">
            <HintCard title="" description="" stage="shown" />
            <HintCard title="" description="" stage="shown" />
            <HintCard title="" description="" stage="shown" />
          </div>

          {/* Guess Component */}
          <div className="-mt-6">
            <Guess
              onGuessSubmit={handleGuessSubmit}
              guessState={guessState}
              attempts={attempts}
              maxAttempts={maxAttempts}
              onReset={resetGuess}
            />
          </div>
        </main>

        {/* Mobile Overlay for Success/Fail */}
        {(guessState === 'success' || guessState === 'fail') && (
          <div className="bg-opacity-20 fixed inset-0 z-50 flex items-center justify-center bg-black">
            {guessState === 'success' ? (
              <div className="relative flex items-center justify-center">
                <img
                  src={SparkleImage}
                  alt="Sparkle effect"
                  className="absolute z-10 h-[1000px] w-[1000px] object-contain"
                />
                <img
                  src={SuccessImage}
                  alt="Success"
                  className="relative z-20 h-[600px] w-[600px] object-contain"
                />
              </div>
            ) : (
              <img src={FailImage} alt="Fail" className="max-h-[60%] max-w-[60%] object-contain" />
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Page;
