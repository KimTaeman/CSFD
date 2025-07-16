import React from 'react';
import type { User } from '@/types/coven.types';

type ProfilePopupProps = {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
};

const ProfilePopup: React.FC<ProfilePopupProps> = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md" onClick={onClose}></div>

      <div className="w-full max-w-60 transform rounded-3xl border border-white/30 bg-black/10 backdrop-blur-lg transition-all duration-500 ease-in-out hover:scale-[1.02] sm:max-w-150">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-6 w-6 items-center justify-center rounded-full transition-all duration-200 hover:bg-white/20"
        >
          <img className="h-4 w-4" src="/src/assets/close.png" alt="Close" />
        </button>
        <div className="flex flex-col items-start px-8 py-4 sm:flex-row">
          <div className="mr-0 mb-4 flex flex-shrink-0 justify-center sm:mr-10 sm:mb-0">
            <img
              className="h-32 w-32 rounded-xl object-cover"
              src={user.profilePic}
              alt={user.displayName}
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-start justify-start space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6">
            <div className="flex min-w-0 flex-col items-start justify-start space-y-2">
              <p className="font-inter text-[0.7rem] whitespace-nowrap text-white">
                Full Name : {user.displayName}
              </p>
              <p className="font-inter text-[0.7rem] whitespace-nowrap text-white/80">
                Nickname : {user.nickname}
              </p>
              <p className="font-inter text-[0.7rem] whitespace-nowrap text-white/80">
                Nationality : {user.nationality}
              </p>
              <p className="font-inter text-[0.7rem] whitespace-nowrap text-white/80">
                Code : {user.studentId}
              </p>
            </div>
            <div className="flex min-w-0 flex-col items-start justify-start space-y-2">
              <p className="font-inter text-[0.7rem] whitespace-nowrap text-white/80">
                Social Media
              </p>
              <div className="flex flex-row items-center space-x-2">
                <img className="h-4 w-4 flex-shrink-0" src="/src/assets/instagram-logo.png" />
                <p className="font-inter text-[0.7rem] whitespace-nowrap text-white/80">
                  {user.instagram}
                </p>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <img className="h-4 w-4 flex-shrink-0" src="/src/assets/discord.png" />
                <p className="font-inter text-[0.7rem] whitespace-nowrap text-white/80">
                  {user.discord}
                </p>
              </div>
              {user.line && (
                <div className="flex flex-row items-center space-x-2">
                  <img className="h-4 w-4 flex-shrink-0" src="/src/assets/line.png" />
                  <p className="font-inter text-[0.7rem] whitespace-nowrap text-white/80">
                    {user.line}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopup;
