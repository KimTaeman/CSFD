import React from 'react';
import type { CovenProps } from '@/types/coven.types';

const EtheraCoven: React.FC<CovenProps> = ({ onClick, className = '' }) => {
  return (
    <div
      className={`w-full max-w-85 transform rounded-3xl border border-white/30 bg-black/10 backdrop-blur-lg transition-all duration-500 ease-in-out hover:scale-[1.02] ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      <div className="flex flex-row items-center px-8 py-6">
        <div className="flex w-full min-w-40 justify-center md:max-w-40">
          <img src="/src/assets/ethera.png" />
        </div>
        <div className="flex flex-1 flex-col items-start justify-start space-y-2">
          <h3 className="font-ribeye text-[1.5rem] text-white">Ethera</h3>
          <p className="font-inter text-[0.7rem] text-white/80">Summoner</p>
        </div>
      </div>
    </div>
  );
};

export default EtheraCoven;
