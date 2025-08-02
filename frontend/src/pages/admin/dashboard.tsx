import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import MainLayout from '../layout';
import LoadingLayout from '@/components/layout/loading';
import { useFetch } from '@/hooks/useFetch';

interface ApiError {
  response?: {
    status: number;
  };
  message: string;
}

interface FoundPair {
  foundAt: string | null;
  junior: {
    displayName: string;
    nickname: string;
  };
  senior: {
    displayName: string;
    nickname: string;
  };
}

type FilterStatus = 'found' | 'not_found' | 'all';

const AdminDashboard: React.FC = () => {
  const [filter, setFilter] = useState<FilterStatus>('found');
  const { fetchMentorPairs } = useFetch();

  const {
    data: pairs,
    isLoading,
    isError,
    error,
  } = useQuery<FoundPair[], ApiError>({
    queryKey: ['mentorPairs', filter],
    queryFn: () => fetchMentorPairs(filter),
    retry: (failureCount, error: ApiError) => {
      if (error.response?.status === 403) {
        return false;
      }
      return failureCount < 2;
    },
  });

  const renderContent = () => {
    if (isLoading) {
      return <LoadingLayout />;
    }

    if (isError) {
      const message =
        error?.response?.status === 403
          ? 'Access Forbidden: You do not have permission to view this page.'
          : 'An error occurred while fetching data.';
      return (
        <div
          className="flex items-center rounded-lg border border-red-500/30 bg-red-900/20 px-4 py-3 text-red-300"
          role="alert"
        >
          <p className="font-medium">{message}</p>
        </div>
      );
    }

    const emptyMessages = {
      found: 'No pairs have been found yet.',
      not_found: 'All pairs have been found!',
      all: 'No pairs exist in the system.',
    };

    return (
      <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-2xl shadow-black/20">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-700">
            <thead className="bg-slate-800/50">
              <tr>
                <th
                  scope="col"
                  className="px-3 py-4 text-left text-xs font-semibold tracking-wider text-slate-400 uppercase md:px-4 xl:px-6"
                >
                  Junior
                </th>
                <th
                  scope="col"
                  className="px-3 py-4 text-left text-xs font-semibold tracking-wider text-slate-400 uppercase md:px-4 xl:px-6"
                >
                  Senior
                </th>
                {filter !== 'not_found' && (
                  <th
                    scope="col"
                    className="px-3 py-4 text-left text-xs font-semibold tracking-wider text-slate-400 uppercase md:px-4 xl:px-6"
                  >
                    Date Found
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {pairs && pairs.length > 0 ? (
                pairs.map((pair, index) => (
                  <tr key={index} className="transition-colors duration-200 hover:bg-slate-800/60">
                    <td className="px-3 py-4 whitespace-nowrap md:px-4 xl:px-6">
                      <div className="text-sm font-medium text-white">
                        {pair.junior.displayName}
                      </div>
                      <div className="text-xs text-slate-400">{pair.junior.nickname}</div>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap md:px-4 xl:px-6">
                      <div className="text-sm font-medium text-white">
                        {pair.senior.displayName}
                      </div>
                      <div className="text-xs text-slate-400">{pair.senior.nickname}</div>
                    </td>
                    {filter !== 'not_found' && (
                      <td className="px-3 py-4 text-sm whitespace-nowrap text-slate-300 md:px-4 xl:px-6">
                        {pair.foundAt ? new Date(pair.foundAt).toLocaleString() : 'N/A'}
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={filter !== 'not_found' ? 3 : 2}
                    className="py-10 text-center text-slate-500"
                  >
                    {emptyMessages[filter]}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <MainLayout>
      <div className="container mx-auto min-h-screen w-full overflow-x-hidden px-4 py-8 sm:px-6 xl:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-white">Admin Dashboard</h1>
          <p className="mt-2 text-lg text-slate-300">Overview of mentor-mentee pairs.</p>
        </header>

        {/* 4. Filter controls */}
        <div className="mb-6 flex space-x-2">
          {(['found', 'not_found', 'all'] as FilterStatus[]).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                filter === status
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {status.replace('_', ' ').charAt(0).toUpperCase() + status.slice(1).replace('_', ' ')}
            </button>
          ))}
        </div>

        <div>{renderContent()}</div>
      </div>
    </MainLayout>
  );
};

export default AdminDashboard;
