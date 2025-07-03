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
      <div 
        className="fixed w-30 inset-0 bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      {/* The { background: } part is copied from the figma design. Tailwind doesn't support angled gradients */}
      <div 
        className="fixed top-10 bottom-10 w-55 rounded-4xl z-50"
        style={{
          background: 'linear-gradient(108.46deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)'
        }}
      >
        {children}
      </div>
    </>
  );
}

export default Sidebar;