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
      {user.isHouseLeader && (
        <div className="animate-wiggle absolute -top-8 -right-4 z-10 w-16 h-16 sm:-top-10 sm:-right-5 sm:w-20 sm:h-20">
          <img
            src={`/assets/hat-${user.house}.png`}
            alt="house hat"
            className="w-full h-full object-contain rotate-25"
          />
        </div>
      )}

      <div className="w-full transform rounded-2xl border border-white/10 bg-gray-900/30 text-white shadow-lg backdrop-blur-lg transition-all duration-500 ease-in-out hover:scale-[1.02] max-w-sm mx-auto">
        <div className="flex w-full flex-row items-center gap-3 p-4 md:p-2 sm:gap-4">
          {/* Profile Image Container */}
          <div className="relative flex-shrink-0">
            {/* Safari fallback using padding-bottom technique */}
            <div
              className="relative w-16 h-20 sm:w-20 sm:h-24 md:w-16 md:h-20 overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700/50"
              style={{
                // Fallback for browsers that don't support aspect-ratio
                aspectRatio: '4/5'
              }}
            >
              {shouldShowIcon ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <IconUserScan
                    size={24}
                    className="text-gray-400"
                    strokeWidth={1.5}
                  />
                </div>
              ) : (
                <>
                  {imageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50">
                      <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <img
                    className={cn(
                      "absolute inset-0 w-full h-full object-cover transition-opacity duration-200",
                      imageLoading ? "opacity-0" : "opacity-100"
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
          <div className="flex flex-1 flex-col items-start justify-center space-y-1 min-w-0">
            <h3 className="font-inter text-sm sm:text-base lg:text-lg font-bold text-white truncate w-full">
              {user.nickname || user.studentId || 'Unknown'}
            </h3>
            <p className="font-inter text-xs sm:text-sm lg:text-base text-gray-300">
              {user.isHouseLeader ? 'House Master' : user.isSenior ? 'Senior' : 'Junior'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;