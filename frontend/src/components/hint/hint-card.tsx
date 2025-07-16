import React, { useState, useRef } from 'react';
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
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(description);
  const inputRef = useRef<HTMLInputElement>(null);
  const MAX_LENGTH = 60;

  // Keep value in sync with parent
  React.useEffect(() => {
    setValue(description);
  }, [description]);

  // Focus input when entering edit mode
  const handleEdit = () => {
    if (editable) setIsEditing(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value.slice(0, MAX_LENGTH);
    setValue(newValue);
    onChange?.(newValue);
  };

  // If editable prop changes to false, exit edit mode
  React.useEffect(() => {
    if (!editable) setIsEditing(false);
  }, [editable]);

  const handleBlur = () => {
    setIsEditing(false);
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
      // Always allow clicking to edit if editable, regardless of text
      onClick={() => {
        if (editable && !isEditing) handleEdit();
      }}
    >
      <h2 className="text-sm font-bold text-black lg:text-lg">{title}</h2>
      <div className="flex-1 flex flex-col justify-start relative">
        {isEditing ? (
          <>
            <textarea
              ref={inputRef as any}
              value={value}
              onChange={handleInputChange}
              onBlur={handleBlur}
              maxLength={MAX_LENGTH}
              className="mt-1 w-full h-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-black text-lg lg:text-2xl outline-none resize-none"
              style={{ zIndex: 40, position: 'relative', minHeight: 0 }}
              rows={2}
              placeholder="Type your hint here..."
            />
            <span className="absolute bottom-2 right-4 text-xs text-gray-400 select-none">
              {value.length}/{MAX_LENGTH}
            </span>
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center w-full h-full">
            <p className="text-lg lg:text-2xl text-black break-words whitespace-pre-line text-center w-full">
              {value}
            </p>
          </div>
        )}
      </div>
      {/* Edit icon for senior type, only show if value is empty */}
      {type === 'senior' && !value && (
        <button
          className="absolute inset-0 flex items-center justify-center z-30"
          style={{ background: 'transparent' }}
          onClick={(e) => {
            e.stopPropagation();
            handleEdit();
          }}
          tabIndex={0}
          aria-label="Edit hint"
        >
          <img src={EditIcon} alt="Edit" className="h-12 w-12 opacity-70 lg:h-20 lg:w-20 pointer-events-none" />
        </button>
      )}
    </div>
  );
}

export default HintCard;
