import Sidebar from '@/components/sidebar';
import HamburgerIcon from '@/assets/hamburger.svg';
import { useProfileState } from '@/hooks/useProfileState';
import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

const MainLayout = ({ children, showSidebar = true }: MainLayoutProps) => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useProfileState();

  return (
    <div className="relative min-h-screen bg-[url('/src/assets/bg-1.svg')] bg-cover bg-center bg-no-repeat text-white">
      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-black/15" />
      {/* Layout */}
      <div className="relative z-10 flex min-h-screen">
        {/* Sidebar (Desktop) */}
        {showSidebar && (
          <aside className="hidden xl:flex xl:min-h-screen xl:w-sm xl:flex-col xl:px-8 xl:pt-8">
            <Sidebar isOpen={true} onClose={closeSidebar} />
          </aside>
        )}
        {/* Hamburger (Mobile) */}
        {showSidebar && (
          <div className="absolute top-4 left-4 z-20 xl:hidden">
            <button
              onClick={openSidebar}
              className="rounded-lg p-2 transition-colors hover:bg-white/10"
              aria-label="Open menu"
            >
              <img src={HamburgerIcon} alt="Menu" className="h-6 w-6" />
            </button>
          </div>
        )}
        {/* Mobile Sidebar */}
        {showSidebar && isSidebarOpen && (
          <div className="fixed inset-0 z-30 xl:hidden">
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
          </div>
        )}
        {/* Main Content */}
        <main className="flex flex-1 flex-col items-center justify-start px-4 py-20 xl:px-12 xl:py-12">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
