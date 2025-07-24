import { useState, useCallback, useEffect } from 'react';
import { useAuthContext } from './useAuthContext';
import api from '@/api/axios';
import type { ProfileData } from '@/types/profile.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

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
  const queryClient = useQueryClient();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const mutation = useMutation({
    mutationFn: (data: ProfileData) => api.put(`/students/${user.id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['authUser'] });
      setIsEditing(false);
    },
  });

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
    (data: ProfileData) => {
      mutation.mutate(data);
    },
    [mutation],
  );

  const handleCancel = useCallback(() => setIsEditing(false), []);

  return {
    isSidebarOpen: isMobile ? isMobileSidebarOpen : isDesktopSidebarOpen,
    isEditing,
    isLoading: mutation.isPending,
    error: mutation.error ? 'Failed to save profile. Please try again.' : null,
    closeSidebar,
    openSidebar,
    handleEditClick,
    handleConfirm,
    handleCancel,
  };
}
