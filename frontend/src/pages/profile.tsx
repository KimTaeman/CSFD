import { useState } from 'react';
import Sidebar from '@/components/sidebar';

function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat md:bg-[url('/src/assets/bg-2.png')]">
      <div className="ml-10">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      </div>
    </div>
  );
}

export default Page;
