import Sidebar from '@/components/sidebar';
import { useProfileState } from '@/hooks/useProfileState';
import HintCard from '@/components/hint/hint-card';
import Guess from '@/components/hint/guess';

function Page() {
  const { isSidebarOpen, isEditing, closeSidebar, handleEditClick, handleConfirm, handleCancel } =
    useProfileState();
  return (
    <div className="flex min-h-screen w-full bg-[url('frontend/src/assets/bg-2.png')] bg-cover bg-center bg-no-repeat text-white">
      {/* Sidebar */}
      <div className=" p-4 pl-10 pr-110 ">
        {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />}
      </div>
      
      {/* Main Content */}
      <main className="flex-1 relative p-8">
        {/* First Hint Card - Top Left */}
        <div className="absolute top-[11%] left-[5%] w-80 ">
          <HintCard
            title=""
            description=""
            stage="shown"
          />
        </div>
        
        {/* Second Hint Card - Top Right */}
        <div className="absolute top-[11%] left-[35%] w-80 pl-40">
          <HintCard
            title=""
            description=""
            stage="shown"
          />
        </div>
        
        {/* Third Hint Card - Bottom Left */}
        <div className="absolute top-[35%] left-[5%] w-80 ">
          <HintCard
            title=""
            description=""
            stage="shown"
          />
        </div>
        
        {/* Guess Component - Below Third Card */}
        <div className="absolute top-[65%] left-[5%] w-200">
          <Guess />
        </div>
      </main>
    </div>
  );
}

export default Page;
