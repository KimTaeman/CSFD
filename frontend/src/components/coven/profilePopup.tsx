import React from 'react';
import type { StudentInfo } from '@/types/type';

type ProfilePopupProps = {
  isOpen: boolean;
  onClose: () => void;
  user: StudentInfo | null;
};

const ProfilePopup: React.FC<ProfilePopupProps> = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;

  const socialLinks = [
    { name: 'Instagram', handle: user.instagram, icon: '/assets/instagram-icon.svg' },
    { name: 'Discord', handle: user.discord, icon: '/assets/discord-icon.svg' },
    { name: 'Line', handle: user.line, icon: '/assets/line-icon.svg' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg transform rounded-2xl border border-white/20 bg-white/80 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 ease-in-out sm:max-w-2xl sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full text-black transition-all hover:bg-black/20"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              className="h-40 w-40 rounded-full object-cover shadow-lg sm:h-48 sm:w-48 md:h-56 md:w-56"
              src={user.profilePic || `/assets/profile-${user.house}.png`} // Fallback to a default image
              alt={`${user.displayName || 'User'}'s profile picture`}
            />
          </div>

          {/* User Details */}
          <div className="flex w-full flex-col items-center text-center sm:items-start sm:text-left">
            <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
              {user.displayName || 'Unnamed Student'}
            </h2>
            <p className="text-lg text-gray-600 md:text-xl">@{user.nickname || 'no-nickname'}</p>

            <div className="my-4 h-px w-full bg-gray-300/50" />

            <div className="text-md grid grid-cols-2 gap-x-6 gap-y-2 text-left text-gray-800 sm:text-lg">
              <p className="font-semibold">Code:</p>
              {/* Use logical OR (||) to provide a fallback value */}
              <p>{user.studentId.slice(-3) || 'N/A'}</p>
              <p className="font-semibold">Nationality:</p>
              <p>{user.nationality || 'N/A'}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-md font-semibold text-gray-700 sm:text-lg">Social Media</h3>
              <div className="mt-2 flex flex-col space-y-2">
                {/* Render all social links, showing a placeholder if the handle is missing */}
                {socialLinks.map((social) => (
                  <div key={social.name} className="flex items-center space-x-3">
                    <img
                      className="h-6 w-6 flex-shrink-0 sm:h-8 sm:w-8"
                      src={social.icon}
                      alt={`${social.name} icon`}
                    />
                    {/* Add styling to the placeholder to differentiate it */}
                    <p
                      className={`text-md text-black sm:text-lg ${!social.handle && 'text-gray-500 italic'}`}
                    >
                      {social.handle || 'Not provided'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopup;
