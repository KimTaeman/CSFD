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

const covenGlowClasses: Record<CovenType, string> = {
  alchemireCoven: 'alchemire-glow',
  etheraCoven: 'ethera-glow',
  isotarCoven: 'isotar-glow',
  zireliaCoven: 'zirelia-glow',
};

const CombinedCoven: React.FC<CombinedCovenProps> = ({ covenType, onClick, className = '' }) => {
  const coven = covenData[covenType];
  const glowClass = covenGlowClasses[covenType as CovenType];

  if (!coven) {
    return null;
  }

  const textContent = (
    <div className={`flex flex-col flex-1/2 items-start justify-start space-y-2 lg:text-center`}>
      <h3 className="font-ribeye text-xl text-white xl:text-2xl w-full">{coven.name}</h3>
      <p className="font-inter text-sm text-white/80 xl:text-lg w-full">{coven.role}</p>
    </div>
  );

  const imageContent = (
    <div className="subtle-float has-[+button:hover]:animate-wiggle-more flex flex-1/2 w-auto lg:w-full max-lg:max-h-[10rem] lg:max-w-40 items-center-safe justify-center-safe">
      <img src={coven.image} alt={coven.name} className="pointer-events-none" />
    </div>
  );

  return (
    <div
      className={`glowing-border ${glowClass} justify-enter px-4 w-full max-w-85 transform rounded-3xl border border-white/30 bg-gradient-to-br from-black/50 to-purple-800/60 backdrop-blur-lg transition-all duration-500 ease-in-out select-none hover:scale-[1.02] ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      <div
        className={`flex ${coven.imagePosition === 'left' ? 'flex-row-reverse' : 'flex-row'} items-center px-4 py-6 sm:flex-row gap-6`}
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
