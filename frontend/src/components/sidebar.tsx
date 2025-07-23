import { useState, useCallback, useMemo } from 'react';
import { NavLink } from 'react-router';
import { useAuthContext } from '@/hooks/useAuthContext';

interface MenuItem {
  name: string;
  icon: string;
  route: string;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (page: string) => void;
  onLogout?: () => void;
}

function Sidebar({ isOpen, onClose, onNavigate, onLogout }: SidebarProps) {
  const { logout } = useAuthContext();
  const [active, setActive] = useState('Profile');

  const menuItems: MenuItem[] = useMemo(
    () => [
      { name: 'Profile', icon: '/assets/profile-icon.png', route: '/profile' },
      { name: 'Coven', icon: '/assets/covan-icon.svg', route: '/coven/' },
      { name: 'Hints', icon: '/assets/help-icon.svg', route: '/hints' },
    ],
    [],
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
              className="glass-glow fixed top-14 bottom-14 left-14 z-50 flex w-70 flex-col rounded-4xl"
              role="navigation"
            >
              {/* Collapse button */}
              {/* Main content */}
              <div className="flex flex-1 flex-col">
                <div className="p-4">
                  <p className="mt-2 mb-2 ml-7 font-[Inter] text-xs text-white/32">MENU</p>
                  <nav className="mr-2 ml-2 flex flex-col gap-4" role="menu">
                    {menuItems.map((item) => (
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
                        <span className="shadow-white-glow font-[Inter] text-sm">{item.name}</span>
                      </NavLink>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Logout button  */}
              <div className="mt-auto p-6">
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
          <aside
            className="sidebar-dark-glow fixed top-4 left-16 z-50 flex max-w-70 flex-col rounded-2xl"
            role="navigation"
          >
            {/* Close button */}
            <button
              className="absolute top-12 -right-3 h-6 w-6 transition-all duration-200 hover:scale-110 focus:ring-2 focus:ring-white/50 focus:outline-none active:scale-95"
              onClick={handleCollapse}
            >
              <img src="/assets/back-arrow.svg" alt="" className="h-6 w-6" role="presentation" />
            </button>

            {/* Main content */}
            <div className="flex flex-1 flex-col">
              <div className="p-4">
                <p className="mt-2 mb-2 ml-2 font-[Inter] text-xs text-white/32">MENU</p>
                <nav className="mr-2 ml-2 flex flex-col gap-4" role="menu">
                  {menuItems.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.route}
                      onClick={() => handleMenuClick(item.name)}
                      className={({ isActive }) =>
                        `flex min-h-[58px] items-center gap-4 rounded-xl py-2 pl-4 text-left transition-all duration-200 focus:ring-2 focus:ring-white/50 focus:outline-none ${
                          isActive ? 'selected-glow text-white' : 'text-white/60 hover:bg-white/10'
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
                      <span className="shadow-white-glow font-[Inter] text-sm">{item.name}</span>
                    </NavLink>
                  ))}
                </nav>
              </div>
            </div>

            {/* Logout button  */}
            <div className="mt-auto p-6 pt-0">
              <button
                onClick={handleLogout}
                className="mb-1 flex min-h-[42px] w-full items-center justify-between rounded-xl bg-[rgba(140,58,170,1)] px-6 py-3 font-medium text-white transition-all duration-200 hover:brightness-110 focus:ring-2 focus:ring-purple-400 focus:outline-none active:scale-95 active:brightness-90"
              >
                <span className="shadow-white-glow font-[Inter] text-sm">Logout</span>
                <img
                  src="/assets/logout-icon.png"
                  alt=""
                  className="ml-2 h-5 w-5"
                  role="presentation"
                />
              </button>
            </div>
          </aside>
        )}
      </div>
    </>
  );
}

export default Sidebar;
