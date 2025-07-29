import React, { useRef, useState, useEffect, useCallback } from 'react';

interface CardProps {
  description: string | React.ReactNode;
  stage: 'hidden' | 'shown';
  type?: 'freshman' | 'senior';
  editable?: boolean;
  onChange?: (value: string) => void;
  isRevealed?: boolean;
}

function HintCard({
  description,
  stage,
  type = 'freshman',
  editable = false,
  onChange,
  isRevealed = false,
}: CardProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const MAX_LENGTH = 120;

  const [localValue, setLocalValue] = useState('');

  useEffect(() => {
    if (editable && typeof description === 'string') {
      setLocalValue(description);
    }
  }, [description, editable]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedOnChange = useCallback(
    (() => {
      let timeoutId: NodeJS.Timeout;
      return (value: string) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          onChange?.(value);
        }, 150); // 150ms debounce
      };
    })(),
    [onChange]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value.slice(0, MAX_LENGTH);
    setLocalValue(newValue);
    debouncedOnChange(newValue);
  };

  return (
    <div className="font-poppins relative mx-auto flex h-32 w-full max-w-[94%] flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-800/30 p-4 shadow-lg backdrop-blur-lg sm:h-32 md:h-48 lg:h-48 lg:max-w-110">
      <div className="relative flex h-25 flex-1 flex-col justify-start md:h-40">
        {stage === 'shown' ? (
          editable ? (
            <div className="relative h-full flex-1">
              {/* Character limit indicator */}
              <div className="absolute right-2 bottom-2 z-10 flex items-center">
                <span
                  className={`rounded-full bg-white/10 px-2 py-0.5 text-xs select-none ${
                    localValue.length >= MAX_LENGTH ? 'text-red-400' : 'text-gray-300'
                  }`}
                >
                  {localValue.length}/{MAX_LENGTH}
                </span>
              </div>
              <textarea
                ref={inputRef}
                value={localValue}
                onChange={handleInputChange}
                maxLength={MAX_LENGTH}
                className="h-full w-full resize-none rounded-lg bg-transparent p-2 text-lg text-white outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500/80 lg:text-xl"
                rows={3}
                placeholder="Type your hint here..."
                autoFocus
              />
            </div>
          ) : (
            <div className="flex h-full w-full flex-1 overflow-y-auto">
              <p className="max-h-full w-full px-2 py-1 text-center text-lg break-words whitespace-pre-line text-white lg:text-xl">
                {description}
              </p>
            </div>
          )
        ) : (
          <div className="flex h-full w-full flex-1 items-center justify-center" />
        )}
      </div>

      {type === 'senior' && !description && stage === 'shown' && !editable && (
        <div
          className="absolute inset-0 z-0 flex items-center justify-center"
          aria-label="Edit hint"
        >
          <img
            src="/assets/edit.svg"
            alt="Edit"
            className="pointer-events-none h-12 w-12 opacity-30 invert filter lg:h-16 lg:w-16"
          />
        </div>
      )}

      {type === 'senior' && isRevealed && !editable && (
        <div className="absolute top-2 right-2 z-10">
          <div className="rounded-full bg-red-500/20 px-2 py-1 text-xs text-red-400 border border-red-500/30">
            Locked
          </div>
        </div>
      )}
    </div>
  );
}

export default HintCard;