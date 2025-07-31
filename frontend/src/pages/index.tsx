import { useEffect, useState } from 'react';
import { useAuthContext } from '@/hooks/useAuthContext.ts';
import { useNavigate } from 'react-router-dom';
import LoadingLayout from '@/components/layout/loading.tsx';

function Page() {
  const { isAuthenticated, isLoading } = useAuthContext();
  const navigate = useNavigate();
  const [isLive, setisLive] = useState(false);
  const [countdown, setCountdown] = useState<string>('00:00:00:00');
  // Target date: August 9th, 8:30 AM Bangkok time (UTC+7)
  const targetDate = new Date('2025-08-09T01:30:00.000Z'); // 8:30 AM Bangkok = 1:30 AM UTC

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/coven', { replace: true });
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const updateisLive = () => {
      const now = new Date();
      const timeDiff = targetDate.getTime() - now.getTime();

      if (timeDiff <= 0) {
        setisLive(true);
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      const pad = (n: number) => n.toString().padStart(2, '0');
      setCountdown(`${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
    };

    updateisLive();
    const interval = setInterval(updateisLive, 1000);
    return () => clearInterval(interval);
  }, []);

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

          {/* isLive */}
          <div className="animate-fade animate-once animate-delay-200 w-full">
            {!isLive ? (
              <div className="w-full">
                <p className="mb-4 text-center text-lg font-semibold tracking-wider text-cyan-300 uppercase">
                  Event starts in
                </p>

                <div className="flex justify-center gap-2">
                  {countdown.split(':').map((unit, index) => {
                    const labels = ['DAYS', 'HRS', 'MIN', 'SEC'];
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center rounded-lg border-2 border-cyan-400/50 bg-black/50 px-3 py-2 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                      >
                        <div className="min-w-[3ch] text-center font-mono text-xl leading-none font-bold tracking-wider text-cyan-300 tabular-nums drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                          {unit}
                        </div>
                        <div className="mt-1 text-xs font-semibold tracking-widest text-cyan-200">
                          {labels[index]}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="flex w-full flex-col items-center">
                {/* Flashing Box */}
                <div className="rounded-lg border-2 border-purple-500 p-4 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                  {/* Glitch Container */}
                  <div className="relative">
                    {/* Main Text */}
                    <p className="glitch text-3xl font-bold tracking-wider text-fuchsia-500 drop-shadow-[0_0_10px_rgba(217,70,239,0.8)]">
                      EVENT IS LIVE!
                    </p>

                    {/* Glitch Layers */}
                    <p
                      className="absolute top-0 left-0 animate-pulse text-3xl font-bold tracking-wider text-purple-400 opacity-70"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}
                    >
                      EVENT IS LIVE!
                    </p>
                    <p
                      className="absolute top-0 left-0 animate-pulse text-3xl font-bold tracking-wider text-pink-400 opacity-70"
                      style={{ clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)' }}
                    >
                      EVENT IS LIVE!
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

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
