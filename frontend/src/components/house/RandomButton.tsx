interface RandomButtonProps {
  onClick: () => void;
}

const RandomButton: React.FC<RandomButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="button-effect button-animated-effect button-animated-light-effect-position font-irish-grover transform rounded-2xl bg-[#FA8F21] text-[1.25rem] text-white transition-all duration-200 hover:scale-105 hover:from-orange-500 hover:to-orange-600 active:scale-95"
    >
      <div className="detail-box-text flex flex-col px-5 py-2">
        <span>Random your </span>
        <div className="flex items-center">
          <span>destiny coven</span>
        </div>
      </div>
    </button>
  );
};

export default RandomButton;
