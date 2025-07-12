function HomePage() {
  const handleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/login`;
  };

  return (
    <div>
      <h1>Testing</h1>
      <button onClick={handleLogin}>Login with Microsoft</button>
    </div>
  );
}

export default HomePage;
