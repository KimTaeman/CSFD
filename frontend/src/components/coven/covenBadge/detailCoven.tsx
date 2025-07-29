const DetailCoven = () => {
  return (
    <div className="font-inter group w-full max-w-4xl mx-auto transform rounded-2xl sm:rounded-3xl bg-black/20 border border-white/10 backdrop-blur-lg transition-all duration-500 ease-in-out hover:scale-[1.01]">
      <div className="relative z-10 flex flex-col items-center justify-center space-y-4 sm:space-y-5 p-6 sm:p-7 md:p-8">
        {/* Header */}
        <div className="text-center mb-2 sm:mb-3">
          <h2 className="font-ribeye text-xl sm:text-2xl md:text-3xl text-white mb-2">
            The Four Covens
          </h2>
          <div className="h-0.5 w-16 sm:w-20 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto opacity-60"></div>
        </div>

        {/* Main Content */}
        <blockquote className="font-inter text-sm sm:text-base space-y-3 sm:space-y-4 text-center leading-relaxed font-medium text-white/90 max-w-3xl">
          <p>
            Each coven represents a unique path in the magical arts of technology. From the meticulous
            <span className="text-blue-400 font-semibold"> Alchemire Potion Brewers</span> who craft perfect code solutions,
            to the visionary <span className="text-green-400 font-semibold">Isotar Seers</span> who peer into future possibilities.
          </p>
          <p>
            The mystical <span className="text-red-400 font-semibold">Ethera Summoners</span> bring
            digital creations to life, while the powerful <span className="text-pink-400 font-semibold">Zirelia Sorcerers</span>{' '}
            command the very foundations of computational magic.
          </p>
          <p className="text-white/80 text-sm italic">
            Click any coven above to discover its members and meet the wizards who call it home.
          </p>
        </blockquote>

        {/* Decorative Elements */}
        <div className="mt-2 sm:mt-4 flex w-full justify-center">
          <div className="flex items-center space-x-3 sm:space-x-4 select-none">
            <div className="h-0.5 w-8 sm:w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60 transition-all duration-500 group-hover:w-12 sm:group-hover:w-16"></div>
            <div className="pulse-custom text-xl sm:text-2xl text-yellow-400 transition-all duration-500 group-hover:text-2xl">
              ✦
            </div>
            <div className="h-0.5 w-8 sm:w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60 transition-all duration-500 group-hover:w-12 sm:group-hover:w-16"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCoven;