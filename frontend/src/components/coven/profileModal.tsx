import React from 'react';
import type { StudentInfo } from '@/types/type';

type ProfileModalProps = {
  user: StudentInfo;
  onClick?: () => void;
};

const ProfileModal: React.FC<ProfileModalProps> = ({ user, onClick }) => {
  return (
    <div onClick={onClick} className="relative cursor-pointer">
      {user.isHouseLeader && (
        <div className="animate-wiggle absolute -top-10 -right-5 z-50 h-20 w-20 rotate-25 bg-cover">
          <img src={`/assets/hat-${user.house}.png`} alt="house hat" />
        </div>
      )}
      <div className="w-auto transform rounded-2xl border border-white/30 bg-white text-[#1C1B1A] backdrop-blur-lg transition-all duration-500 ease-in-out hover:scale-[1.02] md:max-w-80">
        <div className="flex flex-row items-center p-1 w-full">
          <div className="mr-4 aspect-[5/7] h-[75px] w-[60px] justify-center md:h-[100px] lg:w-[60px]">
            <img
              className="h-full rounded-2xl object-cover"
              src={user.profilePic || `/assets/profile-${user.house}.png`}
              alt={user.nickname}
            />
          </div>
          <div className="flex flex-1 flex-col items-start justify-start space-y-2">
            <h3 className="font-inter text-sm sm:text-md font-bold xl:text-xl">
              {user.nickname || user.studentId}
            </h3>
            <p className="font-inter text-xs sm:text-sm xl:text-lg">
              {user.isHouseLeader ? 'House Master' : user.isSenior ? 'Senior' : 'Junior'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
