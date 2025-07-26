import Picture from '@/components/profile/picture';
import ProfileForm from '@/components/profile/profile-form';
import { useProfileState } from '@/hooks/useProfileState';
import ProfilePicUpload from '@/components/profile/ProfilePicUpload';
import { useProfilePicUpload } from '@/hooks/useProfilePicUpload';
import { useEffect, useState } from 'react';
import MainLayout from '../layout';
import type { ProfileData } from '@/types/profile.types';
import { useAuthContext } from '@/hooks/useAuthContext';

function Page() {
  const { user } = useAuthContext();
  const { isEditing, handleEditClick, handleConfirm, handleCancel } = useProfileState();
  const [formData, setFormData] = useState<ProfileData | null>(null);

  // Profile picture state
  const [profilePic, setProfilePic] = useState<string | null>(null);

  // Profile pic upload modal state/logic
  const picUpload = useProfilePicUpload();

  // Track hover
  const [hovered, setHovered] = useState(false);

  // Load profilePic from localStorage on mount
  useEffect(() => {
    const storedPic = localStorage.getItem('profilePic');
    if (storedPic) setProfilePic(storedPic);
  }, []);

  // Save profilePic to localStorage whenever it changes
  useEffect(() => {
    if (profilePic) {
      localStorage.setItem('profilePic', profilePic);
    }
  }, [profilePic]);

  const handleConfirmClick = () => {
    if (formData) {
      handleConfirm(formData);
    }
  };

  return (
    <MainLayout>
      <div className="flex w-full flex-1 flex-col items-center justify-center gap-y-14 p-4 xl:grid xl:grid-cols-2 xl:items-start xl:gap-x-16 xl:px-20 xl:py-5">
        {/* Picture Upload Section */}
        <div className="flex w-full justify-center xl:justify-end xl:pr-8">
          <Picture
            src={user.profilePic || profilePic || '/assets/img-placeholder.png'}
            alt="Profile"
            className="aspect-[5/7] w-[186px] rounded-3xl sm:w-[25rem] lg:w-[22rem] xl:w-[25rem]"
            darken={hovered}
            overlayText={hovered ? 'Change' : undefined}
            onClick={picUpload.openFileDialog}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
        </div>

        {/* Form Section */}
        <div className="flex w-full max-w-lg justify-center xl:max-w-none xl:justify-start">
          <ProfileForm
            isEditing={isEditing}
            onEditClick={handleEditClick}
            onConfirm={handleConfirmClick}
            onCancel={handleCancel}
            onFormChange={setFormData}
          />
        </div>
      </div>

      {/* Hidden file input for profile pic upload */}
      <input
        ref={picUpload.fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={picUpload.onFileChange}
      />

      {/* ProfilePicUpload modal */}
      <ProfilePicUpload
        open={picUpload.isOpen}
        onClose={picUpload.close}
        onSave={(img) => {
          setProfilePic(img);
          picUpload.setImageSrc(null);
        }}
        imageSrc={picUpload.imageSrc}
        setImageSrc={picUpload.setImageSrc}
        crop={picUpload.crop}
        setCrop={picUpload.setCrop}
        zoom={picUpload.zoom}
        setZoom={picUpload.setZoom}
        fileInputRef={picUpload.fileInputRef}
        onFileChange={picUpload.onFileChange}
        handleCropComplete={picUpload.handleCropComplete}
        saveCroppedImage={picUpload.saveCroppedImage}
        isPending={picUpload.isPending}
        isError={picUpload.isError}
        isSuccess={picUpload.isSuccess}
      />
    </MainLayout>
  );
}

export default Page;
