import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

function Sidebar({ isOpen, onClose, children }: SidebarProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="bg-opacity-50 fixed inset-0 z-40 w-30" onClick={onClose} />

      {/* Sidebar */}
      {/* The { background: } part is copied from the figma design. Tailwind doesn't support angled gradients */}
      <div
        className="fixed top-10 bottom-10 z-50 w-55 rounded-4xl"
        style={{
          background:
            'linear-gradient(108.46deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)',
        }}
      >
        {children}
      </div>
    </>
  );
}

export default Sidebar;
