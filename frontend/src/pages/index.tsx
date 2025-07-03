import { NavLink } from 'react-router';

function Page() {
  
  return (
    <div className="min-h-screen bg-black/90 flex flex-col items-center justify-center gap-8">
        <h1 className="text-5xl font-bold text-white">CSFD 2025</h1>
        <p className="text-lg text-white">Welcome</p>

      <nav>
        <NavLink 
          to="/test" 
          className="px-6 py-3 bg-white/80 text-black font-bold rounded hover:bg-white/60"
        >
          Go to Test Page
        </NavLink>
        
      </nav>
    </div>
  );
}

export default Page;
