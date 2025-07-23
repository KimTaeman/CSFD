import Sidebar from '@/components/sidebar';
import { useProfileState } from '@/hooks/useProfileState';
import React from 'react';
import { useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

const MainLayout = ({ children, showSidebar = true }: MainLayoutProps) => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useProfileState();
  const location = useLocation(); // Get current route

  // add your custome tailwind class for pages here
  let ipadProPadding = '';
  if (location.pathname.includes('/profile/profile-page')) {
    ipadProPadding = 'ipadpro-pl-profile';
  } else if (location.pathname.includes('/hint/hint-page')) {
    ipadProPadding = 'ipadpro-pl-hint';
  }

  return (
    <div className="relative min-h-screen bg-[url('/assets/bg-magic.png')] bg-cover bg-fixed bg-top bg-no-repeat text-white">
      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-black/15" />
      {/* Layout */}
      <div className="relative z-10 flex min-h-screen">
        {/* Sidebar (Desktop) */}
        {showSidebar && (
          <aside className="hidden lg:flex lg:min-h-screen lg:w-sm lg:flex-col lg:px-8 lg:pt-8">
            <Sidebar isOpen={true} onClose={closeSidebar} />
          </aside>
        )}
        {/* Hamburger (Mobile) */}
        {showSidebar && (
          <div className="absolute top-4 left-4 z-20 lg:hidden xl:hidden">
            <button
              onClick={openSidebar}
              className="rounded-lg p-2 transition-colors hover:bg-white/10"
              aria-label="Open menu"
            >
              <img src="/assets/hamburger.svg" alt="Menu" className="h-6 w-6" />
            </button>
          </div>
        )}
        {/* Mobile Sidebar */}
        {showSidebar && isSidebarOpen && (
          <div className="fixed inset-0 z-30 lg:hidden xl:hidden">
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
          </div>
        )}
        {/* Main Content */}
        <main
          className={`flex flex-1 flex-col items-center justify-start py-20 xl:px-12 xl:py-15 xl:pr-20 ${ipadProPadding}`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
