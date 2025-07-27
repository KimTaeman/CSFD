function LoadingLayout() {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-label="Loading content"
      className="flex min-h-svh flex-col items-center justify-center gap-8 bg-gradient-to-br from-[#0d001f] via-[#1a0033] to-[#0d001f] px-4"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-float-slow absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-purple-400/50"></div>
        <div className="animate-float-medium absolute top-3/4 right-1/4 h-1 w-1 rounded-full bg-blue-400/20"></div>
        <div className="animate-float-fast absolute top-1/2 left-3/4 h-1.5 w-1.5 rounded-full bg-indigo-400/40"></div>
      </div>

      <div className="relative w-full max-w-md">
        <div className="relative rounded-2xl p-10">
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="relative w-full max-w-48">
              <div className="absolute inset-0 h-full w-full rounded-full border-2 border-gray-600/30"></div>
              <div className="animate-spin-slow absolute inset-0 h-full w-full rounded-full border-2 border-transparent border-t-purple-400 border-r-purple-400"></div>

              <div className="relative p-6">
                <img
                  src="/assets/logo.png"
                  className="animate-logo-glow-shadow pointer-events-none w-full select-none"
                  alt="CSFD 2025 logo"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingLayout;
