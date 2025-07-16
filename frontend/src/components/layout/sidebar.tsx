import {type ReactNode } from 'react';
import Sidebar from '@/components/sidebar';
import { useProfileState } from '@/hooks/useProfileState';

interface LayoutProps {
  children: ReactNode;
}

export default function SidebarLayout({ children }: LayoutProps) {
  const { isSidebarOpen, closeSidebar } = useProfileState();

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}