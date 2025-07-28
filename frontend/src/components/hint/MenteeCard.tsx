import { HeartIcon } from '@heroicons/react/24/solid';
import { StatusBadge } from './StatusBadge';
import type { FC } from 'react';

export interface Mentee {
  id: string;
  displayName: string;
  lives: number;
  isFound: boolean;
  foundAt?: string | null;
}

export interface User {
  mentees: Mentee[];
}

export interface MenteeCardProps {
  mentee: Mentee;
  user: User;
  index: number;
}

export const MenteeCard: FC<MenteeCardProps> = ({ mentee, user, index }) => {
  return (
    <div className="font-poppins rounded-2xl border border-white/10 bg-gray-800/30 p-6 shadow-lg backdrop-blur-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
          Your Junior {user.mentees.length > 1 && `#${index + 1}`}
        </h3>
        <div className="flex items-center gap-x-1.5 rounded-full bg-red-500/10 px-2.5 py-1 text-sm font-medium text-red-400">
          <HeartIcon className="h-4 w-4" />
          {mentee.lives}
        </div>
      </div>

      <p className="mt-3 text-3xl font-bold text-white">{mentee.displayName}</p>

      <div className="my-4 h-px bg-white/10" />

      <StatusBadge isFound={mentee.isFound} foundAt={mentee.foundAt} />
    </div>
  );
};
