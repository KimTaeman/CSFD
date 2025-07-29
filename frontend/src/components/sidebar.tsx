import { useCallback, useMemo, useState } from 'react';
import { NavLink } from 'react-router';
import { useAuthContext } from '@/hooks/useAuthContext';
import MusicControls from './music-controls';

interface MenuItem {
  name: string;
  icon: string;
  route: string;
  condition?: boolean;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (page: string) => void;
  onLogout?: () => void;
}

function Sidebar({ isOpen, onClose, onNavigate, onLogout }: SidebarProps) {
  const { user, logout, isLoading: isAuthLoading } = useAuthContext();
  const [active, setActive] = useState('Profile');

  const menuItems: MenuItem[] = useMemo(
    () => [
      {
        name: 'Profile',
        icon: '/assets/profile-icon.png',
        route: '/profile',
        condition: !!user?.studentId,
      },
      { name: 'Covens', icon: '/assets/covan-icon.svg', route: '/coven' },
      {
        name: 'Hints',
        icon: '/assets/help-icon.svg',
        route: '/hints',
        condition: !!user?.studentId,
      },
    ],
    [user],
  );

  const handleMenuClick = useCallback(
    (itemName: string) => {
      setActive(itemName);
      onNavigate?.(itemName);
      // Only close sidebar on mobile
      if (window.innerWidth < 768) {
        onClose();
      }
    },
    [onNavigate, onClose],
  );

  const handleLogout = async () => {
    await logout();
  };

  const handleCollapse = useCallback(() => {
    onClose();
  }, [onClose]);

  const shouldShowDesktop = true;
  const shouldShowMobile = isOpen;

  if (isAuthLoading) {
    return null;
  }

  return (
    <>
      {/* Desktop sidebar  */}
      <div className="hidden lg:block">
        {shouldShowDesktop && (
          <>
            {/* Backdrop */}
            <div className="bg-opacity-50 fixed inset-0 z-40 w-30" onClick={onClose} />

            {/* Sidebar */}
            <aside
              className="fixed top-14 bottom-14 left-14 z-50 flex w-70 flex-col rounded-4xl"
              role="navigation"
            >
              {/* Collapse button */}
              {/* Main content */}
              <div className="flex flex-1 flex-col">
                <div className="p-4">
                  <p className="mt-2 mb-4 ml-7 font-[Inter] text-xs text-white/32">MENU</p>
                  <nav className="mr-2 ml-2 flex flex-col gap-4" role="menu">
                    {menuItems.map((item) => {
                      if (typeof item.condition === 'boolean' && !item.condition) return;

                      return (
                        <NavLink
                          key={item.name}
                          to={item.route}
                          onClick={() => handleMenuClick(item.name)}
                          className={({ isActive }) =>
                            `flex min-h-[58px] items-center gap-4 rounded-xl px-6 py-2 text-left transition-all duration-200 focus:ring-2 focus:ring-white/50 focus:outline-none ${
                              isActive
                                ? 'selected-glow text-white'
                                : 'text-white/60 hover:bg-white/10'
                            }`
                          }
                          role="menuitem"
                        >
                          <img
                            src={item.icon}
                            alt=""
                            className="shadow-white-glow h-6 w-6 opacity-70"
                            role="presentation"
                          />
                          <span className="shadow-white-glow font-[Inter] text-sm">
                            {item.name}
                          </span>
                        </NavLink>
                      );
                    })}
                  </nav>
                </div>
              </div>

              {/* Logout button  */}
              <div className="mt-auto p-6">
                <MusicControls />
                <button
                  onClick={handleLogout}
                  className="mb-1 flex min-h-[42px] w-full items-center justify-between rounded-xl bg-[rgba(140,58,170,1)] px-6 py-3 font-medium text-white transition-all duration-200 hover:brightness-110 focus:ring-2 focus:ring-purple-400 focus:outline-none active:scale-95 active:brightness-90"
                >
                  <span className="shadow-white-glow font-[Inter] text-sm">Logout</span>
                  <img
                    src="/assets/logout-icon.png"
                    alt=""
                    className="h-5 w-5"
                    role="presentation"
                  />
                </button>
              </div>
            </aside>
          </>
        )}
      </div>

      {/* Mobile sidebar */}
      <div className="lg:hidden">
        {shouldShowMobile && (
          <>
            {/* Mobile backdrop */}
            <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-lg" onClick={onClose} />

            <aside
              className="sidebar-dark-glow xs:left-4 xs:right-4 fixed top-4 right-2 left-2 z-[1000] flex max-h-[calc(100vh-2rem)] flex-col rounded-2xl sm:right-8 sm:left-8 lg:mx-auto lg:max-w-sm"
              role="navigation"
            >
              {/* Close button */}
              <button
                className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 transition-all duration-200 hover:scale-110 focus:ring-2 focus:ring-white/50 focus:outline-none active:scale-95"
                onClick={handleCollapse}
              >
                <img src="/assets/back-arrow.svg" alt="" className="h-5 w-5" role="presentation" />
              </button>

              {/* Main content */}
              <div className="flex flex-1 flex-col overflow-hidden">
                <div className="p-4 pt-12">
                  <p className="mt-2 mb-2 ml-2 font-[Inter] text-xs text-white/32">MENU</p>
                  <nav className="mr-2 ml-2 flex flex-col gap-3 sm:gap-4" role="menu">
                    {menuItems.map((item) => {
                      if (typeof item.condition === 'boolean' && !item.condition) return;

                      return (
                        <NavLink
                          key={item.name}
                          to={item.route}
                          onClick={() => handleMenuClick(item.name)}
                          className={({ isActive }) =>
                            `flex min-h-[50px] items-center gap-3 rounded-xl py-2 pr-2 pl-3 text-left transition-all duration-200 focus:ring-2 focus:ring-white/50 focus:outline-none sm:min-h-[58px] sm:gap-4 sm:pl-4 ${
                              isActive
                                ? 'selected-glow text-white'
                                : 'text-white/60 hover:bg-white/10'
                            }`
                          }
                          role="menuitem"
                        >
                          <img
                            src={item.icon}
                            alt=""
                            className="shadow-white-glow h-5 w-5 flex-shrink-0 opacity-70 sm:h-6 sm:w-6"
                            role="presentation"
                          />
                          <span className="shadow-white-glow truncate font-[Inter] text-sm">
                            {item.name}
                          </span>
                        </NavLink>
                      );
                    })}
                  </nav>
                </div>
              </div>

              {/* Logout button */}
              <div className="mt-auto p-4 pt-0">
                <div className="mb-4">
                  <MusicControls />
                </div>
                <button
                  onClick={handleLogout}
                  className="mb-1 flex min-h-[42px] w-full items-center justify-center rounded-xl bg-[rgba(140,58,170,1)] px-4 py-3 font-medium text-white transition-all duration-200 hover:brightness-110 focus:ring-2 focus:ring-purple-400 focus:outline-none active:scale-95 active:brightness-90 sm:justify-start sm:px-6"
                >
                  <img
                    src="/assets/logout-icon.png"
                    alt=""
                    className="h-5 w-5 sm:mr-2"
                    role="presentation"
                  />
                  <span className="shadow-white-glow hidden font-[Inter] text-sm sm:inline">
                    Logout
                  </span>
                </button>
              </div>
            </aside>
          </>
        )}
      </div>
    </>
  );
}

export default Sidebar;
