import { useNavigate } from 'react-router';
import CombinedCoven from '@/components/coven/covenBadge/covenBadges';
import DetailCoven from '@/components/coven/covenBadge/detailCoven';
import MainLayout from '../layout';

const Page = () => {
  const navigate = useNavigate();

  const handleCovenClick = (covenName: string): void => {
    navigate(`/coven/${covenName}`);
  };

  const covens = [
    { type: 'alchemireCoven' as const, name: 'alchemireCoven' },
    { type: 'etheraCoven' as const, name: 'etheraCoven' },
    { type: 'zireliaCoven' as const, name: 'zireliaCoven' },
    { type: 'isotarCoven' as const, name: 'isotarCoven' },
  ];

  return (
    <MainLayout>
      <div className="w-full min-h-screen overflow-x-hidden">
        {/* Hero Section with Coven Grid */}
        <div className="w-full px-4 py-6 sm:px-6 lg:px-8 sm:py-8">
          <div className="mx-auto max-w-5xl">
            {/* Page Title */}
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <h1 className="font-ribeye text-2xl sm:text-3xl md:text-4xl text-white mb-2">
                Covens Directory
              </h1>
              <p className="font-inter text-sm sm:text-base text-white/80">
                Explore each coven and discover the wizards who belong to them
              </p>
            </div>

            {/* Coven Cards Grid */}
            <div className="grid grid-cols-1 gap-5 sm:gap-6 min-[1240px]:grid-cols-2 min-[1240px]:gap-8 justify-items-center">
              {covens.map((coven) => (
                <div key={coven.type} className="w-full max-w-md">
                  <CombinedCoven
                    covenType={coven.type}
                    onClick={() => handleCovenClick(coven.name)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detail Section */}
        <div className="w-full px-4 py-6 sm:px-6 lg:px-8 sm:py-8">
          <div className="mx-auto max-w-5xl">
            <DetailCoven />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;