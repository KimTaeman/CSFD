import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import HousesButton from '@/components/house/HouseButton';
import HouseDetail from '@/components/house/HouseDetail';
import type { HouseData } from '@/types/house.types';
import { covenData, type CovenType } from '@/components/coven/covenBadge/covenBadges.tsx';

export const housesData: Record<string, HouseData> = {
  ethera: {
    name: 'ETHERA',
    img: '/assets/ethera.png',
    detail1:
      'You’re deeply intuitive. You often see problems (or opportunities) before they arise. You’re drawn to data, trends, systems thinking—and you enjoy predicting outcomes, whether it’s in code, human behavior, or the future of tech.',
    detail2:
      'Others may not always understand how you “knew” something was coming, but they rely on your insight. You ask deep questions and often take the long view.',
  },

  zirelia: {
    name: 'ZIRELIA',
    img: '/assets/zirelia.png',
    detail1:
      'You love experimenting. You’re drawn to chaos, complexity, and things that don’t have clear answers—yet. You might break things on purpose just to learn how they work. You get your best ideas at 3 a.m.',
    detail2:
      'You’re not afraid of failure because you know that real growth comes from pushing boundaries. You bring energy, bold ideas, and fearlessness to every project.',
  },

  alchemire: {
    name: 'ALCHEMIRE',
    img: '/assets/alchemire.png',
    detail1:
      'You’re the kind of person who loves solving problems with elegance. You enjoy mixing logic with creativity, and you believe that patience and precision can create wonders. You don’t just write code—you craft it.',
    detail2:
      'You tend to work quietly but effectively. You’re the type who refactors messy code into clean spells, who reads documentation like recipes, and who can turn something simple into something surprisingly powerful.',
  },

  isotar: {
    name: 'ISOTAR',
    img: '/assets/isotar.png',
    detail1:
      'You’re deeply intuitive. You often see problems (or opportunities) before they arise. You’re drawn to data, trends, systems thinking—and you enjoy predicting outcomes, whether it’s in code, human behavior, or the future of tech.',
    detail2:
      'Others may not always understand how you “knew” something was coming, but they rely on your insight. You ask deep questions and often take the long view.',
  },
};

const Page = () => {
  const { house = '' } = useParams();
  const validHouse = ['ethera', 'zirelia', 'alchemire', 'isotar'];
  const [houseInfo, setHouseInfo] = useState<HouseData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!validHouse.includes(house)) {
      navigate('/houses', { replace: true });
      return;
    }

    const currentHouseData = housesData[house];
    if (currentHouseData) {
      setHouseInfo(currentHouseData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [house]);

  if (!houseInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-svh bg-[#15022f] bg-[url('/assets/bg-magic.png')] bg-cover bg-center bg-no-repeat">
      <div className="light-particle-colored dust-mote">
        <div className="flex min-h-svh flex-col items-center justify-center space-y-9 scroll-auto px-12 py-20">
          <div>
            <img
              className="animated-drift has-[+button:hover]:animate-wiggle-more w-full max-w-[320px] select-none pointer-events-none"
              src={houseInfo.img}
              alt={houseInfo.name}
            />
            <div className="flex flex-1/2 flex-col items-start justify-start space-y-2 text-center">
              <h3 className="font-ribeye text-md w-full text-white md:text-xl xl:text-2xl">
                {houseInfo.name}
              </h3>
              <p className="font-inter w-full text-xs text-white/80 md:text-sm xl:text-lg">
                {covenData[`${houseInfo.name.toLowerCase()}Coven` as CovenType].role}
              </p>
            </div>
          </div>
          <HousesButton houseData={houseInfo} />
          <HouseDetail houseData={houseInfo} />
        </div>
      </div>
    </div>
  );
};

export default Page;
