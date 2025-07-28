import React, { useRef } from 'react';

interface CardProps {
  description: string | React.ReactNode;
  stage: 'hidden' | 'shown';
  type?: 'freshman' | 'senior';
  editable?: boolean;
  onChange?: (value: string) => void;
}

function HintCard({
  description,
  stage,
  type = 'freshman',
  editable = false,
  onChange,
}: CardProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const MAX_LENGTH = 120;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value.slice(0, MAX_LENGTH);
    onChange?.(newValue);
  };

  const descriptionAsString = typeof description === 'string' ? description : '';

  return (
    // 1. REMOVED overflow-y-auto, ADDED overflow-hidden
    <div className="font-poppins relative mx-auto flex h-32 w-full max-w-[94%] flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-800/30 p-4 shadow-lg backdrop-blur-lg sm:h-32 md:h-48 lg:h-48 lg:max-w-110">
      <div className="relative flex h-25 flex-1 flex-col justify-start md:h-40">
        {stage === 'shown' ? (
          editable ? (
            <div className="relative h-full flex-1">
              {/* Character limit indicator */}
              <div className="absolute right-2 bottom-2 z-10 flex items-center">
                <span
                  className={`rounded-full bg-white/10 px-2 py-0.5 text-xs select-none ${
                    descriptionAsString.length >= MAX_LENGTH ? 'text-red-400' : 'text-gray-300'
                  }`}
                >
                  {descriptionAsString.length}/{MAX_LENGTH}
                </span>
              </div>
              <textarea
                ref={inputRef}
                value={descriptionAsString}
                onChange={handleInputChange}
                maxLength={MAX_LENGTH}
                // 2. CHANGED fixed heights to h-full to be responsive to parent
                className="h-full w-full resize-none rounded-lg bg-transparent p-2 text-lg text-white outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500/80 lg:text-xl"
                rows={3}
                placeholder="Type your hint here..."
              />
            </div>
          ) : (
            // 3. WRAPPED <p> and made IT scrollable
            <div className="flex h-full w-full flex-1 overflow-y-auto">
              <p className="max-h-full w-full px-2 py-1 text-center text-lg break-words whitespace-pre-line text-white lg:text-xl">
                {description}
              </p>
            </div>
          )
        ) : (
          // When hidden, show an empty, styled container
          <div className="flex h-full w-full flex-1 items-center justify-center" />
        )}
      </div>

      {/* Edit icon for senior type, only show if value is empty and not hidden */}
      {type === 'senior' && !description && stage === 'shown' && (
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
    </div>
  );
}

export default HintCard;
