import { useNavigate } from 'react-router';
import CombinedCoven from '@/components/coven/covenBadge/covenBagdes';
import DetailCoven from '@/components/coven/covenBadge/detailCoven';

const Page = () => {
  const navigate = useNavigate();

  const handleCovenClick = (covenName: string): void => {
    navigate(`/coven/${covenName}`);
  };

  return (
    <div className="min-h-screen bg-[#15022f] bg-[url('/src/assets/bg-2.png')] bg-position-[50%_0] bg-no-repeat lg:bg-contain">
      <div className="flex">
        {/* Sidebar space - hidden on md and below */}
        <div className="hidden w-80 flex-shrink-0 lg:block"></div>

        {/* Main content */}
        <div className="flex-1 p-4 md:p-8">
          <div className="mx-auto max-w-4xl">
            {/* Character cards grid - 2x2 on larger screens, single column on mobile */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:mb-8">
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
      </div>
    </div>
  );
};

export default Page;
