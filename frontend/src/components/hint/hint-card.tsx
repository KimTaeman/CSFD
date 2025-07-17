import React, { useRef } from 'react';
import EditIcon from '@/assets/edit.svg';

interface CardProps {
  title: string;
  description: string;
  stage: 'hidden' | 'shown';
  type?: 'freshman' | 'senior';
  editable?: boolean;
  onChange?: (value: string) => void;
}

function HintCard({
  title,
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

  const getCardStyles = () => {
    if (type === 'freshman') {
      return stage === 'shown' ? 'bg-white bg-opacity-100' : 'bg-white bg-opacity-50';
    }
    return 'bg-white bg-opacity-100'; // Default for other types
  };

  return (
    <div
      className={`relative h-32 w-[94%] rounded-4xl p-3 lg:h-55 lg:w-128 lg:rounded-4xl lg:p-4 ${getCardStyles()}`}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <h2 className="text-sm font-bold text-black lg:text-lg">{title}</h2>
      <div className="flex-1 flex flex-col justify-start relative">
        {editable ? (
          <div className="relative flex-1">
            {/* Character limit indicator visually attached to the textarea border */}
            <div className="absolute right-2 bottom-2 z-50 flex items-center">
              <span
                className={`bg-white px-2 py-0.5  rounded-full border border-gray-300 text-xs shadow select-none ${
                  description.length >= MAX_LENGTH ? 'text-red-500 border-red-400' : 'text-gray-500'
                }`}
              >
                {description.length}/{MAX_LENGTH}
              </span>
            </div>
            <textarea
              ref={inputRef}
              value={description}
              onChange={handleInputChange}
              maxLength={MAX_LENGTH}
              className="mt-1 w-full h-full rounded-2xl bg-white px-3 py-2 text-black text-lg lg:text-2xl outline-none resize-none"
              style={{ zIndex: 40, position: 'relative', minHeight: 0 }}
              rows={2}
              placeholder="Type your hint here..."
            />
          </div>
        ) : (
          <div className="flex flex-1 items-center justify-center w-full h-full">
            <p className="text-lg lg:text-2xl text-black break-words whitespace-pre-line text-center w-full">
              {description}
            </p>
          </div>
        )}
      </div>
      {/* Edit icon for senior type, only show if value is empty */}
      {type === 'senior' && !description && (
        <div
          className="absolute inset-0 flex items-center justify-center z-30"
          style={{ background: 'transparent' }}
          aria-label="Edit hint"
        >
          <img src={EditIcon} alt="Edit" className="h-12 w-12 opacity-70 lg:h-20 lg:w-20 pointer-events-none" />
        </div>
      )}
    </div>
  );
}

export default HintCard;
