import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import Sidebar from '@/components/sidebar';
import HamburgerIcon from '@/assets/hamburger.svg';
import AlchemireCoven from '@/components/coven/covenBadge/alchemireCoven';
import EtheraCoven from '@/components/coven/covenBadge/etheraCoven';
import IsotarCoven from '@/components/coven/covenBadge/isotarCoven';
import ZireliaCoven from '@/components/coven/covenBadge/zireliaCoven';
import ProfileModal from '@/components/coven/profileModal';
import ProfilePopup from '@/components/coven/profilePopup';
import { useProfileState } from '@/hooks/useProfileState';
import type { StudentInfo } from '@/types/type';
import { useDataContext } from '@/hooks/useDataContext';

const Page = () => {
  const { isSidebarOpen, closeSidebar, openSidebar } = useProfileState();
  const { coven = '' } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<StudentInfo | null>(null);

  const { students } = useDataContext();

  const components: Record<string, React.ComponentType> = {
    alchemireCoven: AlchemireCoven,
    etheraCoven: EtheraCoven,
    isotarCoven: IsotarCoven,
    zireliaCoven: ZireliaCoven,
  };
  const validCovens = ['alchemireCoven', 'etheraCoven', 'isotarCoven', 'zireliaCoven'];

  useEffect(() => {
    if (coven && !validCovens.includes(coven)) {
      navigate('/coven');
      return;
    }
  }, [coven, navigate]);

  const Component = components[coven];

  const handleOpenModal = (user: StudentInfo): void => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  if (!students) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Desktop-only content */}
      <div className="force-mobile-hide relative hidden min-h-screen w-full bg-[url('frontend/src/assets/bg-2.svg')] bg-cover bg-center bg-no-repeat text-white xl:flex">
        {/* Background overlay for opacity */}
        <div className="absolute inset-0 z-0 bg-black/15"></div>

        {/* Sidebar */}
        <div className="sidebar-pr-80 p-4 pr-110 pl-10">
          {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />}
        </div>

        <main className="relative flex-1 p-8">
          {/* Main content area */}
          <div className="flex flex-[7] flex-col space-y-6 p-4 md:p-8">
            {/* Alpha component - centered at top */}
            <div className="flex items-center justify-center">
              <Component />
            </div>

            {/* Eden cards grid */}
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
              {students
                .filter((user) => user.house.toLowerCase() + 'Coven' === coven)
                .map((user) => (
                  <ProfileModal
                    key={user.studentId}
                    user={user}
                    onClick={() => handleOpenModal(user)}
                  />
                ))}
            </div>
          </div>
        </main>
        <ProfilePopup isOpen={isModalOpen} onClose={handleCloseModal} user={selectedUser} />
      </div>
      {/* Mobile content */}
      <div className="ipadpro-xl-ml force-mobile relative min-h-screen w-full bg-[url('frontend/src/assets/bg-1.svg')] bg-cover bg-[position:68%_center] bg-no-repeat text-white lg:pt-[4%] xl:hidden">
        {/* Background overlay for opacity */}
        <div className="absolute inset-0 z-0 bg-black/15"></div>
        {/* Mobile Header with Hamburger */}
        <div className="relative z-10 flex justify-start p-4 lg:hidden">
          <button
            onClick={openSidebar}
            className="rounded-lg p-2 transition-colors hover:bg-white/10"
            aria-label="Open menu"
          >
            <img src={HamburgerIcon} alt="Menu" className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Sidebar */}
        {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />}
        {/* Mobile Main Content */}
        <main className="relative z-10 -mt-3 flex flex-col px-8 pb-6">
          <div className="flex flex-[7] flex-col space-y-6 p-4 md:p-8">
            {/* Alpha component - centered at top */}
            <div className="flex items-center justify-center">
              <Component />
            </div>

            {/* Eden cards grid */}
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
              {students
                .filter((user) => user.house.toLowerCase() + 'Coven' === coven)
                .map((user) => (
                  <ProfileModal
                    key={user.studentId}
                    user={user}
                    onClick={() => handleOpenModal(user)}
                  />
                ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Page;
