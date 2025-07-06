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
    []
  );

  const handleMenuClick = useCallback(
    (itemName: string) => {
      setActive(itemName);
      onNavigate?.(itemName);
    },
    [onNavigate]
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
      <div
        className="bg-opacity-50 fixed inset-0 z-40 w-30"
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className="fixed top-14 bottom-14 left-14 z-50 w-70 rounded-4xl flex flex-col"
        style={{
          background:
            'linear-gradient(108.46deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)',
        }}
        role="navigation"
      >
        {/* Collapse button */}
        
        <button
          className="absolute -right-3 top-18 w-6 h-6 transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50"
          onClick={handleCollapse}
        >
          <img src={BackArrow} alt="" className="w-6 h-6" role="presentation" />
        </button>

        {/* Main content */}
        <div className="flex flex-1 flex-col">
          <div className="p-4">
            <p className="text-xs mb-2 text-white/32 font-[Inter] ml-5 mt-2">
              MENU
            </p>
            <nav
              className="flex flex-col gap-4 ml-2 mr-2"
              role="menu"
            >
              {/*Check index.css for the "selected-glow" class which is copied from the figma design with some modifications */}
              {/* Font is Inter, which is imported in index.html, same as Poppins */}
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleMenuClick(item.name)}
                  className={`
                    flex items-center gap-4 px-6 py-2 rounded-xl text-left transition-all duration-200 min-h-[52px] focus:outline-none focus:ring-2 focus:ring-white/50
                    ${
                      active === item.name
                        ? 'selected-glow text-white'
                        : 'hover:bg-white/10 text-white/60'
                    }
                  `}
                  role="menuitem"
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="w-6 h-6 shadow-white-glow"
                    role="presentation"
                  />
                  <span className="text-sm font-[Inter] shadow-white-glow">
                    {item.name}
                  </span>
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
            className="w-full flex items-center justify-between px-6 py-3 mb-1 rounded-xl text-white font-medium min-h-[42px] transition-all duration-200 hover:brightness-110 active:scale-95 active:brightness-90 focus:outline-none focus:ring-2 focus:ring-purple-400"
            style={{ backgroundColor: 'rgba(140, 58, 170, 1)' }}
          >
            <span className="text-sm font-[Inter] shadow-white-glow">
              Logout
            </span>
            <img src={LogoutIcon} alt="" className="w-5 h-5" role="presentation" />
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
