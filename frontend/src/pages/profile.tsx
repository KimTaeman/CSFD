import { useState } from 'react';
import Picture from '@/components/picture';
import isotarImage from '@/assets/img-placeholder.png';
import Sidebar from '@/components/sidebar';
import ProfileForm from '@/components/ProfileForm';

function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex min-h-screen w-full bg-[url('frontend/src/assets/bg-1.svg')] bg-cover bg-center bg-no-repeat text-white">
      {/* Sidebar */}
      <div className="pr-50 pl-10">
        {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />}
      </div>

      {/* Main Content */}
      <main className="grid flex-1 grid-cols-12 gap-8 p-17 pl-25">
        {/* Picture Upload Section */}
        <div className="col-span-4 flex items-start justify-center pl-65">
          <Picture src={isotarImage} alt="Profile" className="h-140 w-220 rounded-3xl" />
        </div>

        {/* Form Section */}
        <ProfileForm />
      </main>
    </div>
  );
}

export default Page;
