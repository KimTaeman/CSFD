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
    image: '/src/assets/alchemire.png',
    imagePosition: 'right',
  },
  etheraCoven: {
    name: 'Ethera',
    role: 'Summoner',
    image: '/src/assets/ethera.png',
    imagePosition: 'left',
  },
  isotarCoven: {
    name: 'Isotar',
    role: 'Visionary',
    image: '/src/assets/isotar.png',
    imagePosition: 'right',
  },
  zireliaCoven: {
    name: 'Zirelia',
    role: 'Sorcerer',
    image: '/src/assets/zirelia.png',
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
      <h3 className="font-ribeye text-[1.5rem] text-white">{coven.name}</h3>
      <p className="font-inter text-[0.7rem] text-white/80">{coven.role}</p>
    </div>
  );

  const imageContent = (
    <div className="flex w-full min-w-40 justify-center md:max-w-40">
      <img src={coven.image} alt={coven.name} />
    </div>
  );

  return (
    <div
      className={`w-full max-w-85 transform rounded-3xl border border-white/30 bg-black/10 backdrop-blur-lg transition-all duration-500 ease-in-out hover:scale-[1.02] ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      <div className="flex flex-row items-center px-8 py-6">
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
