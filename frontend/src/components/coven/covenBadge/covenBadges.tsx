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
    <div className="flex flex-1 flex-col items-center justify-center text-center lg:items-start lg:text-left min-w-0">
      <h3 className="font-ribeye text-xl sm:text-2xl md:text-3xl text-white leading-tight">
        {coven.name}
      </h3>
      <p className="font-inter text-sm sm:text-base md:text-lg text-white/80 mt-1 sm:mt-2">
        {coven.role}
      </p>
    </div>
  );

  const imageContent = (
    <div className="flex flex-shrink-0 items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
      <img
        src={coven.image}
        alt={coven.name}
        className="w-full h-full object-contain pointer-events-none subtle-float hover:animate-wiggle-more transition-transform duration-300"
      />
    </div>
  );

  // Determine layout: mobile is always column, desktop follows imagePosition
  const desktopLayout = coven.imagePosition === 'left'
    ? 'lg:flex-row-reverse'
    : 'lg:flex-row';

  return (
    <div
      className={`glowing-border ${glowClass} w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto transform rounded-2xl sm:rounded-3xl border border-white/30 bg-gradient-to-br from-black/50 to-purple-800/60 backdrop-blur-lg transition-all duration-500 ease-in-out select-none hover:scale-[1.02] ${onClick ? 'cursor-pointer' : 'cursor-default'} ${className}`}
      onClick={onClick}
    >
      <div className={`flex flex-col ${desktopLayout} items-center gap-3 sm:gap-4 md:gap-6 p-4 sm:p-6 md:p-7`}>
        {/* Image */}
        {imageContent}

        {/* Text */}
        {textContent}
      </div>
    </div>
  );
};

export default CombinedCoven;