const LoginSuccess = () => {
  return (
    <div className="flex flex-row items-center space-x-2 rounded-lg border border-white/10 bg-gray-900/50 p-6 shadow-lg backdrop-blur-lg md:space-x-4 md:px-6">
      <img src="/assets/little-star.png" alt="little-star" className="h-5 w-5" />
      <p className="text-md font-mono whitespace-nowrap text-white md:text-xl">Login succeeded</p>
      <img src="/assets/little-star.png" alt="little-star" className="h-5 w-5" />
    </div>
  );
};

export default LoginSuccess;
