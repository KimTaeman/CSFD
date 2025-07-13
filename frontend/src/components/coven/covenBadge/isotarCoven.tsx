import React from "react";
import type { CovenProps } from "@/types/coven.types";

const IsotarCoven: React.FC<CovenProps> = ({ onClick, className = '' }) => {
  return (
    <div 
      className={`w-full max-w-85 transform rounded-3xl border border-white/30 bg-black/10 backdrop-blur-lg transition-all duration-500 ease-in-out hover:scale-[1.02] ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      <div className="flex flex-row items-center px-8 py-6">
        <div className="flex flex-1 flex-col items-start justify-start space-y-2">
          <h3 className="font-ribeye text-[1.5rem] text-white">Isotar</h3>
          <p className="font-inter text-[0.7rem] text-white/80">Visionary</p>
        </div>
        <div className="flex w-full min-w-40 justify-center md:max-w-40">
          <img src="/src/assets/isotar.png" />
        </div>
      </div>
    </div>
  );
};

export default IsotarCoven;
