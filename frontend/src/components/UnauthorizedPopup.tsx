import { useEffect, useState } from 'react';

const UnauthorizedPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShow(true);
      setTimeout(() => setShow(false), 5000);
    };
    window.addEventListener('unauthorized', handler);
    return () => window.removeEventListener('unauthorized', handler);
  }, []);

  if (!show) return null;
  return (
    <div className="fixed top-8 left-1/2 z-[9999] -translate-x-1/2 rounded-xl bg-red-700/90 px-6 py-3 text-white shadow-xl">
      Session expired. Please sign in again.
    </div>
  );
};

export default UnauthorizedPopup;
