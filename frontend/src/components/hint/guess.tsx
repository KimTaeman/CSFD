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
      <h1 className="mb-4 font-[Poppins] text-lg lg:mb-4 lg:text-2xl">Guess your P'code 💚💚💚</h1>

      {/* Error message */}
      {errorMessage && <div className="mb-2 text-sm text-red-400 lg:text-base">{errorMessage}</div>}

      {/* Desktop layout - side by side */}
      <div className="hidden w-full items-center gap-4 lg:flex">
        <input
          type="text"
          placeholder="ex. 880"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          disabled={guessState !== 'n/a'}
          className="min-h-14 flex-1 rounded-2xl border-none bg-white px-4 py-3 text-xl text-black placeholder-gray-400 outline-none disabled:cursor-not-allowed disabled:bg-gray-300"
        />
        <button
          onClick={handleSubmit}
          disabled={guessState !== 'n/a'}
          className="ml-1 rounded-2xl bg-orange-400 px-6 py-3 text-xl whitespace-nowrap text-white transition-colors hover:bg-orange-500 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          Send
        </button>
        {guessState !== 'n/a' && (
          <button
            onClick={onReset}
            className="rounded-2xl bg-blue-400 px-6 py-3 text-xl whitespace-nowrap text-white transition-colors hover:bg-blue-500"
          >
            Reset
          </button>
        )}
      </div>

      {/* Mobile layout - stacked */}
      <div className="flex w-full flex-col gap-3 lg:hidden">
        <input
          type="text"
          placeholder="ex. 880"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          disabled={guessState !== 'n/a'}
          className="min-h-12 w-full rounded-xl border-none bg-white px-4 py-3 text-base text-black placeholder-gray-400 outline-none disabled:cursor-not-allowed disabled:bg-gray-300"
        />
        <div className="flex gap-3">
          <button
            onClick={handleSubmit}
            disabled={guessState !== 'n/a'}
            className="self-start rounded-xl bg-orange-400 px-6 py-3 text-base text-white transition-colors hover:bg-orange-500 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            Send
          </button>
          {guessState !== 'n/a' && (
            <button
              onClick={onReset}
              className="self-start rounded-xl bg-blue-400 px-6 py-3 text-base text-white transition-colors hover:bg-blue-500"
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
