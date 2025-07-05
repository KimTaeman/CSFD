import { useState } from "react";
import Picture from "@/components/picture";
import isotarImage from "@/assets/img-placeholder.png";
import Sidebar from "@/components/sidebar";
import ProfileForm from "@/components/ProfileForm";

function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen w-full bg-[url('frontend/src/assets/bg-1.svg')] bg-cover bg-center bg-no-repeat text-white flex">
      {/* Sidebar */}
      <div className="pl-10 pr-50">
      {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />}
      </div>

      {/* Main Content */}
      <main className="flex-1 p-17 grid grid-cols-12 gap-8 pl-25">
        {/* Picture Upload Section */}
        <div className="col-span-4 flex justify-center items-start pl-65">
          <Picture src={isotarImage} alt="Profile" className="rounded-3xl w-220 h-140 " />
        </div>

        {/* Form Section */}
        <ProfileForm />
      </main>
    </div>
  );
}

export default Page;
