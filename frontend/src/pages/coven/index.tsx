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
      <div className="min-h-screen w-full overflow-x-hidden">
        {/* Hero Section with Coven Grid */}
        <div className="w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-5xl">
            {/* Page Title */}
            <div className="mb-6 text-center sm:mb-8 md:mb-10">
              <h1 className="font-ribeye mb-2 text-2xl text-white sm:text-3xl md:text-4xl">
                Covens Directory
              </h1>
              <p className="font-inter text-sm text-white/80 sm:text-base">
                Explore each coven and discover the wizards who belong to them
              </p>
            </div>

            {/* Coven Cards Grid */}
            <div className="grid grid-cols-1 justify-items-center gap-5 min-[1240px]:grid-cols-2 min-[1240px]:gap-8 sm:gap-6">
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
        <div className="w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <DetailCoven />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
