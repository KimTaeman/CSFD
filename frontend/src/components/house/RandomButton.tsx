interface RandomButtonProps {
  onClick: () => void;
  isLoading?: boolean;
}

const RandomButton: React.FC<RandomButtonProps> = ({ onClick, isLoading }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`button-effect button-animated-effect button-animated-light-effect-position font-irish-grover transform rounded-2xl bg-[#FA8F21] text-[1.25rem] text-white transition-all duration-200 hover:scale-105 hover:from-orange-500 hover:to-orange-600 active:scale-95 ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
    >
      <div className="detail-box-text flex flex-col px-5 py-2">
        {!isLoading ? (
          <div>
            <span>Random Your Destiny</span>
          </div>
        ) : (
          <span>Choosing Your Destiny...</span>
        )}
      </div>
    </button>
  );
};

export default RandomButton;
