import { useNavigate, useParams } from 'react-router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import CombinedCoven from '@/components/coven/covenBadge/covenBadges';
import ProfileModal from '@/components/coven/profileModal';
import ProfilePopup from '@/components/coven/profilePopup';
import type { StudentInfo } from '@/types/type';
import MainLayout from '@/pages/layout';
import LoadingLayout from '@/components/layout/loading';
import { useAuthContext } from '@/hooks/useAuthContext';

const VALID_COVENS = ['alchemireCoven', 'etheraCoven', 'isotarCoven', 'zireliaCoven'] as const;

type CovenType = (typeof VALID_COVENS)[number];

const Page = () => {
  const { coven = '' } = useParams();
  const { students, isFetchingStudents } = useAuthContext();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<StudentInfo | null>(null);

  useEffect(() => {
    if (coven && !VALID_COVENS.includes(coven as CovenType)) {
      navigate('/coven');
      return;
    }
  }, [coven, navigate]);

  const sortByStudentId = useCallback((a: StudentInfo, b: StudentInfo): number => {
    const aId = a.studentId;
    const bId = b.studentId;

    if (aId === null && bId === null) return 0;
    if (aId === null) return 1;
    if (bId === null) return -1;

    return aId.localeCompare(bId, undefined, { numeric: true });
  }, []);

  const covenStudents = useMemo(() => {
    if (!students || !coven) return [];

    return students
      .filter((user: StudentInfo) => `${user?.house?.toLowerCase()}Coven` === coven)
      .sort(sortByStudentId);
  }, [students, coven, sortByStudentId]);

  const { leaders, members } = useMemo(() => {
    const leaders: StudentInfo[] = [];
    const members: StudentInfo[] = [];

    covenStudents.forEach((user: StudentInfo) => {
      if (user.isHouseLeader === true) {
        leaders.push(user);
      } else {
        members.push(user);
      }
    });

    return { leaders, members };
  }, [covenStudents]);

  const handleOpenModal = useCallback((user: StudentInfo): void => {
    setSelectedUser(user);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback((): void => {
    setIsModalOpen(false);
    setSelectedUser(null);
  }, []);

  const renderProfileModal = useCallback(
    (user: StudentInfo, className?: string) => (
      <ProfileModal
        key={user.studentId || `user-${user.displayName}-${Math.random()}`}
        user={user}
        onClick={() => handleOpenModal(user)}
        className={className}
      />
    ),
    [handleOpenModal],
  );

  if (isFetchingStudents) return <LoadingLayout />;

  return (
    <MainLayout>
      <div className="flex w-full flex-col space-y-8 max-sm:overflow-x-clip">
        {/* Coven Header */}
        <div className="mb-16 flex items-center justify-center px-4">
          <CombinedCoven covenType={coven as CovenType} showDescription={true} />
        </div>

        {/* House Leaders Section */}
        {leaders.length > 0 && (
          <div className="flex max-w-4xl grid-cols-1 flex-wrap items-center justify-center gap-8 px-4 sm:mx-auto sm:grid sm:grid-cols-2">
            {leaders.map((user) => renderProfileModal(user, 'w-full'))}
          </div>
        )}

        {/* Regular Members Section */}
        {members.length > 0 && (
          <div className="mx-auto flex max-w-4xl grid-cols-1 flex-wrap gap-8 px-4 sm:grid sm:grid-cols-2 md:grid-cols-3">
            {members.map((user) => renderProfileModal(user))}
          </div>
        )}

        {/* Empty State */}
        {covenStudents.length === 0 && (
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <p className="text-lg text-gray-400">No wizard found in this coven</p>
              <p className="mt-2 text-sm text-gray-500">
                Check back later or try a different coven
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Profile Modal */}
      <ProfilePopup isOpen={isModalOpen} onClose={handleCloseModal} user={selectedUser} />
    </MainLayout>
  );
};

export default Page;
