import { NavLink } from 'react-router';

function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-black/90">
      <h1 className="text-5xl font-bold text-white">CSFD 2025</h1>
      <p className="text-lg text-white">Welcome</p>

      <nav>
        <NavLink
          to="/profile/profile-page"
          className="mr-10 rounded bg-white/80 px-6 py-3 font-bold text-black hover:bg-white/60"
        >
          Go to Profile Page
        </NavLink>
        <NavLink
          to="/hint/hint-page"
          className="rounded bg-white/80 px-6 py-3 font-bold text-black hover:bg-white/60"
        >
          Go to Hint Page
        </NavLink>
      </nav>
    </div>
  );
}

export default Page;
