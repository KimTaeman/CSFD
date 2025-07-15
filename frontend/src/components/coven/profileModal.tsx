import React from 'react';
import type { User } from '@/types/coven.types';
import { getUserRole } from '@/types/coven.types';

type ProfileModalProps = {
  user: User;
  onClick?: () => void;
};

const ProfileModal: React.FC<ProfileModalProps> = ({ user, onClick }) => {
  const role = getUserRole(user.studentId);

  return (
    <div onClick={onClick} className="cursor-pointer">
      <div className="w-full max-w-80 transform rounded-3xl border border-white/30 bg-black/10 backdrop-blur-lg transition-all duration-500 ease-in-out hover:scale-[1.02]">
        <div className="flex flex-row items-center px-8 py-4">
          <div className="mr-8 flex w-full justify-center md:max-w-20">
            <img className="max-w-30 rounded-xl" src={user.profilePic} alt={user.displayName} />
          </div>
          <div className="flex flex-1 flex-col items-start justify-start space-y-2">
            <h3 className="font-inter text-[1.5rem] font-bold text-white">{user.displayName}</h3>
            <p className="font-inter text-[0.7rem] text-white/80">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
