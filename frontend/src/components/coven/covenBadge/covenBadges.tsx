import React from 'react';
import type { CovenProps } from '@/types/coven.types';
import covenData from '@/constants/coven.ts';
import { cn } from '@/lib/utils.ts';

export type CovenType = 'alchemireCoven' | 'etheraCoven' | 'isotarCoven' | 'zireliaCoven';

interface CombinedCovenProps extends CovenProps {
  covenType: keyof typeof covenData;
  showDescription?: boolean;
}

const covenGlowClasses: Record<CovenType, string> = {
  alchemireCoven: 'alchemire-glow',
  etheraCoven: 'ethera-glow',
  isotarCoven: 'isotar-glow',
  zireliaCoven: 'zirelia-glow',
};

const CombinedCoven: React.FC<CombinedCovenProps> = ({
  covenType,
  onClick,
  className = '',
  showDescription = false,
}) => {
  const coven = covenData[covenType];
  const glowClass = covenGlowClasses[covenType as CovenType];

  if (!coven) {
    return null;
  }

  const textContent = (
    <div
      className={cn(
        'flex min-w-0 flex-1 flex-col items-center justify-center text-center lg:items-start',
        showDescription ? 'lg:text-center' : 'lg:text-left',
      )}
    >
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

  const desktopLayout = coven.imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row';

  return (
    <div
      className={`glowing-border ${glowClass} customized-cursor mx-auto w-full max-w-sm transform rounded-2xl border border-white/30 bg-gradient-to-br from-black/50 to-purple-800/60 backdrop-blur-lg transition-all duration-500 ease-in-out select-none hover:scale-[1.02] sm:max-w-md sm:rounded-3xl md:max-w-lg ${className}`}
      onClick={onClick}
    >
      <div
        className={cn(
          `flex flex-col ${desktopLayout} items-center gap-3 p-4 sm:gap-4 sm:p-6 md:gap-6 md:p-7`,
          showDescription ? 'justify-self-center-safe pb-0 sm:pb-0 md:pb-0' : null,
        )}
      >
        {/* Image */}
        {imageContent}

        {/* Text */}
        {textContent}
      </div>
      {showDescription && (
        <p
          className={cn(
            'font-inter mt-2 p-4 pt-0 text-center text-xs leading-relaxed text-pretty text-white/60 sm:gap-4 sm:p-6 sm:pt-0 sm:text-sm md:gap-6 md:p-7 md:pt-0',
          )}
        >
          {coven.description}
        </p>
      )}
    </div>
  );
};

export default CombinedCoven;
