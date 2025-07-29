import Picture from '@/components/profile/picture';
import ProfileForm from '@/components/profile/profile-form';
import { useProfileState } from '@/hooks/useProfileState';
import ProfilePicUpload from '@/components/profile/ProfilePicUpload';
import { useProfilePicUpload } from '@/hooks/useProfilePicUpload';
import React, { useEffect, useState, useMemo } from 'react';
import MainLayout from '../layout';
import type { ProfileData } from '@/types/profile.types';
import { useAuthContext } from '@/hooks/useAuthContext';
import {
  AcademicCapIcon,
  HomeIcon,
  IdentificationIcon,
  LanguageIcon,
} from '@heroicons/react/24/solid';
import { IconCrown, IconUserScan } from '@tabler/icons-react';
import LoadingLayout from '@/components/layout/loading.tsx';
import { useNavigate } from 'react-router-dom';
import {cn} from "@/lib/utils.ts";

interface ProfilePicState {
  src: string;
  isLoading: boolean;
  isOptimistic: boolean; // True when showing a preview before server confirms
  timestamp: number; // For cache busting
}

function Page() {
  const navigate = useNavigate();
  const { user, isLoading: isAuthLoading } = useAuthContext();
  const { isEditing, handleEditClick, handleConfirm, handleCancel } = useProfileState();
  const [formData, setFormData] = useState<ProfileData | null>(null);
  const [hovered, setHovered] = useState(false);

  // Single source of truth for profile picture display
  const [profilePicState, setProfilePicState] = useState<ProfilePicState>({
    src: '', // Empty string indicates no image (will show icon)
    isLoading: false,
    isOptimistic: false,
    timestamp: Date.now()
  });

  const [imageError, setImageError] = useState(false);

  const picUpload = useProfilePicUpload();

  // Initialize profile picture when user data loads
  useEffect(() => {
    if (user?.profilePic) {
      setProfilePicState(prev => ({
        src: user.profilePic,
        isLoading: false,
        isOptimistic: false,
        timestamp: Date.now()
      }));
    }
  }, [user?.profilePic]);

  // Handle navigation for unauthenticated users
  useEffect(() => {
    if (!isAuthLoading && !user) {
      navigate('/', { replace: true });
    }
  }, [isAuthLoading, user, navigate]);

  // Check if we should show icon instead of image
  const shouldShowIcon = !profilePicState.src || profilePicState.src.includes('img-placeholder');

  // Validate and format image URL (only when we have an actual image)
  const finalImageUrl = useMemo(() => {
    const { src } = profilePicState;

    // If no image, we'll show icon instead
    if (!src || src.includes('img-placeholder')) {
      return null;
    }

    // Handle base64 data URLs
    if (src.startsWith('data:')) {
      // Validate base64 data URL format
      if (src.match(/^data:image\/(jpeg|jpg|png|gif|webp);base64,/i)) {
        return src;
      } else {
        console.warn('Invalid base64 data URL format, will show icon');
        return null;
      }
    }

    // Handle regular URLs with cache busting
    try {
      const url = new URL(src, window.location.origin);
      url.searchParams.set('v', profilePicState.timestamp.toString());
      return url.toString();
    } catch (error) {
      console.warn('Invalid URL format, will show icon:', error);
      return null;
    }
  }, [profilePicState.src, profilePicState.timestamp]);

  // Handle profile picture upload states
  useEffect(() => {
    if (picUpload.isPending && !profilePicState.isLoading) {
      setProfilePicState(prev => ({
        ...prev,
        isLoading: true
      }));
    }

    if (picUpload.isSuccess && profilePicState.isLoading) {
      setProfilePicState(prev => ({
        ...prev,
        isLoading: false,
        isOptimistic: false
      }));
    }

    if (picUpload.isError && profilePicState.isLoading) {
      setProfilePicState(prev => ({
        ...prev,
        isLoading: false,
        isOptimistic: false
      }));
    }
  }, [picUpload.isPending, picUpload.isSuccess, picUpload.isError, profilePicState.isLoading]);

  // Reset image error when source changes
  useEffect(() => {
    setImageError(false);
  }, [profilePicState.src]);

  const handleProfilePicSave = (newImageSrc: string) => {
    // Validate the image source before setting it
    if (!newImageSrc) {
      console.warn('Empty image source provided');
      return;
    }

    // Ensure base64 data URLs have proper format
    if (newImageSrc.startsWith('data:')) {
      if (!newImageSrc.match(/^data:image\/(jpeg|jpg|png|gif|webp);base64,/i)) {
        console.warn('Invalid base64 format, skipping update');
        // Show error feedback to user
        setProfilePicState(prev => ({
          ...prev,
          isLoading: false
        }));
        return;
      }

      // Additional validation: check if base64 content is valid
      try {
        const base64Data = newImageSrc.split(',')[1];
        if (!base64Data || base64Data.length < 10) {
          throw new Error('Invalid base64 content');
        }
        // Try to decode to validate
        atob(base64Data.substring(0, 100)); // Test decode first 100 chars
      } catch (error) {
        console.warn('Base64 validation failed:', error);
        setProfilePicState(prev => ({
          ...prev,
          isLoading: false
        }));
        return;
      }
    }

    // Immediately show the new image (optimistic update)
    setProfilePicState({
      src: newImageSrc,
      isLoading: true,
      isOptimistic: true,
      timestamp: Date.now()
    });

    // Clear the upload modal
    picUpload.setImageSrc(null);
    picUpload.close();
  };

  const getOverlayText = () => {
    if (profilePicState.isLoading) return 'Saving...';
    if (!hovered) return undefined;
    if (shouldShowIcon) return 'Upload';
    return 'Change';
  };

  const handlePictureClick = () => {
    if (!profilePicState.isLoading) {
      picUpload.openFileDialog();
    }
  };

  const handleConfirmClick = () => {
    if (formData) {
      handleConfirm(formData);
    }
  };

  if (isAuthLoading) {
    return <LoadingLayout />;
  }

  return (
    <MainLayout>
      <div className="mx-auto mt-4 w-full max-w-5xl space-y-8 p-4 md:space-y-16 xl:px-0">
        <div className="font-poppins flex w-full flex-col gap-4 rounded-2xl border border-white/10 bg-gray-900/50 p-6 shadow-lg backdrop-blur-lg sm:flex-row md:gap-8">
          <div
            className={cn(
                'customized-cursor relative flex aspect-[5/7] max-h-[175px] max-w-[20%] justify-center overflow-hidden rounded-lg border border-gray-700/50 bg-gray-800/50 max-sm:mx-auto max-sm:max-w-[50%]',
                shouldShowIcon || imageError || !finalImageUrl ? 'flex px-8' : null
                )}
            style={{ cursor: profilePicState.isLoading ? 'not-allowed' : 'pointer' }}
            onClick={handlePictureClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            tabIndex={0}
          >
            <div className="flex aspect-[5/7] items-center justify-center overflow-hidden rounded-lg">
              {shouldShowIcon || imageError || !finalImageUrl ? (
                <IconUserScan size={48} className="text-gray-400" strokeWidth={1.5} />
              ) : (
                <img
                  src={finalImageUrl}
                  alt={user?.displayName || 'Profile'}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  onError={() => {
                    console.warn('Image failed to load:', finalImageUrl);
                    setImageError(true);
                  }}
                  onLoad={() => setImageError(false)}
                />
              )}
            </div>

            {(hovered || profilePicState.isLoading) && (
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/40">
                <span className="text-lg font-semibold text-white select-none">
                  {getOverlayText()}
                </span>
              </div>
            )}
          </div>

          <div className="flex w-full flex-col">
            <div className="flex flex-wrap items-center justify-between gap-4 max-sm:place-content-center">
              <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                Your Profile
                {profilePicState.isOptimistic && (
                  <span className="ml-2 text-xs text-amber-400">(Saving...)</span>
                )}
              </h3>
              <div
                className={`flex items-center gap-x-1.5 rounded-full ${user?.isSenior ? 'bg-red-500/10 text-red-400' : 'bg-purple-500/10 text-purple-400'} px-2.5 py-1 text-sm font-medium`}
              >
                <AcademicCapIcon className="h-4 w-4" />
                {user?.isSenior ? 'Senior' : 'Junior'}
              </div>
            </div>

            <p className="mt-3 text-lg font-bold text-white max-sm:text-center sm:text-3xl">
              {user?.displayName}
            </p>

            <div className="my-4 h-px bg-white/10" />

            <div className="flex flex-row flex-wrap items-start gap-2 max-sm:place-content-center max-sm:content-center">
              {user?.house && (
                <span className="relative inline-flex items-center gap-x-2 rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-400">
                  <HomeIcon className="h-4 w-4 text-amber-500" />
                  {user.house}
                  {user.isHouseLeader && (
                    <IconCrown className="absolute -top-2 -right-1 size-4 rotate-20 fill-amber-500 text-amber-500" />
                  )}
                </span>
              )}
              {user?.studentId && (
                <span className="inline-flex items-center gap-x-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-blue-400">
                  <IdentificationIcon className="h-4 w-4 text-blue-500" />
                  {user.studentId}
                </span>
              )}
              {user?.nationality && (
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
            disabled={profilePicState.isLoading}
          />

          {/* ProfilePicUpload modal */}
          <ProfilePicUpload
            open={picUpload.isOpen}
            onClose={picUpload.close}
            onSave={handleProfilePicSave}
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