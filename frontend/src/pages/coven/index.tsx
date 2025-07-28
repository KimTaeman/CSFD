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
      <div className="mt-12 px-4">
        {/* Character cards grid - 2x2 on larger screens, single column on mobile */}
        <div className="mx-auto mb-8 grid max-w-3xl grid-cols-1 justify-items-center gap-16 md:grid-cols-2">
          <CombinedCoven
            covenType="alchemireCoven"
            onClick={() => handleCovenClick('alchemireCoven')}
          />
          <CombinedCoven covenType="etheraCoven" onClick={() => handleCovenClick('etheraCoven')} />
          <CombinedCoven
            covenType="zireliaCoven"
            onClick={() => handleCovenClick('zireliaCoven')}
          />
          <CombinedCoven covenType="isotarCoven" onClick={() => handleCovenClick('isotarCoven')} />
        </div>

        {/* Detail section */}
        <div className="w-full">
          <DetailCoven />
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
