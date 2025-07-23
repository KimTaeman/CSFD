import React from 'react';
import SparkleImage from '@/assets/sparkle.png';

interface RevealResultProps {
  state: 'success' | 'fail';
  outOfAttempts?: boolean;
}

const RevealResult: React.FC<RevealResultProps> = ({ state, outOfAttempts = false }) => {
  console.log(state);
  return (
    <div className="relative flex h-[25vw] max-h-[350px] w-[98%] max-w-[1400px] flex-col items-center justify-start px-[1%] pt-[1%]">
      {/* Radial gradient background | radial-hint-bg is in index.css */}
      <div className="radial-hint-bg pointer-events-none absolute inset-0 z-0 -mt-[7%] h-full w-full" />
      {/* Sparkle image for success */}
      {state === 'success' && (
        <img
          src={SparkleImage}
          alt=""
          className="pointer-events-none absolute inset-0 z-0 -mt-[12%] -ml-[1.5%] h-full w-full scale-[2.5] object-contain"
        />
      )}
      <div className="relative z-10 -mt-[1%] flex w-full flex-col items-center font-['Irish_Grover'] text-xl leading-tight md:text-3xl lg:text-[360%]">
        {state === 'success' ? (
          <>
            <p className="text-center text-[#FFC31E]">The spell has worked!</p>
            <p className="-mt-[0.5%] text-center text-[#FFC31E]">
              You’ve unveiled your Secret Senior!
            </p>
          </>
        ) : (
          <>
            <p className="text-center text-[#C50A0A]">The spell didn’t land.</p>
            <p className="text-center text-[#C50A0A]">That wasn’t your secret senior…The stars</p>
            <p className="text-center text-[#C50A0A]">remain silent</p>
            <p className="mt-[1%] text-center text-white">
              {outOfAttempts ? 'No more chances' : 'Try again, little witch.'}
            </p>
          </>
        )}
        {/* TAP HERE TO EXIT row */}
        <div className="mt-[7%] flex cursor-pointer items-center justify-center gap-2 font-['Poppins'] text-sm text-white select-none lg:text-[1.6rem]">
          <svg
            width="90"
            height="4"
            viewBox="0 0 90 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 2H89" stroke="white" strokeWidth="3" />
          </svg>
          <span className="px-5">TAP HERE TO EXIT</span>
          <svg
            width="90"
            height="4"
            viewBox="0 0 90 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 2H89" stroke="white" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RevealResult;
