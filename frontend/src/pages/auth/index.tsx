function HomePage() {
  const handleLogin = () => {
    window.location.href = 'http://localhost:3000/api/auth/login';
  };

  return (
    <div>
      <h1>Testing</h1>
      <button onClick={handleLogin}>Login with Microsoft</button>
    </div>
  );
}

export default HomePage;
