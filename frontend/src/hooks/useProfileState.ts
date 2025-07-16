import { useState, useCallback, useEffect } from 'react';

interface UseProfileStateReturn {
  isSidebarOpen: boolean;
  isEditing: boolean;
  closeSidebar: () => void;
  openSidebar: () => void;
  handleEditClick: () => void;
  handleConfirm: () => void;
  handleCancel: () => void;
}

export function useProfileState(): UseProfileStateReturn {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const closeSidebar = useCallback(() => {
    if (isMobile) {
      setIsMobileSidebarOpen(false);
    } else {
      setIsDesktopSidebarOpen(false);
    }
  }, [isMobile]);

  const openSidebar = useCallback(() => {
    if (isMobile) {
      setIsMobileSidebarOpen(true);
    } else {
      setIsDesktopSidebarOpen(true);
    }
  }, [isMobile]);

  const handleEditClick = useCallback(() => setIsEditing(true), []);

  const handleConfirm = useCallback(() => {
    /**
     * @TODO Implement profile save logic
     */
    console.log('Profile saved!');
    setIsEditing(false);
  }, []);

  const handleCancel = useCallback(() => setIsEditing(false), []);

  return {
    isSidebarOpen: isMobile ? isMobileSidebarOpen : isDesktopSidebarOpen,
    isEditing,
    closeSidebar,
    openSidebar,
    handleEditClick,
    handleConfirm,
    handleCancel,
  };
}
