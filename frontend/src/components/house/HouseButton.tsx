import type { HouseData } from '@/types/house.types';
import React from 'react';
import { useNavigate } from 'react-router';

interface HousesButtonProps {
  houseData: HouseData;
}

const HousesButton: React.FC<HousesButtonProps> = ({ houseData }) => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate('/coven');
  };

  return (
    <button
      onClick={handleClick}
      className="button-effect button-animated-effect button-animated-light-effect-position font-irish-grover transform cursor-pointer rounded-2xl text-[1.25rem] text-white transition-all duration-200 hover:scale-105"
    >
      <div className="detail-box-text flex flex-col px-5 py-1">
        <span>Your Coven is</span>
        <div className="flex items-center space-x-2">
          <span>{houseData.name}</span>
          <span>≫</span>
        </div>
      </div>
    </button>
  );
};

export default HousesButton;
