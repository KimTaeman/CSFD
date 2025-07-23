import { useState } from 'react';
import EditIconW from '@/assets/edit-w.svg';

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

  const handleKeyPress = (e: React.KeyboardEvent) => {
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

      {}
      <div className="hidden w-7/11 items-center gap-4 lg:flex">
        {isSenior ? (
          <div className="-mt-13 mb-4 flex w-full justify-start">
            {isEditing ? (
              <div className="flex gap-4">
                <button
                  onClick={onConfirm}
                  className="min-w-[160px] rounded-2xl bg-orange-400 px-6 py-3 text-xl whitespace-nowrap text-white transition-colors hover:bg-orange-500"
                >
                  Confirm
                </button>
                <button
                  onClick={onCancel}
                  className="min-w-[160px] rounded-2xl border border-white bg-transparent px-6 py-3 text-xl whitespace-nowrap text-white transition-colors hover:bg-white/10"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={onEditHints}
                className="flex items-center gap-3 rounded-2xl bg-orange-400 px-6 py-3 text-xl whitespace-nowrap text-white transition-colors hover:bg-orange-500"
              >
                <img src={EditIconW} alt="" className="h-6 w-6" />
                Edit your hints
              </button>
            )}
          </div>
        ) : (
          <>
            <input
              type="text"
              placeholder="ex. 880"
              value={inputHint}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              disabled={guessState !== 'n/a' || attempts >= maxAttempts}
              className="min-h-14 flex-1 rounded-2xl border-none bg-white px-4 py-3 text-2xl text-black placeholder-gray-400 outline-none disabled:cursor-not-allowed disabled:bg-gray-300"
            />
            <button
              onClick={handleSubmit}
              disabled={guessState !== 'n/a' || attempts >= maxAttempts}
              className="ml-1 rounded-2xl bg-orange-400 px-6 py-3 text-2xl whitespace-nowrap text-white transition-colors hover:bg-orange-500 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              send
            </button>
          </>
        )}
      </div>

      {}
      <div className="flex w-full flex-col gap-3 lg:hidden">
        {isSenior ? (
          <div className="mb-3 flex w-full justify-start">
            {isEditing ? (
              <div className="ipadair-ml ml-4 flex gap-3">
                <button
                  onClick={onConfirm}
                  className="min-w-[140px] rounded-xl bg-orange-400 px-6 py-3 text-base text-white transition-colors hover:bg-orange-500"
                >
                  Confirm
                </button>
                <button
                  onClick={onCancel}
                  className="min-w-[140px] rounded-xl border border-white bg-transparent px-6 py-3 text-base text-white transition-colors hover:bg-white/10"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={onEditHints}
                className="ipadair-ml ml-4 flex items-center gap-2 rounded-xl bg-orange-400 px-6 py-3 text-base text-white transition-colors hover:bg-orange-500"
              >
                <img src={EditIconW} alt="" className="h-5 w-5" />
                Edit your hints
              </button>
            )}
          </div>
        ) : (
          <>
            <input
              type="text"
              placeholder="ex. 880"
              value={inputHint}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              disabled={guessState !== 'n/a' || attempts >= maxAttempts}
              className="min-h-12 w-full rounded-xl border-none bg-white px-4 py-3 text-base text-black placeholder-gray-400 outline-none disabled:cursor-not-allowed disabled:bg-gray-300"
            />
            <div className="flex gap-3">
              <button
                onClick={handleSubmit}
                disabled={guessState !== 'n/a' || attempts >= maxAttempts}
                className="self-start rounded-xl bg-orange-400 px-5 py-1.5 text-xl text-white transition-colors hover:bg-orange-500 disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                send
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Guess;
