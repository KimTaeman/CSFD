import { useState } from 'react';
import EditIconW from '@/assets/edit-w.svg';

type GuessState = 'n/a' | 'success' | 'fail';

interface GuessProps {
  onGuessSubmit: (guess: string) => void;
  guessState: GuessState;
  attempts: number;
  maxAttempts: number;
  onReset: () => void;
  isSenior?: boolean;
  onEditHints?: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
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
  onCancel = () => {}
}: GuessProps) {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);

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
  
  const handleEditClick = () => {
    setIsEditing(true);
    onEditHints();
  };
  
  const handleConfirm = () => {
    setIsEditing(false);
    onConfirm();
  };
  
  const handleCancel = () => {
    setIsEditing(false);
    onCancel();
  };

  return (
    <div className="flex flex-col">
      {/* Error message - only for freshman */}
      {!isSenior && errorMessage && (
        <div className="mb-2 text-red-400 text-sm lg:text-base">
          {errorMessage}
        </div>
      )}

      {/* Desktop layout */}
      <div className="hidden lg:flex items-center gap-4 w-full">
        {isSenior ? (
          <div className="w-full flex justify-start mt-[-32px] mb-4">
            {isEditing ? (
              <div className="flex gap-4">
                <button
                  onClick={handleConfirm}
                  className="min-w-[160px] px-6 py-3 text-xl text-white rounded-2xl whitespace-nowrap bg-orange-400 hover:bg-orange-500 transition-colors"
                >
                  Confirm
                </button>
                <button
                  onClick={handleCancel}
                  className="min-w-[160px] px-6 py-3 text-xl text-white rounded-2xl whitespace-nowrap bg-transparent border border-white hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={handleEditClick}
                className="flex items-center gap-3 px-6 py-3 text-xl text-white rounded-2xl whitespace-nowrap bg-orange-400 hover:bg-orange-500 transition-colors"
              >
                <img src={EditIconW} alt="" className="w-6 h-6" />
                Edit your hints
              </button>
            )}
          </div>
        ) : (
          <>
            <input
              type="text"
              placeholder="ex. 880"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              disabled={guessState !== 'n/a'}
              className="flex-1 min-h-14 text-2xl px-4 py-3 bg-white text-black rounded-2xl border-none outline-none placeholder-gray-400 disabled:bg-gray-300 disabled:cursor-not-allowed"
            />
            <button
              onClick={handleSubmit}
              disabled={guessState !== 'n/a'}
              className="px-6 ml-1 py-3 text-2xl text-white rounded-2xl whitespace-nowrap bg-orange-400 hover:bg-orange-500 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              send
            </button>
          </>
        )}
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden flex flex-col gap-3 w-full">
        {isSenior ? (
          <div className="w-full flex justify-start mt-[-20px] mb-3">
            {isEditing ? (
              <div className="flex gap-3">
                <button
                  onClick={handleConfirm}
                  className="min-w-[140px] px-6 py-3 text-base text-white rounded-xl bg-orange-400 hover:bg-orange-500 transition-colors"
                >
                  Confirm
                </button>
                <button
                  onClick={handleCancel}
                  className="min-w-[140px] px-6 py-3 text-base text-white rounded-xl bg-transparent border border-white hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={handleEditClick}
                className="flex items-center gap-2 px-6 py-3 text-base text-white rounded-xl bg-orange-400 hover:bg-orange-500 transition-colors"
              >
                <img src={EditIconW} alt="" className="w-5 h-5" />
                Edit your hints
              </button>
            )}
          </div>
        ) : (
          <>
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
                className="px-5 py-1.5 text-xl text-white rounded-xl bg-orange-400 hover:bg-orange-500 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed self-start"
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
