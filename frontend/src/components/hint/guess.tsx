import { useState } from 'react';

type GuessState = 'n/a' | 'success' | 'fail';

interface GuessProps {
  onGuessSubmit: (guess: string) => void;
  guessState: GuessState;
  attempts: number;
  maxAttempts: number;
  onReset: () => void;
}

function Guess({ onGuessSubmit, guessState, attempts, maxAttempts, onReset }: GuessProps) {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      setErrorMessage('Please enter a value');
      return;
    }
    
    if (guessState === 'n/a') {
      setErrorMessage('');
      onGuessSubmit(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-lg lg:text-2xl mb-4 lg:mb-4 font-[Poppins]">Guess your P'code 💚💚💚</h1>
      
      {/* Error message */}
      {errorMessage && (
        <div className="mb-2 text-red-400 text-sm lg:text-base">
          {errorMessage}
        </div>
      )}
      
      {/* Desktop layout - side by side */}
      <div className="hidden lg:flex items-center gap-4 w-full">
        <input
          type="text"
          placeholder="ex. 880"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          disabled={guessState !== 'n/a'}
          className="flex-1 min-h-14 text-xl px-4 py-3 bg-white text-black rounded-2xl border-none outline-none placeholder-gray-400 disabled:bg-gray-300 disabled:cursor-not-allowed"
        />
        <button
          onClick={handleSubmit}
          disabled={guessState !== 'n/a'}
          className="px-6 ml-1 py-3 text-xl text-white rounded-2xl whitespace-nowrap bg-orange-400 hover:bg-orange-500 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Send
        </button>
        {guessState !== 'n/a' && (
          <button
            onClick={onReset}
            className="px-6 py-3 text-xl text-white rounded-2xl whitespace-nowrap bg-blue-400 hover:bg-blue-500 transition-colors"
          >
            Reset
          </button>
        )}
      </div>

      {/* Mobile layout - stacked */}
      <div className="lg:hidden flex flex-col gap-3 w-full">
        <input
          type="text"
          placeholder="ex. 880"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          disabled={guessState !== 'n/a'}
          className="w-full min-h-12 text-base px-4 py-3 bg-white text-black rounded-xl border-none outline-none placeholder-gray-400 disabled:bg-gray-300 disabled:cursor-not-allowed"
        />
        <div className="flex gap-3">
          <button
            onClick={handleSubmit}
            disabled={guessState !== 'n/a'}
            className="px-6 py-3 text-base text-white rounded-xl bg-orange-400 hover:bg-orange-500 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed self-start"
          >
            Send
          </button>
          {guessState !== 'n/a' && (
            <button
              onClick={onReset}
              className="px-6 py-3 text-base text-white rounded-xl bg-blue-400 hover:bg-blue-500 transition-colors self-start"
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Guess;
