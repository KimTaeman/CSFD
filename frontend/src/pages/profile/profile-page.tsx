import Picture from '@/components/profile/picture';
import isotarImage from '@/assets/img-placeholder.png';
import placeholderImage from '@/assets/place.png';
import Sidebar from '@/components/sidebar';
import ProfileForm from '@/components/profile/profile-form';
import { useProfileState } from '@/hooks/useProfileState';
import HamburgerIcon from '@/assets/hamburger.svg';
import ProfilePicUpload from '@/components/profile/ProfilePicUpload';
import { useProfilePicUpload } from '@/hooks/useProfilePicUpload';
import { useEffect, useState } from 'react';

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

  // Profile picture state
  const [profilePic, setProfilePic] = useState<string | null>(null);

  // Profile pic upload modal state/logic
  const picUpload = useProfilePicUpload();

  // Track hover
  const [hovered, setHovered] = useState(false);

  // Load profilePic from localStorage on mount
  useEffect(() => {
    const storedPic = localStorage.getItem('profilePic');
    if (storedPic) setProfilePic(storedPic);
  }, []);

  // Save profilePic to localStorage whenever it changes
  useEffect(() => {
    if (profilePic) {
      localStorage.setItem('profilePic', profilePic);
    }
  }, [profilePic]);

  return (
    <>
      {/* Desktop-only content */}
      <div className="force-mobile-hide relative hidden min-h-screen w-full bg-[url('frontend/src/assets/bg-1.svg')] bg-cover bg-center bg-no-repeat text-white xl:flex">
        {/* Background overlay for opacity */}
        <div className="absolute inset-0 z-0 bg-black/15"></div>

        {/* Sidebar */}
        <div className="relative z-10 pr-50 pl-10">
          {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />}
        </div>

        {/* Main Content */}
        <main className="relative z-10 grid flex-1 grid-cols-12 gap-8 p-17 pl-25">
          {/* Picture Upload Section */}
          <div className="col-span-4 flex items-start justify-center pl-65">
            <Picture
              src={profilePic || isotarImage}
              alt="Profile"
              className="h-140 w-220 rounded-3xl"
              darken={hovered}
              overlayText={hovered ? 'Change' : undefined}
              onClick={picUpload.openFileDialog} 
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
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
          {/* Picture Section */}
          <div className="mt-8 mb-12 flex justify-center lg:ml-[18%]">
            <Picture
              src={profilePic || placeholderImage}
              alt="Profile"
              className="h-80 w-60 rounded-3xl"
              darken={hovered}
              overlayText={hovered ? 'Change' : undefined}
              onClick={picUpload.openFileDialog}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
          </div>
          {/* Form Section */}
          <div className="px-2 lg:ml-[5%]">
            <ProfileForm
              isEditing={isEditing}
              onEditClick={handleEditClick}
              onConfirm={handleConfirm}
              onCancel={handleCancel}
            />
          </div>
        </main>
      </div>

      {/* Hidden file input for profile pic upload */}
      <input
        ref={picUpload.fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={picUpload.onFileChange}
      />

      {/* ProfilePicUpload modal */}
      <ProfilePicUpload
        open={picUpload.isOpen}
        onClose={picUpload.close}
        onSave={(img) => {
          setProfilePic(img);
          picUpload.setImageSrc(null);
        }}
        imageSrc={picUpload.imageSrc}
        setImageSrc={picUpload.setImageSrc}
        crop={picUpload.crop}
        setCrop={picUpload.setCrop}
        zoom={picUpload.zoom}
        setZoom={picUpload.setZoom}
        fileInputRef={picUpload.fileInputRef}
        onFileChange={picUpload.onFileChange}
        handleCropComplete={picUpload.handleCropComplete}
        saveCroppedImage={picUpload.saveCroppedImage}
      />
    </>
  );
}

export default Page;
