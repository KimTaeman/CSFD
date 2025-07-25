import { useState } from 'react';

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
}: GuessProps) {
  const [inputHint, setInputHint] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = () => {
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

      {/* Shared input/button layout for all screen sizes */}
      <div className="flex w-full flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
        {isSenior ? (
          <div>
            {isEditing ? (
              <div className="flex w-full flex-col gap-3 lg:-mt-13 lg:mb-4 lg:flex-row lg:justify-start lg:gap-4">
                <button
                  onClick={onConfirm}
                  className="min-w-[140px] rounded-xl bg-orange-400 px-6 py-3 text-base text-white transition-colors hover:bg-orange-500 lg:flex-1 lg:rounded-2xl"
                >
                  Confirm
                </button>
                <button
                  onClick={onCancel}
                  className="min-w-[140px] rounded-xl border border-white bg-transparent px-6 py-3 text-base text-white transition-colors hover:bg-white/10 lg:flex-1 lg:rounded-2xl"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={onEditHints}
                className="flex w-full items-center gap-2 rounded-xl bg-orange-400 px-6 py-3 text-base text-white transition-colors hover:bg-orange-500 lg:flex-1 lg:gap-3 lg:rounded-2xl"
              >
                <img src="/assets/edit-w.svg" alt="" className="h-5 w-5 lg:h-6 lg:w-6" />
                Edit your hints
              </button>
            )}
          </div>
        ) : (
          <div className="flex w-full flex-col gap-3 lg:flex-row lg:items-center">
            <input
              type="text"
              inputMode="numeric"
              placeholder="ex. 880"
              value={inputHint}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              disabled={guessState !== 'n/a' || attempts >= maxAttempts}
              className="min-h-12 w-full rounded-xl border-none bg-white px-4 py-3 text-base text-black placeholder-gray-400 outline-none disabled:cursor-not-allowed disabled:bg-gray-300 lg:rounded-2xl"
            />
            <button
              onClick={handleSubmit}
              disabled={guessState !== 'n/a' || attempts >= maxAttempts}
              className="w-full self-start rounded-xl bg-orange-400 px-5 py-1.5 text-white transition-colors hover:bg-orange-500 disabled:cursor-not-allowed disabled:bg-gray-400 lg:ml-1 lg:rounded-2xl lg:px-6 lg:py-3"
            >
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Guess;
