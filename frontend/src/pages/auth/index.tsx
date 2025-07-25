function HomePage() {
  const handleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/login`;
  };

  return (
    <div
      className="flex h-svh items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(/assets/bg-magic.png)` }}
    >
      <div className="text-center">
        <button
          onClick={handleLogin}
          className="cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Login with Microsoft
        </button>
      </div>
    </div>
  );
}

export default HomePage;
