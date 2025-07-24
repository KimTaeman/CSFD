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
    <div className="flex min-h-svh items-center justify-center bg-[url('/assets/bg-computer.png')] bg-cover bg-fixed bg-bottom bg-no-repeat px-4 text-white">
      <div className="flex flex-col gap-4 text-center">
        <img
          src="/assets/logo.png"
          className="animate-jump-in animate-once pointer-events-none mx-auto w-full max-w-96 select-none"
          alt="CSFD 2025"
        />
        <button
          onClick={handleLogin}
          className="animate-fade animate-once animate-delay-500 cursor-pointer rounded bg-purple-500 px-4 py-2 font-bold text-white hover:bg-purple-700"
        >
          Login with Microsoft
        </button>
      </div>
    </div>
  );
}

export default Page;
