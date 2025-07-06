import Picture from "@/components/picture";
import isotarImage from "@/assets/img-placeholder.png";
import Sidebar from "@/components/sidebar";
import ProfileForm from "@/components/ProfileForm";
import { useProfileState } from "@/hooks/useProfileState";

function Page() {
  const {
    isSidebarOpen,
    isEditing,
    closeSidebar,
    handleEditClick,
    handleConfirm,
    handleCancel
  } = useProfileState();

  return (
    <div className="flex min-h-screen w-full bg-[url('frontend/src/assets/bg-1.svg')] bg-cover bg-center bg-no-repeat text-white">
      {/* Sidebar */}
      <div className="pl-10 pr-50">
        {isSidebarOpen && (
          <Sidebar 
            isOpen={isSidebarOpen} 
            onClose={closeSidebar}
          />
        )}
      </div>

      {/* Main Content */}
      <main className="grid flex-1 grid-cols-12 gap-8 p-17 pl-25">
        {/* Picture Upload Section */}
        <div className="col-span-4 flex justify-center items-start pl-65">
          <Picture 
            src={isotarImage} 
            alt="Profile" 
            className="rounded-3xl w-220 h-140"
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
  );
}

export default Page;
