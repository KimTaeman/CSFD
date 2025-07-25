import React from 'react';
import type { CovenProps } from '@/types/coven.types';

interface CovenData {
  name: string;
  role: string;
  image: string;
  imagePosition: 'left' | 'right';
}

const covenData: Record<string, CovenData> = {
  alchemireCoven: {
    name: 'Alchemire',
    role: 'Potion Brewer',
    image: '/assets/alchemire.png',
    imagePosition: 'right',
  },
  etheraCoven: {
    name: 'Ethera',
    role: 'Summoner',
    image: '/assets/ethera.png',
    imagePosition: 'left',
  },
  isotarCoven: {
    name: 'Isotar',
    role: 'Visionary',
    image: '/assets/isotar.png',
    imagePosition: 'right',
  },
  zireliaCoven: {
    name: 'Zirelia',
    role: 'Sorcerer',
    image: '/assets/zirelia.png',
    imagePosition: 'left',
  },
};

type CovenType = 'alchemireCoven' | 'etheraCoven' | 'isotarCoven' | 'zireliaCoven';

interface CombinedCovenProps extends CovenProps {
  covenType: keyof typeof covenData;
}

const CombinedCoven: React.FC<CombinedCovenProps> = ({ covenType, onClick, className = '' }) => {
  const coven = covenData[covenType];

  if (!coven) {
    return null;
  }

  const textContent = (
    <div className="flex flex-1 flex-col items-start justify-start space-y-2">
      <h3 className="font-ribeye text-xl text-white xl:text-3xl">{coven.name}</h3>
      <p className="font-inter text-sm text-white/80 xl:text-lg">{coven.role}</p>
    </div>
  );

  const imageContent = (
    <div className="flex w-full min-w-40 justify-center md:max-w-40">
      <img src={coven.image} alt={coven.name} className="pointer-events-none" />
    </div>
  );

  return (
    <div
      className={`w-full max-w-85 transform rounded-3xl border border-white/30 bg-gradient-to-br from-black/50 to-purple-800/60 backdrop-blur-lg transition-all duration-500 ease-in-out select-none hover:scale-[1.02] ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      <div
        className={`ipadpro-px-2 flex ${coven.imagePosition === 'left' ? 'flex-col-reverse' : 'flex-col'} items-center px-8 py-6 sm:flex-row md:px-4`}
      >
        {coven.imagePosition === 'left' ? (
          <>
            {imageContent}
            {textContent}
          </>
        ) : (
          <>
            {textContent}
            {imageContent}
          </>
        )}
      </div>
    </div>
  );
};

export default CombinedCoven;
