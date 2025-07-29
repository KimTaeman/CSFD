import { useEffect } from 'react';
import { useAuthContext } from '@/hooks/useAuthContext.ts';
import { useNavigate } from 'react-router-dom';
import LoadingLayout from '@/components/layout/loading.tsx';

function Page() {
  const { isAuthenticated, isLoading } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/coven', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const handleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/login`;
  };
  if (isLoading) {
    return <LoadingLayout />;
  }

  return (
    <div className="flex min-h-svh items-center justify-center bg-[url('/assets/bg-computer.png')] bg-cover bg-fixed bg-bottom bg-no-repeat p-4 text-white">
      <div className="w-full max-w-md rounded-xl p-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <img
            src="/assets/logo.png"
            className="animate-jump-in animate-once pointer-events-none w-full max-w-80 select-none"
            alt="CSFD 2025"
          />

          {/* Instructional Text */}
          <p className="animate-fade animate-once animate-delay-300 text-gray-200">
            Please sign in using your Microsoft account
            <br />
            <span className="font-semibold text-white">(@ad.sit.kmutt.ac.th)</span>
          </p>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="animate-fade animate-once animate-delay-500 w-full cursor-pointer rounded-lg bg-purple-600 px-5 py-3 text-base font-bold text-white transition-colors duration-300 hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
          >
            Login with Microsoft
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
