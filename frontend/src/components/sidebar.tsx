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
            <p className="text-xs mb-4 text-white/32 font-inter ml-5 mt-2">MENU</p>
            <div className="flex flex-col gap-4 ml-1">
              {menuItems.map((item, index) => (
                
                // Check index.css for the "selected-glow" which is copied from the figma design with some modifications cause it was not looking the same as the design
                // made it so that it is close enough 
                <button
                  key={index}
                  onClick={() => setActive(item.name)}
                  className={`
                  flex items-center gap-4 px-4 py-2 rounded-xl text-left transition-all duration-200
                  ${active === item.name
                    ? "selected-glow text-white"
                    : "hover:bg-white/10 text-white/60"
                  }
                `}
                >
                  <img 
                    src={item.icon} 
                    alt={item.name} 
                    className="w-6 h-6 shadow-white-glow" 
                  />
                  {/* font Inter is in index.html */}
                  <p className="text-sm font-[Inter] shadow-white-glow">
                    {item.name}
                  </p>
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
            className="w-full flex items-center justify-between px-4 py-3 mb-1 rounded-lg text-white font-medium min-h-[42px] transition-all duration-200 hover:brightness-110 active:scale-95 active:brightness-90"
            style={{ backgroundColor: 'rgba(140, 58, 170, 1)' }}
          >
            <p className="text-sm font-[Inter] shadow-white-glow">Logout</p>
            <img src={LogoutIcon} alt="Logout" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
