import { useState, useCallback, useMemo } from "react";
import Instagram from "@/assets/instagram-icon.svg";
import Discord from "@/assets/discord-icon.svg";
import LINE from "@/assets/line-icon.svg";
import type { ProfileData, FormField, SocialMediaField } from "@/types/profile.types";
import { useFormNavigation } from "@/hooks/useFormNavigation";

interface ProfileFormProps {
  isEditing: boolean;
  onEditClick: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  initialData?: Partial<ProfileData>;
}

const INITIAL_PROFILE_DATA: ProfileData = {
  fullName: "Penny Trationas",
  nickname: "Lil Penny",
  studentId: "61130500879",
  nationality: "Uzbekistan",
  instagram: "yung.brkeness.official",
  discord: "Toast#6821",
  lineId: "toast.uz"
};

function ProfileForm({ 
  isEditing, 
  onEditClick, 
  onConfirm, 
  onCancel, 
  initialData 
}: ProfileFormProps) {
  const [formData, setFormData] = useState<ProfileData>({
    ...INITIAL_PROFILE_DATA,
    ...initialData
  });

  const formFields: FormField[] = useMemo(() => [
    { key: "fullName", label: "Full Name", type: "text" },
    { key: "nickname", label: "Nickname", type: "text" },
    { key: "studentId", label: "Student ID", type: "text" },
    { key: "nationality", label: "Nationality", type: "text" }
  ], []);

  const socialMediaFields: SocialMediaField[] = useMemo(() => [
    { key: "instagram", label: "Instagram", icon: Instagram, iconColor: "text-pink-500" },
    { key: "discord", label: "Discord", icon: Discord, iconColor: "text-indigo-400" },
    { key: "lineId", label: "LINE ID", icon: LINE, iconColor: "text-green-500" }
  ], []);

  const allFieldKeys = useMemo(() => [
    ...formFields.map(f => f.key),
    ...socialMediaFields.map(f => f.key)
  ], [formFields, socialMediaFields]);

  const { setInputRef, handleKeyDown } = useFormNavigation(allFieldKeys);

  const handleInputChange = useCallback((key: keyof ProfileData, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  }, []);

  const inputClassName = useMemo(() => (editing: boolean) => 
    `w-full px-4 py-2 text-xl rounded-xl border-none outline-none h-12 font-[Poppins] transition-colors ${
      editing 
        ? "bg-white text-black" 
        : "bg-gray-200 text-gray-700 cursor-not-allowed"
    }`, []
  );

  return (
    <div className="col-span-8 space-y-5 pl-60 pr-30">
      {formFields.map((field) => (
        <div key={field.key} className="space-y-1.5">
          <label htmlFor={field.key} className="block text-lg font-[Poppins]">
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

      <div className="mt-12">
        <p className="text-lg mb-4 font-[Poppins]">Social media (optional)</p>
        <div className="space-y-4">
          {socialMediaFields.map((field) => (
            <div key={field.key} className="relative">
              <img 
                src={field.icon} 
                alt={`${field.label} icon`}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
              />
              <input 
                ref={(el) => setInputRef(field.key, el)}
                id={field.key}
                value={formData[field.key]}
                onChange={(e) => handleInputChange(field.key, e.target.value)}
                onKeyDown={(e) => isEditing && handleKeyDown(e, field.key, onConfirm)}
                disabled={!isEditing}
                className={`w-full pl-18 pr-4 py-4 text-xl rounded-xl border-none outline-none h-12 font-[Poppins] ${inputClassName(isEditing)}`}
                placeholder={field.label}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        {!isEditing ? (
          <button 
            onClick={onEditClick}
            className="px-16 py-2 rounded-xl bg-transparent border border-white text-white text-lg hover:bg-white/10 font-[Poppins] transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Edit Profile
          </button>
        ) : (
          <div className="flex gap-4">
            <button 
              onClick={onConfirm}
              className="px-12 py-2 rounded-xl bg-transparent border border-white text-white text-lg hover:bg-white/10 font-[Poppins] transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              Confirm
            </button>
            <button 
              onClick={onCancel}
              className="px-12 py-2 rounded-xl bg-transparent border border-white text-white text-lg hover:bg-white/10 font-[Poppins] transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
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