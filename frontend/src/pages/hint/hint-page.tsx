import Sidebar from '@/components/sidebar';
import { useProfileState } from '@/hooks/useProfileState';
import HintCard from '@/components/hint/hint-card';
import Guess from '@/components/hint/guess';
import HamburgerIcon from '@/assets/hamburger.svg';

function Page() {
  const { isSidebarOpen, isEditing, closeSidebar, openSidebar, handleEditClick, handleConfirm, handleCancel } =
    useProfileState();

  return (
    <>
      {/* Desktop-only content */}
      <div className="hidden lg:flex min-h-screen w-full bg-[url('frontend/src/assets/bg-2-old.png')] bg-cover bg-center bg-no-repeat text-white">
        {/* Sidebar */}
        <div className="p-4 pl-10 pr-110">
          {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />}
        </div>
        
        {/* Main Content */}
        <main className="flex-1 relative p-8">
          {/* First Hint Card - Top Left */}
          <div className="absolute top-[11%] left-[2%] w-80 ">
            <HintCard
              title=""
              description=""
              stage="shown"
            />
          </div>
          
          {/* Second Hint Card - Top Right */}
          <div className="absolute top-[11%] left-[34%] w-80 pl-40">
            <HintCard
              title=""
              description=""
              stage="shown"
            />
          </div>
          
          {/* Third Hint Card - Bottom Left */}
          <div className="absolute top-[38%] left-[2%] w-80 ">
            <HintCard
              title=""
              description=""
              stage="shown"
            />
          </div>
          
          {/* Guess Component - Below Third Card */}
          <div className="absolute top-[70%] left-[2%] w-200">
            <Guess />
          </div>
        </main>
      </div>

      {/* Mobile content */}
      <div className="relative min-h-screen w-full bg-[url('frontend/src/assets/bg-2-old.png')] bg-cover bg-center bg-no-repeat text-white lg:hidden">
        {/* Background overlay for opacity */}
        <div className="absolute inset-0 z-0 bg-black/6"></div>

        {/* Mobile Header with Hamburger */}
        <div className="relative z-10 flex justify-start p-4">
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
        <main className="relative z-10 flex flex-col px-4 pb-6 space-y-4 min-h-screen">
          {/* Hint Cards in single column */}
          <div className="space-y-7 mt-9 mb-16 flex flex-col items-center ">
            <HintCard
              title=""
              description=""
              stage="shown"
            />
            <HintCard
              title=""
              description=""
              stage="shown"
            />
            <HintCard
              title=""
              description=""
              stage="shown"
            />
          </div>

          {/* Guess Component */}
          <div className="-mt-6">
            <Guess />
          </div>
        </main>
      </div>
    </>
  );
}

export default Page;
