import { useState, useCallback, useMemo, useEffect } from 'react';
import type { ProfileData, FormField, SocialMediaField } from '@/types/profile.types';
import { useFormNavigation } from '@/hooks/useFormNavigation';
import { useAuthContext } from '@/hooks/useAuthContext';

interface ProfileFormProps {
  isEditing: boolean;
  onEditClick: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  onFormChange: (data: ProfileData) => void;
  initialData?: Partial<ProfileData>;
}

function ProfileForm({
  isEditing,
  onEditClick,
  onConfirm,
  onCancel,
  onFormChange,
  initialData,
}: ProfileFormProps) {
  const { user } = useAuthContext();

  const INITIAL_PROFILE_DATA: ProfileData = {
    displayName: user.displayName,
    nickname: user.nickname,
    studentId: user.studentId,
    nationality: user.nationality,
    instagram: user.instagram,
    discord: user.discord,
    line: user.line,
  };

  const [formData, setFormData] = useState<ProfileData>({
    ...INITIAL_PROFILE_DATA,
    ...initialData,
  });

  useEffect(() => {
    onFormChange(formData);
  }, [formData, onFormChange]);

  const formFields: FormField[] = useMemo(
    () => [
      { key: 'displayName', label: 'Full Name', type: 'text' },
      { key: 'nickname', label: 'Nickname', type: 'text' },
      { key: 'studentId', label: 'Student ID', type: 'text' },
      { key: 'nationality', label: 'Nationality', type: 'text' },
    ],
    [],
  );

  const socialMediaFields: SocialMediaField[] = useMemo(
    () => [
      { key: 'instagram', label: 'Instagram', icon: "/assets/instagram-icon.svg", iconColor: 'text-pink-500' },
      { key: 'discord', label: 'Discord', icon: "/assets/discord-icon.svg", iconColor: 'text-indigo-400' },
      { key: 'line', label: 'LINE ID', icon: "/assets/line-icon.svg", iconColor: 'text-green-500' },
    ],
    [],
  );

  const allFieldKeys = useMemo(
    () => [...formFields.map((f) => f.key), ...socialMediaFields.map((f) => f.key)],
    [formFields, socialMediaFields],
  );

  const { setInputRef, handleKeyDown } = useFormNavigation(allFieldKeys);

  const handleInputChange = useCallback((key: keyof ProfileData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const inputClassName = useMemo(
    () => (editing: boolean) =>
      `w-full px-2 lg:px-6 py-2 lg:py-2 text-base lg:text-lg rounded-xl border-none outline-none h-10 lg:h-12 font-[Poppins] transition-colors ${
        editing ? 'bg-white text-black' : 'bg-gray-300 text-gray-700 cursor-not-allowed'
      }`,
    [],
  );

  return (
    <div className="w-full max-w-xl space-y-2 px-6 lg:col-span-8 lg:space-y-5 lg:px-0">
      {formFields.map((field) => (
        <div key={field.key} className="space-y-0.5 lg:space-y-1.5">
          <label htmlFor={field.key} className="block font-[Poppins] text-xs lg:text-base">
            {field.label}
          </label>
          <input
            ref={(el) => setInputRef(field.key, el)}
            id={field.key}
            type={field.type}
            value={formData[field.key] || ''}
            onChange={(e) => handleInputChange(field.key, e.target.value)}
            onKeyDown={(e) => isEditing && handleKeyDown(e, field.key, onConfirm)}
            disabled={!isEditing}
            className={inputClassName(isEditing)}
          />
        </div>
      ))}

      <div className="mt-6 lg:mt-12">
        <p className="mb-2 font-[Poppins] text-xs lg:mb-4 lg:text-base">Social media (optional)</p>
        <div className="space-y-2 lg:space-y-4">
          {socialMediaFields.map((field) => (
            <div key={field.key} className="relative">
              <img
                src={field.icon}
                alt={`${field.label} icon`}
                className="absolute top-1/2 left-3 h-6 w-6 -translate-y-1/2 transform"
              />
              <input
                ref={(el) => setInputRef(field.key, el)}
                id={field.key}
                value={formData[field.key] || ''}
                onChange={(e) => handleInputChange(field.key, e.target.value)}
                onKeyDown={(e) => isEditing && handleKeyDown(e, field.key, onConfirm)}
                disabled={!isEditing}
                className={`h-12 w-full rounded-xl border-none py-2 pr-2 pl-10 font-[Poppins] text-base outline-none lg:h-12 lg:py-4 lg:pl-20 lg:text-lg ${inputClassName(isEditing)}`}
                placeholder={field.label}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center lg:mt-8">
        {!isEditing ? (
          <button
            onClick={onEditClick}
            className="rounded-xl border border-white bg-transparent px-8 py-2 font-[Poppins] text-sm text-white transition-colors hover:bg-white/10 focus:ring-2 focus:ring-white/50 focus:outline-none lg:px-16 lg:text-base"
          >
            Edit
          </button>
        ) : (
          <div className="flex gap-4">
            <button
              onClick={onConfirm}
              className="rounded-xl border border-white bg-transparent px-6 py-2 font-[Poppins] text-sm text-white transition-colors hover:bg-white/10 focus:ring-2 focus:ring-white/50 focus:outline-none lg:px-12 lg:text-base"
            >
              Confirm
            </button>
            <button
              onClick={onCancel}
              className="rounded-xl border border-white bg-transparent px-6 py-2 font-[Poppins] text-sm text-white transition-colors hover:bg-white/10 focus:ring-2 focus:ring-white/50 focus:outline-none lg:px-12 lg:text-base"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileForm;
