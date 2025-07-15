import Sidebar from '@/components/sidebar';
import HamburgerIcon from '@/assets/hamburger.svg';
import { useNavigate } from 'react-router';
import AlchemireCoven from '@/components/coven/covenBadge/alchemireCoven';
import EtheraCoven from '@/components/coven/covenBadge/etheraCoven';
import IsotarCoven from '@/components/coven/covenBadge/isotarCoven';
import ZireliaCoven from '@/components/coven/covenBadge/zireliaCoven';
import DetailCoven from '@/components/coven/covenBadge/detailCoven';
import { useProfileState } from '@/hooks/useProfileState';

const Page = () => {
  const { isSidebarOpen, closeSidebar, openSidebar } = useProfileState();
  const navigate = useNavigate();

  const handleCovenClick = (covenName: string): void => {
    navigate(`/coven/${covenName}`);
  };
  return (
    <>
      {/* Desktop-only content */}
      <div className="force-mobile-hide relative hidden min-h-screen w-full bg-[url('frontend/src/assets/bg-2.svg')] bg-cover bg-center bg-no-repeat text-white xl:flex">
        {/* Sidebar space - hidden on md and below */}
        {/* Sidebar */}
        <div className="sidebar-pr-80 p-4 pr-110 pl-10">
          {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />}
        </div>

        {/* Main content */}
        <main className="relative flex-1 p-50">
          <div className="mx-auto max-w-4xl">
            {/* Character cards grid - 2x2 on larger screens, single column on mobile */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:mb-8">
              <AlchemireCoven onClick={() => handleCovenClick('alchemireCoven')} />
              <EtheraCoven onClick={() => handleCovenClick('etheraCoven')} />
              <ZireliaCoven onClick={() => handleCovenClick('zireliaCoven')} />
              <IsotarCoven onClick={() => handleCovenClick('isotarCoven')} />
            </div>

            {/* Detail section */}
            <div className="w-full">
              <DetailCoven />
            </div>
          </div>
        </main>
      </div>

      {/* Mobile content */}
      <div className="ipadpro-xl-ml force-mobile relative min-h-screen w-full bg-[url('frontend/src/assets/bg-1.svg')] bg-cover bg-[position:68%_center] bg-no-repeat text-white lg:pt-[4%] xl:hidden">
        <div className="absolute inset-0 z-0 bg-black/6"></div>
        <div className="relative z-10 flex justify-start p-4">
          <button
            onClick={openSidebar}
            className="rounded-lg p-2 transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Open menu"
          >
            <img src={HamburgerIcon} alt="Menu" className="h-6 w-6" />
          </button>
        </div>
        {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />}
        <main className="relative z-10 flex min-h-screen flex-col space-y-4 px-4 pb-6 lg:pl-[38%]">
          <div className="mx-auto max-w-4xl">
            {/* Character cards grid - 2x2 on larger screens, single column on mobile */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:mb-8">
              <AlchemireCoven onClick={() => handleCovenClick('alchemireCoven')} />
              <EtheraCoven onClick={() => handleCovenClick('etheraCoven')} />
              <ZireliaCoven onClick={() => handleCovenClick('zireliaCoven')} />
              <IsotarCoven onClick={() => handleCovenClick('isotarCoven')} />
            </div>

            {/* Detail section */}
            <div className="w-full">
              <DetailCoven />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Page;
