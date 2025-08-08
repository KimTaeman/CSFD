import React, { useState } from 'react';

type GuessState = 'n/a' | 'success' | 'fail';

interface GuessProps {
  onGuessSubmit: (guess: string) => void;
  guessState: GuessState;
  attempts: number;
  maxAttempts: number;
  onReset: () => void;
  isSenior?: boolean | null;
  onEditHints?: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  isEditing: boolean;
  inputHint?: string;
  setInputHint?: React.Dispatch<React.SetStateAction<string>>;
  onLuckyDraw?: () => void;
  luckyDrawDisabled?: boolean;
  luckyDrawLabel?: string;
  isGuessingAllowed?: boolean;
}

function Guess({
  onGuessSubmit,
  guessState,
  attempts,
  maxAttempts,
  onReset,
  isSenior = false,
  onEditHints = () => {},
  onConfirm = () => {},
  onCancel = () => {},
  isEditing,
  inputHint,
  setInputHint,
  onLuckyDraw = () => {},
  luckyDrawDisabled,
  luckyDrawLabel,
  isGuessingAllowed = true,
}: GuessProps) {
  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = () => {
    if (!inputHint || !setInputHint) return;

    const isValid = /^[0-9]{3}$/.test(inputHint);

    if (!isValid) {
      setErrorMessage('Please enter exactly 3 digits.');
      return;
    }

    if (guessState === 'n/a') {
      setErrorMessage('');
      onGuessSubmit(inputHint);
      setInputHint('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    // Allow only digits, and only up to 3 of them.
    if (/^[0-9]{0,3}$/.test(value)) {
      if (!setInputHint) return;
      setInputHint(value);
    }
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  return (
    <div className="flex flex-col">
      {/* Error message */}
      {!isSenior && errorMessage && (
        <div className="mb-2 text-sm text-red-400 lg:text-base">{errorMessage}</div>
      )}

      {/* Main container for inputs and buttons */}
      <div className="flex w-full flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
        {isSenior ? (
          <div className="w-full">
            {isEditing ? (
              <div className="flex w-full flex-col gap-3 lg:mb-4 lg:flex-row lg:justify-start lg:gap-4">
                <button
                  onClick={onConfirm}
                  className="font-poppins w-full flex-1 rounded-xl border border-white/10 bg-purple-900/60 px-8 py-2 text-sm text-white transition-colors hover:bg-purple-900/80 focus:ring-2 focus:ring-white/50 focus:outline-none lg:px-16 lg:text-base"
                >
                  Confirm
                </button>
                <button
                  onClick={onCancel}
                  className="font-poppins w-full flex-1 rounded-xl border border-white/10 bg-gray-900/60 px-6 py-2 text-sm text-white transition-colors hover:bg-gray-900/80 focus:ring-2 focus:ring-white/50 focus:outline-none lg:px-12 lg:text-base"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={onEditHints}
                className="font-poppins w-full flex-1 rounded-xl border border-white/10 bg-purple-900/60 px-8 py-2 text-sm text-white transition-colors hover:bg-purple-900/80 focus:ring-2 focus:ring-white/50 focus:outline-none lg:px-16 lg:text-base"
              >
                Edit your hints
              </button>
            )}
          </div>
        ) : (
          <div className="w-full space-y-4">
            <div className="flex w-full flex-col justify-between gap-3 lg:items-stretch lg:gap-5">
              <input
                type="text"
                inputMode="numeric"
                placeholder="Enter a number (e.g., 880)"
                value={inputHint}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                disabled={guessState !== 'n/a' || attempts >= maxAttempts || !isGuessingAllowed}
                className={`font-poppins h-10 w-full rounded-xl border-none px-2 py-2 text-base transition-colors outline-none not-disabled:border not-disabled:border-white/10 not-disabled:bg-gray-900/50 disabled:cursor-not-allowed disabled:bg-gray-900/50 disabled:text-gray-300 lg:h-12 lg:px-6 lg:text-lg`}
              />
              <div className="flex w-full flex-col justify-end gap-3 lg:flex-row lg:gap-4">
                <button
                  onClick={handleSubmit}
                  disabled={guessState !== 'n/a' || attempts >= maxAttempts || !isGuessingAllowed}
                  className="font-poppins w-full flex-1 rounded-xl border border-white/10 bg-purple-900/60 px-8 py-2 text-sm text-white transition-colors not-disabled:hover:bg-purple-900/80 focus:ring-2 focus:ring-white/50 focus:outline-none disabled:text-gray-400/80 lg:px-8 lg:text-base"
                >
                  Confirm Guess
                </button>
                {onLuckyDraw && (
                  <button
                    type="button"
                    disabled={
                      luckyDrawDisabled ||
                      guessState !== 'n/a' ||
                      attempts >= maxAttempts ||
                      !isGuessingAllowed
                    }
                    className="font-poppins w-full flex-1 rounded-xl border border-white/10 bg-orange-900/60 px-8 py-2 text-sm text-white transition-colors not-disabled:hover:bg-orange-900/80 focus:ring-2 focus:ring-white/50 focus:outline-none disabled:text-gray-400/80 lg:px-8 lg:text-base"
                    onClick={onLuckyDraw}
                  >
                    Invoke the Prophecy
                  </button>
                )}
              </div>
            </div>
            <p className="text-center text-sm text-gray-400">
              Enter a last 3 digits student ID code to make your guess. Use the prophecy for a
              random suggestion.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Guess;
