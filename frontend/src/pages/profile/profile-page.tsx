import Picture from '@/components/profile/picture';
import isotarImage from '@/assets/img-placeholder.png';
import placeholderImage from '@/assets/place.png';
import Sidebar from '@/components/sidebar';
import ProfileForm from '@/components/profile/profile-form';
import { useProfileState } from '@/hooks/useProfileState';
import HamburgerIcon from '@/assets/hamburger.svg';

function Page() {
  const {
    isSidebarOpen,
    isEditing,
    closeSidebar,
    openSidebar,
    handleEditClick,
    handleConfirm,
    handleCancel,
  } = useProfileState();

  return (
    <>
      {/* Desktop-only content */}
      <div className="hidden min-h-screen w-full bg-[url('frontend/src/assets/bg-1.svg')] bg-cover bg-center bg-no-repeat text-white lg:flex relative">
        {/* Background overlay for opacity */}
        <div className="absolute inset-0 z-0 bg-black/15"></div>
        
        {/* Sidebar */}
        <div className="pr-50 pl-10 relative z-10">
          {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />}
        </div>

        {/* Main Content */}
        <main className="grid flex-1 grid-cols-12 gap-8 p-17 pl-25 relative z-10">
          {/* Picture Upload Section */}
          <div className="col-span-4 flex items-start justify-center pl-65">
            <Picture src={isotarImage} alt="Profile" className="h-140 w-220 rounded-3xl" />
          </div>

          {/* Form Section */}
          <ProfileForm
            isEditing={isEditing}
            onEditClick={handleEditClick}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
        </main>
      </div>

      {/* Mobile content */}
      <div className="relative min-h-screen w-full bg-[url('frontend/src/assets/bg-1.svg')] bg-cover bg-[position:68%_center] bg-no-repeat text-white lg:hidden">
        {/* Background overlay for opacity */}
        <div className="absolute inset-0 z-0 bg-black/30"></div>

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
        <main className="relative z-10 -mt-3 flex flex-col px-8 pb-6">
          {/* Picture Section */}
          <div className="mt-8 mb-12 flex justify-center">
            <Picture src={placeholderImage} alt="Profile" className="h-64 w-48 rounded-3xl" />
          </div>

          {/* Form Section */}
          <div className="px-4">
            <ProfileForm
              isEditing={isEditing}
              onEditClick={handleEditClick}
              onConfirm={handleConfirm}
              onCancel={handleCancel}
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default Page;
