import React, { useState } from 'react';
import Sidebar from '@/components/sidebar';

function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat md:bg-[url('/src/assets/bg-2.png')]">
      {/* Button to open sidebar */}

      {/* <button 
        onClick={openSidebar}
        className="m-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Open Sidebar
      </button> */}

      {/* Sidebar component */}

      <div className="ml-10">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}>
          <div className="p-4">
            <p className="mb-4 text-sm text-white/32">Menu</p>
            <p className="mb-4 text-sm text-white/32">Profile</p>
          </div>
        </Sidebar>
      </div>
    </div>
  );
}

export default Page;
