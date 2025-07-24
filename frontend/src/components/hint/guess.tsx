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
    if (!inputHint.trim()) {
      setErrorMessage('Please enter a value');
      return;
    }
    if (guessState === 'n/a') {
      setErrorMessage('');
      onGuessSubmit(inputHint.trim());
      setInputHint('');
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputHint(e.target.value);
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  return (
    <div className="flex flex-col">
      {}
      {!isSenior && errorMessage && (
        <div className="mb-2 text-sm text-red-400 lg:text-base">{errorMessage}</div>
      )}

      <div className="flex flex-col">
        {/* Error message */}
        {!isSenior && errorMessage && (
          <div className="mb-2 text-sm text-red-400 lg:text-base">{errorMessage}</div>
        )}

        {/* Shared input/button layout for all screen sizes */}
        <div className="flex w-full flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
          {isSenior ? (
            <div className="flex w-full flex-col gap-3 lg:-mt-13 lg:mb-4 lg:flex-row lg:justify-start lg:gap-4">
              {isEditing ? (
                <>
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
                </>
              ) : (
                <button
                  onClick={onEditHints}
                  className="flex items-center gap-2 rounded-xl bg-orange-400 px-6 py-3 text-base text-white transition-colors hover:bg-orange-500 lg:flex-1 lg:gap-3 lg:rounded-2xl"
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
    </div>
  );
}

export default Guess;
