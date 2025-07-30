import { useEffect, useState, useCallback } from 'react';
import { IconAlertTriangle, IconX } from '@tabler/icons-react';
import { useLocation } from 'react-router-dom';

interface NotificationState {
  show: boolean;
  isExiting: boolean;
}

const EXCLUDED_PATHS = ['/', '/auth', '/auth/callback'];

const SessionExpiredPopup = () => {
  const location = useLocation();
  const [notification, setNotification] = useState<NotificationState>({
    show: false,
    isExiting: false,
  });

  const hideNotification = useCallback(() => {
    setNotification((prev) => ({ ...prev, isExiting: true }));
    setTimeout(() => {
      setNotification({ show: false, isExiting: false });
    }, 300);
  }, []);

  const showNotification = useCallback(() => {
    if (EXCLUDED_PATHS.includes(location.pathname)) {
      return;
    }

    setNotification({ show: true, isExiting: false });
    // Auto-hide and redirect after 5 seconds
    setTimeout(() => {
      hideNotification();
    }, 5000);
  }, [hideNotification, location.pathname]);

  useEffect(() => {
    const handleUnauthorized = () => {
      showNotification();
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && notification.show) {
        hideNotification();
      }
    };

    window.addEventListener('unauthorized', handleUnauthorized);
    document.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('unauthorized', handleUnauthorized);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [showNotification, hideNotification, notification.show]);

  if (!notification.show) return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-[9998] bg-black/20 transition-opacity duration-300 ${
          notification.isExiting ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={hideNotification}
      />

      {/* Main Notification */}
      <div
        className={`fixed top-4 left-1/2 z-[9999] w-full max-w-sm px-4 transition-all duration-300 ease-out sm:max-w-md md:max-w-lg lg:max-w-xl ${
          notification.isExiting
            ? '-translate-x-1/2 -translate-y-2 scale-95 opacity-0'
            : '-translate-x-1/2 translate-y-0 scale-100 opacity-100'
        }`}
        role="alert"
        aria-live="assertive"
      >
        <div className="relative w-full transform rounded-2xl border border-red-500/30 bg-red-900/20 shadow-2xl ring-1 ring-red-500/20 backdrop-blur-lg">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/10 via-red-400/5 to-red-500/10 blur-xl"></div>

          {/* Content */}
          <div className="relative flex items-start gap-3 p-4 sm:gap-4 sm:p-5 md:gap-5 md:p-6">
            {/* Icon */}
            <div className="mt-0.5 flex-shrink-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20 ring-1 ring-red-500/30 sm:h-9 sm:w-9 md:h-10 md:w-10">
                <IconAlertTriangle
                  size={18}
                  className="text-red-400 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  strokeWidth={2}
                />
              </div>
            </div>

            {/* Message */}
            <div className="min-w-0 flex-1">
              <h3 className="font-inter mb-1 text-sm font-semibold text-white sm:text-base md:mb-2 md:text-lg">
                Session Expired
              </h3>
              <p className="font-inter text-xs leading-relaxed text-white/80 sm:text-sm md:text-base">
                Your session may have expired. Please sign in again to continue.
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={hideNotification}
              className="ml-2 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-white/60 transition-all duration-200 hover:bg-white/10 hover:text-white focus:ring-2 focus:ring-red-400/50 focus:outline-none sm:h-9 sm:w-9 md:h-10 md:w-10"
              aria-label="Dismiss notification"
            >
              <IconX size={16} className="sm:h-5 sm:w-5 md:h-6 md:w-6" strokeWidth={2} />
            </button>
          </div>

          {/* Progress bar */}
          <div className="absolute right-0 bottom-0 left-0 h-1 overflow-hidden rounded-b-2xl bg-red-500/20">
            <div
              className="animate-shrink-width h-full rounded-b-2xl bg-gradient-to-r from-red-500 to-red-400"
              style={{
                animation: 'shrink-width 5s linear forwards',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionExpiredPopup;
