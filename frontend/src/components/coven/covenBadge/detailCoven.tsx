const DetailCoven = () => {
  return (
    <div className="font-inter group mx-auto w-full max-w-4xl transform rounded-2xl border border-white/10 bg-black/20 backdrop-blur-lg transition-all duration-500 ease-in-out hover:scale-[1.01] sm:rounded-3xl">
      <div className="relative z-10 flex flex-col items-center justify-center space-y-4 p-6 sm:space-y-5 sm:p-7 md:p-8">
        {/* Header */}
        <div className="mb-2 text-center sm:mb-3">
          <h2 className="font-ribeye mb-2 text-xl text-white sm:text-2xl md:text-3xl">
            The Four Covens
          </h2>
          <div className="mx-auto h-0.5 w-16 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-60 sm:w-20"></div>
        </div>

        {/* Main Content */}
        <blockquote className="font-inter max-w-3xl space-y-3 text-center text-sm leading-relaxed font-medium text-white/90 sm:space-y-4 sm:text-base">
          <p>
            Each coven represents a unique path in the magical arts of technology. From the
            meticulous
            <span className="font-semibold text-blue-400"> Alchemire Potion Brewers</span> who craft
            perfect code solutions, to the visionary{' '}
            <span className="font-semibold text-green-400">Isotar Seers</span> who peer into future
            possibilities.
          </p>
          <p>
            The mystical <span className="font-semibold text-red-400">Ethera Summoners</span> bring
            digital creations to life, while the powerful{' '}
            <span className="font-semibold text-pink-400">Zirelia Sorcerers</span> command the very
            foundations of computational magic.
          </p>
          <p className="text-sm text-white/80 italic">
            Click any coven above to discover its members and meet the wizards who call it home.
          </p>
        </blockquote>

        {/* Decorative Elements */}
        <div className="mt-2 flex w-full justify-center sm:mt-4">
          <div className="flex items-center space-x-3 select-none sm:space-x-4">
            <div className="h-0.5 w-8 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60 transition-all duration-500 group-hover:w-12 sm:w-12 sm:group-hover:w-16"></div>
            <div className="pulse-custom text-xl text-yellow-400 transition-all duration-500 group-hover:text-2xl sm:text-2xl">
              ✦
            </div>
            <div className="h-0.5 w-8 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60 transition-all duration-500 group-hover:w-12 sm:w-12 sm:group-hover:w-16"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCoven;
