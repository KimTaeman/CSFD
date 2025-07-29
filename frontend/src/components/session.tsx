import { useEffect, useState, useCallback } from 'react';
import { IconAlertTriangle, IconX } from '@tabler/icons-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NotificationState {
  show: boolean;
  isExiting: boolean;
}

const EXCLUDED_PATHS = ['/', '/auth', '/auth/callback'];

const SessionExpiredPopup = () => {
  const location = useLocation();
  const [notification, setNotification] = useState<NotificationState>({
    show: false,
    isExiting: false
  });

  const hideNotification = useCallback(() => {
    setNotification(prev => ({ ...prev, isExiting: true }));
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
        className={`fixed top-4 left-1/2 z-[9999] w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl px-4 transition-all duration-300 ease-out ${
          notification.isExiting
            ? 'opacity-0 -translate-x-1/2 -translate-y-2 scale-95'
            : 'opacity-100 -translate-x-1/2 translate-y-0 scale-100'
        }`}
        role="alert"
        aria-live="assertive"
      >
        <div className="relative w-full transform rounded-2xl border border-red-500/30 bg-red-900/20 backdrop-blur-lg shadow-2xl ring-1 ring-red-500/20">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/10 via-red-400/5 to-red-500/10 blur-xl"></div>

          {/* Content */}
          <div className="relative flex items-start gap-3 sm:gap-4 md:gap-5 p-4 sm:p-5 md:p-6">
            {/* Icon */}
            <div className="flex-shrink-0 mt-0.5">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-red-500/20 ring-1 ring-red-500/30">
                <IconAlertTriangle
                  size={18}
                  className="text-red-400 sm:w-5 sm:h-5 md:w-6 md:h-6"
                  strokeWidth={2}
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex-1 min-w-0">
              <h3 className="font-inter text-sm sm:text-base md:text-lg font-semibold text-white mb-1 md:mb-2">
                Session Expired
              </h3>
              <p className="font-inter text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
                Your session may have expired. Please sign in again to continue.
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={hideNotification}
              className="flex-shrink-0 ml-2 flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-full text-white/60 transition-all duration-200 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400/50"
              aria-label="Dismiss notification"
            >
              <IconX size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" strokeWidth={2} />
            </button>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-red-500/20 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-b-2xl animate-shrink-width"
              style={{
                animation: 'shrink-width 5s linear forwards'
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionExpiredPopup;