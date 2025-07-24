const LoginSuccess = () => {
  return (
    <div className="w-auto max-w-sm transform rounded-3xl border border-white/30 bg-white/10 backdrop-blur-lg">
      <div className="m-4 flex flex-row items-center space-x-4">
        <img src="/assets/little-star.png" alt="little-star" className="h-5 w-5" />
        <p className="font-inter text-effect text-[1.25rem] whitespace-nowrap text-white">
          Login succeeded
        </p>
      </div>
    </div>
  );
};

export default LoginSuccess;
