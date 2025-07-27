import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import CombinedCoven from '@/components/coven/covenBadge/covenBadges';
import ProfileModal from '@/components/coven/profileModal';
import ProfilePopup from '@/components/coven/profilePopup';
import type { StudentInfo } from '@/types/type';
import MainLayout from '@/pages/layout';
import LoadingLayout from '@/components/layout/loading';
import { useAuthContext } from '@/hooks/useAuthContext';

const Page = () => {
  const { coven = '' } = useParams();
  const { students, isFetchingStudents } = useAuthContext();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<StudentInfo | null>(null);

  const validCovens = ['alchemireCoven', 'etheraCoven', 'isotarCoven', 'zireliaCoven'];

  useEffect(() => {
    if (coven && !validCovens.includes(coven)) {
      navigate('/coven');
      return;
    }
  }, [coven, navigate]);

  const handleOpenModal = (user: StudentInfo): void => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  if (isFetchingStudents) return <LoadingLayout />;

  return (
    <MainLayout>
      {/* <div className="flex"> */}
      {/* Main content area */}
      <div className="flex w-full flex-col space-y-8">
        <div className="mb-16 flex items-center justify-center">
          <CombinedCoven
            covenType={coven as 'alchemireCoven' | 'etheraCoven' | 'isotarCoven' | 'zireliaCoven'}
          />
        </div>

        {/* Cards grid */}
        <div className="flex max-w-4xl grid-cols-1 flex-wrap items-center justify-center gap-8 px-4 sm:mx-auto sm:grid sm:grid-cols-2">
          {students
            .filter((user: StudentInfo) => `${user?.house?.toLowerCase()}Coven` === coven)
            .filter((user: StudentInfo) => user.isHouseLeader === true)
            .map((user: StudentInfo) => (
              <ProfileModal
                key={user.studentId}
                user={user}
                onClick={() => handleOpenModal(user)}
              />
            ))}
        </div>

        <div className="mx-auto flex max-w-4xl grid-cols-1 flex-wrap gap-8 px-4 sm:grid sm:grid-cols-2 md:grid-cols-3">
          {students
            .filter((user: StudentInfo) => `${user?.house?.toLowerCase()}Coven` === coven)
            .filter((user: StudentInfo) => user.isHouseLeader === false)
            .map((user: StudentInfo) => (
              <ProfileModal
                key={user.studentId}
                user={user}
                onClick={() => handleOpenModal(user)}
              />
            ))}
        </div>
      </div>
      {/* </div> */}
      <ProfilePopup isOpen={isModalOpen} onClose={handleCloseModal} user={selectedUser} />
    </MainLayout>
  );
};

export default Page;
