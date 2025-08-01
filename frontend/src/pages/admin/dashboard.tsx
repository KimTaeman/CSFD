import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useFetch } from '@/hooks/useFetch';
import MainLayout from '../layout';
import LoadingLayout from '@/components/layout/loading';

interface ApiError {
  response?: {
    status: number;
  };
  message: string;
}

interface FoundPair {
  foundAt: string;
  junior: {
    displayName: string;
    nickname: string;
  };
  senior: {
    displayName: string;
    nickname: string;
  };
}

const AdminDashboard: React.FC = () => {
  const { fetchFoundPairs } = useFetch();

  const {
    data: pairs,
    isLoading,
    isError,
    error,
  } = useQuery<FoundPair[], ApiError>({
    queryKey: ['foundPairs'],
    queryFn: fetchFoundPairs,
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

    return (
      <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-2xl shadow-black/20">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-700">
            <thead className="bg-slate-800/50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-400 uppercase"
                >
                  Junior Nickname
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-400 uppercase"
                >
                  Junior
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-400 uppercase"
                >
                  Senior Nickname
                </th>

                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-400 uppercase"
                >
                  Senior
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-400 uppercase"
                >
                  Date Found
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {pairs && pairs.length > 0 ? (
                pairs.map((pair, index) => (
                  <tr key={index} className="transition-colors duration-200 hover:bg-slate-800/60">
                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-white">
                      {pair.junior.nickname}
                    </td>

                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-white">
                      {pair.junior.displayName}
                    </td>

                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-white">
                      {pair.senior.nickname}
                    </td>

                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-white">
                      {pair.senior.displayName}
                    </td>

                    <td className="px-6 py-4 text-sm whitespace-nowrap text-slate-300">
                      {new Date(pair.foundAt).toLocaleString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-10 text-center text-slate-500">
                    No pairs have been found yet.
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
      <div className="min-h-screen w-full overflow-x-hidden">
        <header className="mb-8 rounded-lg bg-slate-900/70 p-6 shadow-lg backdrop-blur-sm">
          <h1 className="text-4xl font-bold tracking-tight text-white">Admin Dashboard</h1>
          <p className="mt-2 text-lg text-slate-300">Overview of successfully matched pairs.</p>
        </header>
        <div>{renderContent()}</div>
      </div>
    </MainLayout>
  );
};

export default AdminDashboard;
