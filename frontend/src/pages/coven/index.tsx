import { useNavigate } from 'react-router';
import CombinedCoven from '@/components/coven/covenBadge/covenBadges';
import DetailCoven from '@/components/coven/covenBadge/detailCoven';
import MainLayout from '../layout';
const Page = () => {
  const navigate = useNavigate();

  const handleCovenClick = (covenName: string): void => {
    navigate(`/coven/${covenName}`);
  };

  return (
    //     {/* Main content */}
    <MainLayout>
      <div className="flex-1 p-4 md:p-8">
        <div className="mx-auto max-w-4xl">
          {/* Character cards grid - 2x2 on larger screens, single column on mobile */}
          <div className="mb-8 grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2">
            <CombinedCoven
              covenType="alchemireCoven"
              onClick={() => handleCovenClick('alchemireCoven')}
            />
            <CombinedCoven
              covenType="etheraCoven"
              onClick={() => handleCovenClick('etheraCoven')}
            />
            <CombinedCoven
              covenType="zireliaCoven"
              onClick={() => handleCovenClick('zireliaCoven')}
            />
            <CombinedCoven
              covenType="isotarCoven"
              onClick={() => handleCovenClick('isotarCoven')}
            />
          </div>

          {/* Detail section */}
          <div className="w-full">
            <DetailCoven />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
