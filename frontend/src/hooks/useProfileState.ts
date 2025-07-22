import { useState, useCallback, useEffect } from 'react';
import { useAuthContext } from './useAuthContext';
import api from '@/api/axios';
import type { ProfileData } from '@/types/profile.types';

interface UseProfileStateReturn {
  isSidebarOpen: boolean;
  isEditing: boolean;
  isLoading: boolean;
  error: string | null;
  closeSidebar: () => void;
  openSidebar: () => void;
  handleEditClick: () => void;
  handleConfirm: (data: ProfileData) => void;
  handleCancel: () => void;
}

export function useProfileState(): UseProfileStateReturn {
  const { user } = useAuthContext();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  const handleConfirm = useCallback(
    async (data: ProfileData) => {
      setIsLoading(true);
      setError(null);
      try {
        await api.put(`/students/${user.id}`, data);
        setIsEditing(false);
      } catch (err) {
        setError('Failed to save profile. Please try again.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    },
    [user],
  );

  const handleCancel = useCallback(() => setIsEditing(false), []);

  return {
    isSidebarOpen: isMobile ? isMobileSidebarOpen : isDesktopSidebarOpen,
    isEditing,
    isLoading,
    error,
    closeSidebar,
    openSidebar,
    handleEditClick,
    handleConfirm,
    handleCancel,
  };
}
