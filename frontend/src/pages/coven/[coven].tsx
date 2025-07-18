import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import CombinedCoven from '@/components/coven/covenBadge/covenBagdes';
import ProfileModal from '@/components/coven/profileModal';
import ProfilePopup from '@/components/coven/profilePopup';
import { mockUsers, type User } from '@/types/coven.types';
import MainLayout from '../layout';

const Page = () => {
  const { coven = '' } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const validCovens = ['alchemireCoven', 'etheraCoven', 'isotarCoven', 'zireliaCoven'];

  useEffect(() => {
    if (coven && !validCovens.includes(coven)) {
      navigate('/coven');
      return;
    }
  }, [coven, navigate]);

  const handleOpenModal = (user: User): void => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <MainLayout>
      <div className="flex">
        {/* Main content area */}
        <div className="flex flex-[7] flex-col space-y-6 p-4 md:p-8">
          <div className="flex items-center justify-center">
            <CombinedCoven
              covenType={coven as 'alchemireCoven' | 'etheraCoven' | 'isotarCoven' | 'zireliaCoven'}
            />
          </div>

          {/* Cards grid */}
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
            {mockUsers.map((user, index) => (
              <ProfileModal
                key={user.studentId}
                user={user}
                onClick={() => handleOpenModal(user)}
              />
            ))}
          </div>
        </div>
      </div>
      <ProfilePopup isOpen={isModalOpen} onClose={handleCloseModal} user={selectedUser} />
    </MainLayout>
  );
};

export default Page;
