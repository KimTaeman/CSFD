import { useState } from 'react';
import ProfileIcon from '@/assets/profile-icon.png';
import CovanIcon from '@/assets/covan-icon.svg';
import HelpIcon from '@/assets/help-icon.svg';
import LogoutIcon from '@/assets/logout-icon.png';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [active, setActive] = useState('Profile');

  const menuItems = [
    { name: 'Profile', icon: ProfileIcon },
    { name: 'Coven', icon: CovanIcon },
    { name: 'Hints', icon: HelpIcon },
  ];

  if (!isOpen) return null;

  const handleLogout = () => {
    /**
     * @TODO Implement logout logic
     */
    console.log('Logout clicked');
  };

  return (
    <>
      {/* Backdrop */}
      <div className="bg-opacity-50 fixed inset-0 z-40 w-30" onClick={onClose} />

      {/* Sidebar */}
      {/* The { background: } part is copied from the figma design. Tailwind doesn't support angled gradients */}
      <div
        className="fixed top-10 bottom-10 z-50 w-55 rounded-4xl"
        style={{
          background:
            'linear-gradient(108.46deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)',
        }}
      >
        {/* Main content */}
        <div className="flex-1">
          <div className="p-4">
            <p className="font-inter mt-2 mb-4 ml-5 text-xs text-white/32">MENU</p>
            <div className="ml-1 flex flex-col gap-4">
              {menuItems.map((item, index) => (
                // Check index.css for the "selected-glow" which is copied from the figma design with some modifications cause it was not looking the same as the design
                // made it so that it is close enough
                <button
                  key={index}
                  onClick={() => setActive(item.name)}
                  className={`flex items-center gap-4 rounded-xl px-4 py-2 text-left transition-all duration-200 ${
                    active === item.name
                      ? 'selected-glow text-white'
                      : 'text-white/60 hover:bg-white/10'
                  } `}
                >
                  <img src={item.icon} alt={item.name} className="shadow-white-glow h-6 w-6" />
                  {/* font Inter is in index.html */}
                  <p className="shadow-white-glow font-[Inter] text-sm">{item.name}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Logout button at bottom */}
        {/* Check index.css for the shadow-white-glow */}
        <div className="p-4">
          <button
            onClick={handleLogout}
            className="mb-1 flex min-h-[42px] w-full items-center justify-between rounded-lg px-4 py-3 font-medium text-white transition-all duration-200 hover:brightness-110 active:scale-95 active:brightness-90"
            style={{ backgroundColor: 'rgba(140, 58, 170, 1)' }}
          >
            <p className="shadow-white-glow font-[Inter] text-sm">Logout</p>
            <img src={LogoutIcon} alt="Logout" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
