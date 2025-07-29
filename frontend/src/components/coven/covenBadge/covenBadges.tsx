import React from 'react';
import type { CovenProps } from '@/types/coven.types';

interface CovenData {
  name: string;
  role: string;
  image: string;
  imagePosition: 'left' | 'right';
}

export const covenData: Record<string, CovenData> = {
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

export type CovenType = 'alchemireCoven' | 'etheraCoven' | 'isotarCoven' | 'zireliaCoven';

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
    <div className="flex min-w-0 flex-1 flex-col items-center justify-center text-center lg:items-start lg:text-left">
      <h3 className="font-ribeye text-xl leading-tight text-white sm:text-2xl md:text-3xl">
        {coven.name}
      </h3>
      <p className="font-inter mt-1 text-sm text-white/80 sm:mt-2 sm:text-base md:text-lg">
        {coven.role}
      </p>
    </div>
  );

  const imageContent = (
    <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32">
      <img
        src={coven.image}
        alt={coven.name}
        className="subtle-float hover:animate-wiggle-more pointer-events-none h-full w-full object-contain transition-transform duration-300"
      />
    </div>
  );

  // Determine layout: mobile is always column, desktop follows imagePosition
  const desktopLayout = coven.imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row';

  return (
    <div
      className={`glowing-border ${glowClass} mx-auto w-full max-w-sm transform rounded-2xl border border-white/30 bg-gradient-to-br from-black/50 to-purple-800/60 backdrop-blur-lg transition-all duration-500 ease-in-out select-none hover:scale-[1.02] sm:max-w-md sm:rounded-3xl md:max-w-lg ${onClick ? 'cursor-pointer' : 'cursor-default'} ${className}`}
      onClick={onClick}
    >
      <div
        className={`flex flex-col ${desktopLayout} items-center gap-3 p-4 sm:gap-4 sm:p-6 md:gap-6 md:p-7`}
      >
        {/* Image */}
        {imageContent}

        {/* Text */}
        {textContent}
      </div>
    </div>
  );
};

export default CombinedCoven;
