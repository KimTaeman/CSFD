import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import CombinedCoven from '@/components/coven/covenBadge/covenBagdes';
import ProfileModal from '@/components/coven/profileModal';
import ProfilePopup from '@/components/coven/profilePopup';
import type { StudentInfo } from '@/types/type';
import MainLayout from '../layout';
import { useAuthContext } from '@/hooks/useAuthContext';
import { useFetch } from '@/hooks/useFetch';
import { useQuery } from '@tanstack/react-query';
import LoadingLayout from '@/components/layout/loading';

const Page = () => {
  const { coven = '' } = useParams();
  const navigate = useNavigate();

  const { isAuthenticated } = useAuthContext();
  const { fetchStudents } = useFetch();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<StudentInfo | null>(null);

  const validCovens = ['alchemireCoven', 'etheraCoven', 'isotarCoven', 'zireliaCoven'];

  useEffect(() => {
    if (coven && !validCovens.includes(coven)) {
      navigate('/coven');
      return;
    }
  }, [coven, navigate]);

  const {
    data: students,
    isPending,
    error,
  } = useQuery({
    queryKey: ['students'],
    queryFn: fetchStudents,
    enabled: isAuthenticated,
  });

  const handleOpenModal = (user: StudentInfo): void => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  if (isPending) return <LoadingLayout />;

  if (error) return <div>An error occurred: {error.message}</div>;

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
        <div className="mx-auto grid max-w-4xl grid-cols-1 items-center justify-center gap-8 sm:grid-cols-2">
          {students
            .filter((user: StudentInfo) => `${user.house.toLowerCase()}Coven` === coven)
            .filter((user: StudentInfo) => user.isHouseLeader === true)
            .map((user: StudentInfo) => (
              <ProfileModal
                key={user.studentId}
                user={user}
                onClick={() => handleOpenModal(user)}
              />
            ))}
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {students
            .filter((user: StudentInfo) => `${user.house.toLowerCase()}Coven` === coven)
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
