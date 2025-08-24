const LoginSuccess = () => {
  return (
    <div className="flex flex-row items-center space-x-2 rounded-3xl border border-white/30 bg-white/10 px-3 py-3 backdrop-blur-lg md:space-x-4 md:px-6">
      <img src="/assets/little-star.png" alt="little-star" className="h-5 w-5" />
      <p className="font-inter text-md whitespace-nowrap text-white md:text-2xl">Login succeeded</p>
    </div>
  );
};

export default LoginSuccess;
