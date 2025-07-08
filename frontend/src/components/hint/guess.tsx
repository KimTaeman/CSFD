function Guess() {
    return (
        <div className="flex flex-col">
            <h1 className="text-lg lg:text-2xl mb-8 lg:mb-8 font-[Poppins]">Guess your P'code 💚💚💚</h1>
            
            {/* Desktop layout - side by side */}
            <div className="hidden lg:flex items-center gap-4 w-full">
                <input
                    type="text"
                    placeholder="ex. 880"
                    className="flex-1 min-h-14 text-xl px-4 py-3 bg-white text-black rounded-2xl border-none outline-none placeholder-gray-400"
                />
                <button
                    className="px-6 ml-1 py-3 text-xl text-white rounded-2xl whitespace-nowrap bg-orange-400 hover:bg-orange-500 transition-colors"
                >
                    Send
                </button>
            </div>

            {/* Mobile layout - stacked */}
            <div className="lg:hidden flex flex-col gap-3 w-full">
                <input
                    type="text"
                    placeholder="ex. 880"
                    className="w-full min-h-12 text-base px-4 py-3 bg-white text-black rounded-xl border-none outline-none placeholder-gray-400"
                />
                <button
                    className="px-6 py-3 text-base text-white rounded-xl bg-orange-400 hover:bg-orange-500 transition-colors self-start"
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default Guess;
