const HousesButton = () => {
  return (
    <button className="transform rounded-2xl bg-[#FA8F21] font-irish-grover text-[1.25rem] text-white transition-all duration-200 hover:scale-105 hover:from-orange-500 hover:to-orange-600 active:scale-95">
      <div className="flex flex-col px-5 py-1">
        <span>Your Coven is</span>
        <div className="flex items-center space-x-2">
          <span>ETHERA</span>
          <span>≫</span>
        </div>
      </div>
    </button>
  );
};

export default HousesButton;
