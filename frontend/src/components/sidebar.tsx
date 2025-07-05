import { useState } from 'react';
import ProfileIcon from '@/assets/profile-icon.png';
import CovanIcon from '@/assets/covan-icon.svg';
import HelpIcon from '@/assets/help-icon.svg';
import LogoutIcon from '@/assets/logout-icon.png';
import BackArrow from '@/assets/back-arrow.svg';

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
      {/* The { background: } part is copied from the figma design. cause Tailwind doesn't support angled gradients */}
      <div
        className="fixed top-14 bottom-14 left-14 z-50 w-70 rounded-4xl flex flex-col"
        style={{
          background:
            'linear-gradient(108.46deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)',
        }}
      >
        {/* Collapse button */}
        <button
          className="absolute -right-3 top-18 w-6 h-6 transition-all duration-200 hover:scale-110 active:scale-95"
          onClick={() => {
            /**
             * @TODO Implement collapse functionality
             */
            console.log('Collapse clicked');
          }}
        >
          <img src={BackArrow} alt="Collapse" className="w-6 h-6" />
        </button>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          <div className="p-4">
            <p className="text-xs mb-2 text-white/32 font-[Inter] ml-5 mt-2">MENU</p>
            <div className="flex flex-col gap-4 ml-2 mr-2">
              {menuItems.map((item, index) => (
                
                // Check index.css for the "selected-glow" which is copied from the figma design with some modifications cause it was not looking the same as the design
                // made it so that it is close enough 

                // font is Inter, which is imported in index.html
                <button
                  key={index}
                  onClick={() => setActive(item.name)}
                  className={`
                  flex items-center gap-4 px-6 py-2 rounded-xl text-left transition-all duration-200 min-h-[52px]
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
        <div className="mt-auto p-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-between px-6 py-3 mb-1 rounded-xl text-white font-medium min-h-[42px] transition-all duration-200 hover:brightness-110 active:scale-95 active:brightness-90"
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
