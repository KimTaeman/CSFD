import React, { useState } from 'react';
import type { StudentInfo } from '@/types/type';
import { cn } from '@/lib/utils.ts';
import { IconUserScan } from '@tabler/icons-react';

type ProfileModalProps = {
  user: StudentInfo;
  onClick?: () => void;
  className?: string;
};

const ProfileModal: React.FC<ProfileModalProps> = ({ user, onClick, className }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageError(false);
    setImageLoading(false);
  };

  const shouldShowIcon = imageError;
  const fallbackImage = `/assets/profile-${user.house}.png`;

  return (
    <div onClick={onClick} className={cn('customized-cursor relative w-full', className)}>
      <div className="relative mx-auto w-full max-w-sm transform rounded-2xl border border-white/10 bg-gray-900/30 text-white shadow-lg backdrop-blur-lg transition-all duration-500 ease-in-out hover:scale-[1.02]">
        <div className="flex w-full flex-row items-center gap-3 p-4 sm:gap-4 md:p-2">
          {/* Profile Image Container */}
          <div className="relative flex-shrink-0">
            {/* Safari fallback using padding-bottom technique */}
            <div
              className="relative h-20 w-16 overflow-hidden rounded-xl border border-gray-700/50 bg-gray-800/50 sm:h-24 sm:w-20 md:h-20 md:w-16"
              style={{
                // Fallback for browsers that don't support aspect-ratio
                aspectRatio: '4/5',
              }}
            >
              {shouldShowIcon ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <IconUserScan size={24} className="text-gray-400" strokeWidth={1.5} />
                </div>
              ) : (
                <>
                  {imageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-400 border-t-transparent"></div>
                    </div>
                  )}
                  <img
                    className={cn(
                      'absolute inset-0 h-full w-full object-cover transition-opacity duration-200',
                      imageLoading ? 'opacity-0' : 'opacity-100',
                    )}
                    src={user.profilePic || fallbackImage}
                    alt={user.nickname || user.displayName || 'Profile'}
                    onError={handleImageError}
                    onLoad={handleImageLoad}
                    loading="lazy"
                  />
                </>
              )}
            </div>
          </div>

          {/* User Info */}
          <div className="flex min-w-0 flex-1 flex-col items-start justify-center space-y-1">
            <h3 className="font-inter w-full truncate text-sm font-bold text-white sm:text-base lg:text-lg">
              {user.nickname || user.studentId || 'Unknown'}
            </h3>
            <p className="font-inter text-xs text-gray-300 sm:text-sm lg:text-base">
              {user.isHouseLeader ? 'House Master' : user.isSenior ? 'Senior' : 'Junior'}
            </p>
          </div>
        </div>

        {user.isHouseLeader && (
          <div className="animate-wiggle absolute -top-8 -right-6 z-10 h-16 w-16 sm:-top-10 sm:-right-8 sm:h-20 sm:w-20">
            <img
              src={`/assets/hat-${user.house}.png`}
              alt="house hat"
              className="h-full w-full rotate-25 object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileModal;
