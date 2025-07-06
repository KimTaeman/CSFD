import { useState, useCallback } from 'react';

interface UseProfileStateReturn {
  isSidebarOpen: boolean;
  isEditing: boolean;
  closeSidebar: () => void;
  handleEditClick: () => void;
  handleConfirm: () => void;
  handleCancel: () => void;
}

export function useProfileState(): UseProfileStateReturn {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const closeSidebar = useCallback(() => setIsSidebarOpen(false), []);

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
    isSidebarOpen,
    isEditing,
    closeSidebar,
    handleEditClick,
    handleConfirm,
    handleCancel,
  };
}
