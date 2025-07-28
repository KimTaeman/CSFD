import React from 'react';
import type { StudentInfo } from '@/types/type';
import {
  AcademicCapIcon,
  HomeIcon,
  IdentificationIcon,
  LanguageIcon,
} from '@heroicons/react/24/solid';
import {
  IconBrandDiscord,
  IconBrandInstagram,
  IconBrandLine,
  IconCrown,
} from '@tabler/icons-react';

type ProfilePopupProps = {
  isOpen: boolean;
  onClose: () => void;
  user: StudentInfo | null;
};

const ProfilePopup: React.FC<ProfilePopupProps> = ({ isOpen, onClose, user }) => {
  const getSocialLink = (name: string, handle: string) => {
    if (!handle) return undefined;

    switch (name) {
      case 'Instagram':
        return `https://instagram.com/${handle}`;
      case 'Line':
        return `https://line.me/ti/p/~${handle}`;
      default:
        return undefined;
    }
  };

  if (!isOpen || !user) return null;

  const socialLinks = [
    {
      name: 'Instagram',
      handle: user.instagram,
      icon: <IconBrandInstagram className="text-pink-500" />,
    },
    {
      name: 'Discord',
      handle: user.discord,
      icon: <IconBrandDiscord className="text-[#5865F2]" />,
    },
    { name: 'Line', handle: user.line, icon: <IconBrandLine className="text-[#06C755]" /> },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Card */}
      <div className="font-poppins relative w-full max-w-lg transform rounded-2xl border border-white/10 bg-gray-900/30 p-6 shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out sm:max-w-2xl sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full transition-all hover:bg-black/20"
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
          <div className="space-y-4">
            <div className="aspect-[5/7] max-h-80 flex-shrink-0 overflow-hidden rounded-lg shadow-lg max-md:max-h-80">
              <img
                className="h-full w-full object-cover"
                src={user.profilePic || `/assets/profile-${user.house}.png`}
                alt={`${user.displayName || 'User'}'s profile picture`}
              />
            </div>
            <div className="flex flex-row gap-4">
              <span
                className={`flex w-full flex-1 items-center justify-center-safe gap-x-1.5 rounded-full ${user.isSenior ? 'bg-red-500/10 text-red-400' : 'bg-purple-500/10 text-purple-400'} px-2.5 py-1 text-sm font-medium`}
              >
                <AcademicCapIcon className="h-4 w-4" />

                {user.isSenior ? 'Senior' : 'Junior'}
              </span>
            </div>
          </div>

          {/* User Details */}
          <div className="flex w-full flex-2/3 flex-col items-center gap-2 text-center sm:items-start sm:text-left">
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-white md:text-xl">
                {user.displayName || 'Unnamed Student'}
              </h2>
              <div className="flex flex-row flex-wrap items-start gap-2 max-sm:justify-center-safe">
                {user.nickname && (
                  <p className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                    @{user.nickname}
                  </p>
                )}
              </div>
            </div>

            <div className="my-2 h-px w-full bg-white/20" />

            <div className="flex flex-row flex-wrap place-content-center content-center items-start gap-2">
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
                  {user.studentId.slice(-3)}
                </span>
              )}
              {user.nationality && (
                <span className="inline-flex items-center gap-x-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
                  <LanguageIcon className="h-4 w-4 text-emerald-500" />
                  {user.nationality}
                </span>
              )}
            </div>

            <div className="mt-6">
              <h3 className="text-md font-semibold text-gray-300 sm:text-lg">Social Media</h3>
              <div className="mt-2 flex flex-col space-y-2">
                {socialLinks.map((social) => (
                  <div key={social.name} className="flex items-center space-x-3">
                    {social.icon}
                    {social.handle ? (
                      social.name === 'Discord' ? (
                        <p className="text-md text-black sm:text-lg">{social.handle}</p>
                      ) : (
                        <a
                          href={getSocialLink(social.name, social.handle)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-md text-blue-400 hover:underline sm:text-lg"
                        >
                          {social.handle}
                        </a>
                      )
                    ) : (
                      <p className="text-md text-gray-400 italic sm:text-lg">Not provided</p>
                    )}
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
