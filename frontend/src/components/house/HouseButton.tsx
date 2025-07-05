
const HousesButton = () => {
    return (
        <button className="bg-[#FA8F21] rounded-2xl font-['Irish_Grover'] text-[16px] text-white hover:from-orange-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 active:scale-95">
            <div className="flex flex-col py-1 px-5">
                <span>Your Coven is</span>
                <div className="flex items-center space-x-2">
                    <span>ETHERA</span>
                    <span>≫</span>
                </div>

            </div>

        </button>
    )
}

export default HousesButton;