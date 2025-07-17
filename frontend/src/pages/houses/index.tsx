import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import RandomButton from '@/components/house/RandomButton';
import NickName from '@/components/house/NicknamePopup';
import LoginSucess from '@/components/layout/loginSucceed';

const Page = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showLoginSuccess, setShowLoginSuccess] = useState(false);
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  // Handle nickname submission
  const handleNicknameSubmit = (userNickname: string) => {
    setNickname(userNickname);
    setShowWelcome(false);
    setShowLoginSuccess(true);

    // Hide login success after 3 seconds
    setTimeout(() => {
      setShowLoginSuccess(false);
    }, 3000);
  };

  // Handle random button click
  const handleRandomClick = async () => {
    try {
      const response = await fetch('/api/user/house');
      const data = await response.json();
      const userHouse = data.house; // e.g., 'ethera', 'zirelia', etc.

      // Navigate to the user's house
      navigate(`/houses/ethera`);
    } catch (error) {
      console.error('Error fetching user house:', error);
      // Fallback navigation or error handling
    }
  };

  // Show welcome page
  if (showWelcome) {
    return (
      <div className="star-bg min-h-screen bg-[#15022f] bg-[url('/src/assets/bg-1.png')] bg-top bg-no-repeat sm:bg-center md:bg-[length:100%_auto] lg:bg-contain lg:pl-[17.5%]">
        <div className=" flex w-full flex-col items-center justify-center space-y-8 px-4 pt-10 sm:space-y-10 sm:px-8 sm:pt-16 md:space-y-12 md:px-16 md:pt-24 lg:px-24">
          <div className=" flex flex-col items-center justify-center text-center">
            <h1 className=" font-irish-grover text-effect text-[1.75rem] leading-snug text-white sm:text-[2.25rem] md:text-[2.5rem] lg:text-[3rem]">
              "Welcome, little witchling.
            </h1>
            <h1 className="font-irish-grover text-effect text-[1.75rem] leading-snug text-white sm:text-[2.25rem] md:text-[2.5rem] lg:text-[3rem]">
              Your magical journey begins today."
            </h1>
          </div>
          <NickName onSubmit={handleNicknameSubmit} />
        </div>
      </div>
    );
  }

  // Show main page with magic pot
  return (
    <div className="star-bg relative min-h-svh bg-[#15022f] bg-[url('/src/assets/bg-1.png')] bg-contain bg-position-[50%_0] bg-no-repeat lg:pl-[17.5%] ">
      {/* Login Success Notification */}
      {showLoginSuccess && (
        <div className="lg:pl-[17.5%] fixed top-8 left-1/2 z-50 -translate-x-1/2 transform transition-all duration-300 ease-in-out">
          <LoginSucess />
        </div>
      )}

      <div className="pot-light-particle-colored">
        <div className="flex flex-col items-center justify-center space-y-9 px-4 py-10">
          <img
            className="mt-25 w-full max-w-[420px]"
            src="/src/assets/magic-pot.png"
            alt="Magic Pot"
          />
          <RandomButton onClick={handleRandomClick} />
        </div>
      </div>
    </div>
  );
};

export default Page;
