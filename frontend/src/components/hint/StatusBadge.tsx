import { CheckCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import type { FC } from 'react';

interface StatusBadgeProps {
  isFound: boolean;
  foundAt?: string | null;
}

const formatDate = (dateString: string | null | undefined): string | null => {
  if (!dateString) return null;
  return new Date(dateString).toLocaleString('en-GB', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'UTC',
  });
};

export const StatusBadge: FC<StatusBadgeProps> = ({ isFound, foundAt }) => {
  const formattedDate = formatDate(foundAt);

  if (isFound) {
    return (
      <div className="flex flex-col items-start">
        <span className="inline-flex items-center gap-x-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
          <CheckCircleIcon className="h-4 w-4 text-emerald-500" />
          Found
        </span>
        {formattedDate && <p className="mt-1 text-xs text-gray-400">{formattedDate}</p>}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start">
      <span className="inline-flex items-center gap-x-2 rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-400">
        <MagnifyingGlassIcon className="h-4 w-4 text-amber-500" />
        Still Searching For You...
      </span>
    </div>
  );
};
