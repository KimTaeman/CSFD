import React from 'react';
import SparkleImage from '@/assets/sparkle.png';

interface RevealResultProps {
  state: 'success' | 'fail';
}

const RevealResult: React.FC<RevealResultProps> = ({ state }) => {
  return (
    <div className="relative flex flex-col items-center justify-start w-[98%] max-w-[1400px] h-[25vw] max-h-[350px] px-[2%] pt-[1%]">
      {/* Radial gradient background | radial-hint-bg is in index.css */}
      <div
        className="absolute inset-0 -mt-[14%] w-full h-full z-0 pointer-events-none radial-hint-bg"
      />
      {/* Sparkle image for success */}
      {state === 'success' && (
        <img
          src={SparkleImage}
          alt=""
          className="absolute inset-0 w-full h-full object-contain z-0 pointer-events-none -mt-[12%] -ml-[1.5%] scale-[2.5]"
        />
      )}
      <div className="relative z-10 w-full flex flex-col items-center font-['Irish_Grover'] leading-tight text-[360%] -mt-[7%]">
        {state === 'success' ? (
          <>
            <p className="text-[#FFC31E] text-center">The spell has worked!</p>
            <p className="text-[#FFC31E] text-center -mt-[0.5%]">You’ve unveiled your Secret Senior!</p>
          </>
        ) : (
          <>
            <p className="text-[#C50A0A] text-center">The spell didn’t land.</p>
            <p className="text-[#C50A0A] text-center">
              That wasn’t your secret senior…The stars
            </p>
            <p className="text-[#C50A0A] text-center">remain silent</p>
            <p className="text-white text-center text-[2.7vw] mt-[1%]">Try again, little witch.</p>
          </>
        )}
        {/* TAP HERE TO EXIT row */}
        <div className="flex items-center justify-center gap-2 font-['Poppins'] text-white text-[1.6rem] select-none cursor-pointer mt-[7%]">
          <svg width="90" height="4" viewBox="0 0 90 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 2H89" stroke="white" strokeWidth="3"/>
          </svg>
          <span className='px-5'>TAP HERE TO EXIT</span>
          <svg width="90" height="4" viewBox="0 0 90 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 2H89" stroke="white" strokeWidth="3"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RevealResult;