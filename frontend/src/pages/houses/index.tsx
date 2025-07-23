import { useState } from 'react';
import { useNavigate } from 'react-router';
import RandomButton from '@/components/house/RandomButton';
import NickName from '@/components/house/NicknamePopup';
import LoginSucess from '@/components/layout/loginSucceed';
import api from '@/api/axios';
import { useAuthContext } from '@/hooks/useAuthContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const Page = () => {
  const { user } = useAuthContext();
  const queryClient = useQueryClient();

  const [showWelcome, setShowWelcome] = useState(true);
  const [showLoginSuccess, setShowLoginSuccess] = useState(false);
  const [nickname, setNickname] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (userNickname: string) => {
      await api.put(`/students/${user.id}`, {
        nickname: userNickname,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['authUser'] });
      setShowWelcome(false);
      setShowLoginSuccess(true);
      setTimeout(() => {
        setShowLoginSuccess(false);
      }, 3000);
    },
    onError: (e) => {
      console.error('Registration failed:', e);
    },
  });

  // Handle nickname submission
  const handleNicknameSubmit = async (userNickname: string) => {
    setNickname(userNickname);
    mutation.mutate(userNickname);
  };

  // Handle random button click
  const handleRandomClick = async () => {
    const userHouse = user.house.toLowerCase(); // e.g., 'ethera', 'zirelia', etc.
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate(`/houses/${userHouse}`);
    }, 5000);
    // Navigate to the user's house
  };

  // Show welcome page
  if (showWelcome) {
    return (
      <div className="bg-[#15022f] bg-[url('/src/assets/bg-1.png')] bg-position-[50%_0] bg-no-repeat md:min-h-svh lg:bg-contain">
        <div className="light-particle-colored">
          <div className="flex h-screen w-full flex-col items-center justify-center space-y-8 px-12">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="font-irish-grover text-effect text-[1.75rem] leading-snug text-white sm:text-[2.25rem] md:text-[2.5rem] lg:text-[3rem]">
                "Welcome, little witchling.
              </h1>
              <h1 className="font-irish-grover text-effect text-[1.75rem] leading-snug text-white sm:text-[2.25rem] md:text-[2.5rem] lg:text-[3rem]">
                Your magical journey begins today."
              </h1>
            </div>
            <NickName onSubmit={handleNicknameSubmit} />
          </div>
        </div>
      </div>
    );
  }

  // Show main page with magic pot
  return (
    <div className="min-h-svh bg-[#15022f] bg-[url('/src/assets/bg-1.png')] bg-cover bg-center bg-no-repeat">
      {/* Login Success Notification */}
      {showLoginSuccess && (
        <div className="fixed top-8 left-1/2 z-50 -translate-x-1/2 transform transition-all duration-300 ease-in-out">
          <LoginSucess />
        </div>
      )}

      <div className="pot-light-particle-colored h-screen">
        <div className="flex h-screen flex-col items-center justify-center px-12 py-20">
          <img className="pot-width w-full" src="/src/assets/magic-pot.png" alt="Magic Pot" />
          <RandomButton onClick={handleRandomClick} isLoading={loading} />
        </div>
      </div>
    </div>
  );
};

export default Page;
