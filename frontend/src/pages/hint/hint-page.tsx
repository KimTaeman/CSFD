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

  // User role state to control senior/junior view
  const [isSenior, setIsSenior] = useState(false);

  // Guess state management
  const [guessState, setGuessState] = useState<GuessState>('n/a');
  const [attempts, setAttempts] = useState(0);
  const [correctAnswer] = useState(100); // Default correct answer
  const maxAttempts = 3;

  const handleGuessSubmit = useCallback((guess: string) => {
    const numericGuess = parseInt(guess, 10);
    const newAttempts = attempts + 1;
    
    console.log(`Guess attempt ${newAttempts}: ${numericGuess}`);
    
    if (numericGuess === correctAnswer) {
      setGuessState('success');
      console.log('State changed to: success');
      return;
    }
    
    setAttempts(newAttempts);
    
    // Show fail image on every wrong attempt
    setGuessState('fail');
    console.log('State changed to: fail');
  }, [attempts, correctAnswer]);

  const resetGuess = useCallback(() => {
    setGuessState('n/a');
    setAttempts(0);
    console.log('Guess state reset to: n/a');
  }, []);

  // Toggle function kept for potential future use
  const toggleUserRole = useCallback(() => {
    setIsSenior(prev => !prev);
  }, []);

  // Callbacks for senior hint editing
  const handleEditHints = useCallback(() => {
    console.log("Edit hints mode activated");
    // Additional logic for entering edit mode
  }, []);
  
  const handleConfirmEdit = useCallback(() => {
    console.log("Hint edits confirmed");
    // Additional logic for saving hint changes
  }, []);
  
  const handleCancelEdit = useCallback(() => {
    console.log("Hint edits cancelled");
    // Additional logic for cancelling hint changes
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
            <HintCard 
              title="" 
              description="" 
              stage="shown" 
              type={isSenior ? 'senior' : 'freshman'} 
            />
          </div>

          {/* Second Hint Card - Top Right */}
          <div className="absolute top-[11%] left-[34%] w-80 pl-40">
            <HintCard 
              title="" 
              description="" 
              stage="shown" 
              type={isSenior ? 'senior' : 'freshman'} 
            />
          </div>

          {/* Third Hint Card - Bottom Left */}
          <div className="absolute top-[38%] left-[2%] w-80">
            <HintCard 
              title="" 
              description="" 
              stage="shown" 
              type={isSenior ? 'senior' : 'freshman'} 
            />
          </div>

          {/* Guess Component - Below Third Card */}
          <div
            className={`absolute left-[2%] w-200 ${
              isSenior
                ? 'top-[56%] lg:top-[66%]' 
                : 'top-[70%] lg:top-[70%]'
            }`}
          >
            {/* Add prompt text above Guess */}
            <div className="mb-7 text-2xl  text-white select-none">
              Guess your P'code 💚💚💚
            </div>
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
        </main>

        {/* Desktop Overlay for Success/Fail */}
        {(guessState === 'success' || guessState === 'fail') && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={resetGuess} // Dismiss on click anywhere
          >
            <div className="ml-[270px] flex h-full w-full items-center justify-center">
              {guessState === 'success' ? (
                <div className="relative flex items-center justify-center">
                  <img 
                    src={SparkleImage} 
                    alt="Sparkle effect" 
                    className="absolute w-[1500px] h-[2500px] mb-[14%] object-contain z-10"
                    onError={() => console.log('Sparkle image failed to load')}
                    onLoad={() => console.log('Sparkle image loaded successfully')}
                  />
                  <img 
                    src={SuccessImage} 
                    alt="Success" 
                    className="relative w-[70%] h-[70%] mb-[14%] object-contain z-20"
                    onError={() => console.log('Success image failed to load')}
                    onLoad={() => console.log('Success image loaded successfully')}
                  />
                </div>
              ) : (
                <img 
                  src={FailImage} 
                  alt="Fail" 
                  className="max-w-[81%] max-h-[81%] mb-[13%] object-contain"
                />
              )}
            </div>
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

          {/* Guess Component */}
          <div className={isSenior ? "-mt-32" : "-mt-6"}>
            {/* Add prompt text above Guess */}
            <div className="mb-7 font-[Poppins] text-lg text-white select-none">
              Guess your P'code 💚💚💚
            </div>
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
        </main>

        {/* Mobile Overlay for Success/Fail */}
        {(guessState === 'success' || guessState === 'fail') && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={resetGuess} // Dismiss on click anywhere
          >
            {guessState === 'success' ? (
              <div className="relative flex items-center justify-center">
                <img 
                  src={SparkleImage} 
                  alt="Sparkle effect" 
                  className="absolute w-[90%] h-[90%] object-contain z-10"
                />
                <img 
                  src={SuccessImage} 
                  alt="Success" 
                  className="relative w-[90%] h-[90%] object-contain z-20"
                />
              </div>
            ) : (
              <img 
                src={FailImage} 
                alt="Fail" 
                className="w-[100%] h-[100%] object-contain"
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Page;
