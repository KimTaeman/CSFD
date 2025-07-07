import { useState, useCallback, useMemo } from 'react';
import ProfileIcon from '@/assets/profile-icon.png';
import CovanIcon from '@/assets/covan-icon.svg';
import HelpIcon from '@/assets/help-icon.svg';
import LogoutIcon from '@/assets/logout-icon.png';
import BackArrow from '@/assets/back-arrow.svg';

interface MenuItem {
  name: string;
  icon: string;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (page: string) => void;
  onLogout?: () => void;
}

function Sidebar({ isOpen, onClose, onNavigate, onLogout }: SidebarProps) {
  const [active, setActive] = useState('Profile');

  const menuItems: MenuItem[] = useMemo(
    () => [
      { name: 'Profile', icon: ProfileIcon },
      { name: 'Coven', icon: CovanIcon },
      { name: 'Hints', icon: HelpIcon },
    ],
    [],
  );

  const handleMenuClick = useCallback(
    (itemName: string) => {
      setActive(itemName);
      onNavigate?.(itemName);
    },
    [onNavigate],
  );

  const handleLogout = useCallback(() => {
    onLogout?.() ?? console.log('Logout clicked');
  }, [onLogout]);

  const handleCollapse = useCallback(() => {
    console.log('Collapse clicked');
    /**
     * @TODO Implement collapse functionality
     */
  }, []);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="bg-opacity-50 fixed inset-0 z-40 w-30" onClick={onClose} />

      {/* Sidebar */}
      <aside
        className="fixed top-14 bottom-14 left-14 z-50 flex w-70 flex-col rounded-4xl"
        style={{
          background:
            'linear-gradient(108.46deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)',
        }}
        role="navigation"
      >
        {/* Collapse button */}

        <button
          className="absolute top-18 -right-3 h-6 w-6 transition-all duration-200 hover:scale-110 focus:ring-2 focus:ring-white/50 focus:outline-none active:scale-95"
          onClick={handleCollapse}
        >
          <img src={BackArrow} alt="" className="h-6 w-6" role="presentation" />
        </button>

        {/* Main content */}
        <div className="flex flex-1 flex-col">
          <div className="p-4">
            <p className="mt-2 mb-2 ml-5 font-[Inter] text-xs text-white/32">MENU</p>
            <nav className="mr-2 ml-2 flex flex-col gap-4" role="menu">
              {/*Check index.css for the "selected-glow" class which is copied from the figma design with some modifications */}
              {/* Font is Inter, which is imported in index.html, same as Poppins */}
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleMenuClick(item.name)}
                  className={`flex min-h-[52px] items-center gap-4 rounded-xl px-6 py-2 text-left transition-all duration-200 focus:ring-2 focus:ring-white/50 focus:outline-none ${
                    active === item.name
                      ? 'selected-glow text-white'
                      : 'text-white/60 hover:bg-white/10'
                  } `}
                  role="menuitem"
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="shadow-white-glow h-6 w-6"
                    role="presentation"
                  />
                  <span className="shadow-white-glow font-[Inter] text-sm">{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Logout button at bottom */}
        {/* Check index.css for the shadow-white-glow */}
        <div className="mt-auto p-6">
          <button
            onClick={handleLogout}
            className="mb-1 flex min-h-[42px] w-full items-center justify-between rounded-xl px-6 py-3 font-medium text-white transition-all duration-200 hover:brightness-110 focus:ring-2 focus:ring-purple-400 focus:outline-none active:scale-95 active:brightness-90"
            style={{ backgroundColor: 'rgba(140, 58, 170, 1)' }}
          >
            <span className="shadow-white-glow font-[Inter] text-sm">Logout</span>
            <img src={LogoutIcon} alt="" className="h-5 w-5" role="presentation" />
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
