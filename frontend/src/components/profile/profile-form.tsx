import { useState, useCallback, useMemo } from 'react';
import Instagram from '@/assets/instagram-icon.svg';
import Discord from '@/assets/discord-icon.svg';
import LINE from '@/assets/line-icon.svg';
import type { ProfileData, FormField, SocialMediaField } from '@/types/profile.types';
import { useFormNavigation } from '@/hooks/useFormNavigation';

interface ProfileFormProps {
  isEditing: boolean;
  onEditClick: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  initialData?: Partial<ProfileData>;
}

const INITIAL_PROFILE_DATA: ProfileData = {
  fullName: 'Penny Trationas',
  nickname: 'Lil Penny',
  studentId: '61130500879',
  nationality: 'Uzbekistan',
  instagram: 'yung.brkeness.official',
  discord: 'Toast#6821',
  lineId: 'toast.uz',
};

function ProfileForm({
  isEditing,
  onEditClick,
  onConfirm,
  onCancel,
  initialData,
}: ProfileFormProps) {
  const [formData, setFormData] = useState<ProfileData>({
    ...INITIAL_PROFILE_DATA,
    ...initialData,
  });

  const formFields: FormField[] = useMemo(
    () => [
      { key: 'fullName', label: 'Full Name', type: 'text' },
      { key: 'nickname', label: 'Nickname', type: 'text' },
      { key: 'studentId', label: 'Student ID', type: 'text' },
      { key: 'nationality', label: 'Nationality', type: 'text' },
    ],
    [],
  );

  const socialMediaFields: SocialMediaField[] = useMemo(
    () => [
      { key: 'instagram', label: 'Instagram', icon: Instagram, iconColor: 'text-pink-500' },
      { key: 'discord', label: 'Discord', icon: Discord, iconColor: 'text-indigo-400' },
      { key: 'lineId', label: 'LINE ID', icon: LINE, iconColor: 'text-green-500' },
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
      `w-full px-4 lg:px-6 py-1 lg:py-2 text-xs lg:text-lg rounded-xl border-none outline-none h-7 lg:h-12 font-[Poppins] transition-colors ${
        editing ? 'bg-white text-black' : 'bg-gray-200 text-gray-700 cursor-not-allowed'
      }`,
    [],
  );

  return (
    <div className="lg:col-span-8 space-y-2 lg:space-y-5 lg:pr-30 lg:pl-60 px-6 lg:px-0">
      {formFields.map((field) => (
        <div key={field.key} className="space-y-0.5 lg:space-y-1.5">
          <label htmlFor={field.key} className="block font-[Poppins] text-xs lg:text-base">
            {field.label}
          </label>
          <input
            ref={(el) => setInputRef(field.key, el)}
            id={field.key}
            type={field.type}
            value={formData[field.key]}
            onChange={(e) => handleInputChange(field.key, e.target.value)}
            onKeyDown={(e) => isEditing && handleKeyDown(e, field.key, onConfirm)}
            disabled={!isEditing}
            className={inputClassName(isEditing)}
          />
        </div>
      ))}

      <div className="mt-6 lg:mt-12">
        <p className="mb-2 lg:mb-4 font-[Poppins] text-xs lg:text-base">Social media (optional)</p>
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
                value={formData[field.key]}
                onChange={(e) => handleInputChange(field.key, e.target.value)}
                onKeyDown={(e) => isEditing && handleKeyDown(e, field.key, onConfirm)}
                disabled={!isEditing}
                className={`h-10 lg:h-12 w-full rounded-xl border-none py-1 lg:py-4 pr-4 pl-14 lg:pl-20 font-[Poppins] text-sm lg:text-lg outline-none ${inputClassName(isEditing)}`}
                placeholder={field.label}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 lg:mt-8 flex justify-center">
        {!isEditing ? (
          <button
            onClick={onEditClick}
            className="rounded-xl border border-white bg-transparent px-8 lg:px-16 py-2 font-[Poppins] text-sm lg:text-base text-white transition-colors hover:bg-white/10 focus:ring-2 focus:ring-white/50 focus:outline-none"
          >
            Edit
          </button>
        ) : (
          <div className="flex gap-4">
            <button
              onClick={onConfirm}
              className="rounded-xl border border-white bg-transparent px-6 lg:px-12 py-2 font-[Poppins] text-sm lg:text-base text-white transition-colors hover:bg-white/10 focus:ring-2 focus:ring-white/50 focus:outline-none"
            >
              Confirm
            </button>
            <button
              onClick={onCancel}
              className="rounded-xl border border-white bg-transparent px-6 lg:px-12 py-2 font-[Poppins] text-sm lg:text-base text-white transition-colors hover:bg-white/10 focus:ring-2 focus:ring-white/50 focus:outline-none"
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
