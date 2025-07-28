import React, { useCallback, useEffect, useMemo, useState } from 'react';
import type { FormField, ProfileData, SocialMediaField } from '@/types/profile.types';
import { useFormNavigation } from '@/hooks/useFormNavigation';
import { useAuthContext } from '@/hooks/useAuthContext';
import { IconBrandDiscord, IconBrandInstagram, IconBrandLine } from '@tabler/icons-react';

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
      { key: 'nickname', label: 'Nickname', type: 'text' },
      { key: 'nationality', label: 'Nationality', type: 'text' },
    ],
    [],
  );

  const socialMediaFields: SocialMediaField[] = useMemo(
    () => [
      {
        key: 'instagram',
        label: 'Instagram',
        icon: (
          <IconBrandInstagram className="absolute top-1/2 left-3 h-6 w-6 -translate-y-1/2 transform text-pink-500 lg:left-6" />
        ),
      },
      {
        key: 'discord',
        label: 'Discord',
        icon: (
          <IconBrandDiscord className="absolute top-1/2 left-3 h-6 w-6 -translate-y-1/2 transform text-[#5865F2] lg:left-6" />
        ),
      },
      {
        key: 'line',
        label: 'LINE ID',
        icon: (
          <IconBrandLine className="absolute top-1/2 left-3 h-6 w-6 -translate-y-1/2 transform text-[#06C755] lg:left-6" />
        ),
      },
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

  return (
    <div className="w-full space-y-2">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="w-full flex-1/3 space-y-4">
          {formFields.map((field) => (
            <div key={field.key} className="space-y-0.5 lg:space-y-1.5">
              <label htmlFor={field.key} className="font-poppins mb-2 block text-xs lg:text-base">
                {field.label}
              </label>
              <input
                ref={(el) => setInputRef(field.key, el)}
                id={field.key}
                type={field.type}
                value={formData[field.key] || ''}
                onChange={(e) => handleInputChange(field.key, e.target.value)}
                onKeyDown={(e) => isEditing && handleKeyDown(e, field.key, onConfirm)}
                disabled={!isEditing || field.key === 'studentId' || field.key === 'displayName'}
                className={`font-poppins h-10 w-full rounded-xl border-none px-2 py-2 text-base transition-colors outline-none lg:h-12 lg:px-6 lg:text-lg ${
                  !isEditing || field.key === 'studentId' || field.key === 'displayName'
                    ? 'cursor-not-allowed bg-gray-900/50 text-gray-300'
                    : 'border border-white/10 bg-gray-900/50'
                }`}
              />
            </div>
          ))}
        </div>

        <div className="w-full flex-2/3 space-y-8">
          <p className="font-poppins mb-2 text-xs lg:mb-4 lg:text-base">Social media</p>
          <div className="space-y-4">
            {socialMediaFields.map((field) => (
              <div key={field.key} className="relative">
                {field.icon}
                <input
                  ref={(el) => setInputRef(field.key, el)}
                  id={field.key}
                  value={formData[field.key] || ''}
                  onChange={(e) => handleInputChange(field.key, e.target.value)}
                  onKeyDown={(e) => isEditing && handleKeyDown(e, field.key, onConfirm)}
                  disabled={!isEditing}
                  className={`font-poppins h-12 w-full rounded-xl border-none py-2 pr-2 pl-12 text-base transition-colors outline-none lg:h-12 lg:py-4 lg:pl-16 lg:text-lg ${
                    !isEditing
                      ? 'cursor-not-allowed bg-gray-900/50 text-gray-300'
                      : 'border border-white/10 bg-gray-900/50'
                  }`}
                  placeholder={field.label}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex w-full justify-center lg:mt-8">
        {!isEditing ? (
          <button
            onClick={onEditClick}
            className="font-poppins w-full flex-1 rounded-xl border border-white/10 bg-purple-900/60 px-8 py-2 text-sm text-white transition-colors hover:bg-purple-900/80 focus:ring-2 focus:ring-white/50 focus:outline-none lg:px-16 lg:text-base"
          >
            Edit Information
          </button>
        ) : (
          <div className="flex w-full flex-wrap gap-4">
            <button
              onClick={onConfirm}
              className="font-poppins w-full flex-1 rounded-xl border border-white/10 bg-purple-900/60 px-6 py-2 text-sm text-white transition-colors hover:bg-purple-900/80 focus:ring-2 focus:ring-white/50 focus:outline-none lg:px-12 lg:text-base"
            >
              Save
            </button>
            <button
              onClick={onCancel}
              className="font-poppins w-full flex-1 rounded-xl border border-white/10 bg-gray-900/60 px-6 py-2 text-sm text-white transition-colors hover:bg-gray-900/80 focus:ring-2 focus:ring-white/50 focus:outline-none lg:px-12 lg:text-base"
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      <p className="text-center text-xs sm:text-sm">
        <span className="font-bold">Tip</span>: Tap your current profile picture to change it.
      </p>
    </div>
  );
}

export default ProfileForm;
