import Picture from '@/components/profile/picture';
import ProfileForm from '@/components/profile/profile-form';
import { useProfileState } from '@/hooks/useProfileState';
import ProfilePicUpload from '@/components/profile/ProfilePicUpload';
import { useProfilePicUpload } from '@/hooks/useProfilePicUpload';
import React, { useEffect, useState } from 'react';
import MainLayout from '../layout';
import type { ProfileData } from '@/types/profile.types';
import { useAuthContext } from '@/hooks/useAuthContext';
import {
  AcademicCapIcon,
  HomeIcon,
  IdentificationIcon,
  LanguageIcon,
} from '@heroicons/react/24/solid';
import { IconCrown } from '@tabler/icons-react';

function Page() {
  const { user, isLoading: isAuthLoading } = useAuthContext();
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

  if (isAuthLoading) {
    return;
  }

  return (
    <MainLayout>
      <div className="mx-auto mt-4 w-full max-w-5xl space-y-8 p-4 md:space-y-16 xl:px-0">
        <div className="font-poppins flex w-full flex-col gap-4 rounded-2xl border border-white/10 bg-gray-900/50 p-6 shadow-lg backdrop-blur-lg sm:flex-row md:gap-8">
          <Picture
            src={user?.profilePic || profilePic || '/assets/img-placeholder.png'}
            alt={user?.displayName}
            darken={hovered}
            overlayText={
              !hovered ? undefined : !user?.profilePic && !profilePic ? 'Upload' : 'Change'
            }
            onClick={picUpload.openFileDialog}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />

          <div className="flex w-full flex-col">
            <div className="flex flex-wrap items-center justify-between">
              <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                Your Profile {user.mentees?.length > 1 && `#${1 + 1}`}
              </h3>
              <div
                className={`flex items-center gap-x-1.5 rounded-full ${user?.isSenior ? 'bg-red-500/10 text-red-400' : 'bg-purple-500/10 text-purple-400'} px-2.5 py-1 text-sm font-medium`}
              >
                <AcademicCapIcon className="h-4 w-4" />

                {user?.isSenior ? 'Senior' : 'Junior'}
              </div>
            </div>

            <p className="mt-3 text-lg font-bold text-white sm:text-3xl">{user?.displayName}</p>

            <div className="my-4 h-px bg-white/10" />

            <div className="flex flex-row flex-wrap items-start gap-2 max-md:place-content-center max-md:content-center">
              {user.house && (
                <span className="relative inline-flex items-center gap-x-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-amber-400">
                  <HomeIcon className="h-4 w-4 text-amber-500" />
                  {user.house}

                  {user.isHouseLeader && (
                    <IconCrown className="absolute -top-2 -right-1 size-4 rotate-20 fill-amber-500 text-amber-500" />
                  )}
                </span>
              )}
              {user.studentId && (
                <span className="inline-flex items-center gap-x-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-blue-400">
                  <IdentificationIcon className="h-4 w-4 text-blue-500" />
                  {user.studentId}
                </span>
              )}
              {user.nationality && (
                <span className="inline-flex items-center gap-x-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
                  <LanguageIcon className="h-4 w-4 text-emerald-500" />
                  {user.nationality}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-4">
          <div className="">
            {/* Form Section */}
            <div className="flex w-full">
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
            hidden={true}
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
        </div>
      </div>
    </MainLayout>
  );
}

export default Page;
