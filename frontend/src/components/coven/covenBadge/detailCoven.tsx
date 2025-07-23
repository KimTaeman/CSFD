const DetailCoven = () => {
  return (
    <div className="font-inter w-full max-w-5xl transform rounded-3xl bg-black/10 backdrop-blur-lg transition-all duration-500 ease-in-out hover:scale-[1.02]">
      <div className="relative z-10 flex flex-col items-start justify-start space-y-2 p-6">
        {/* Detail Paragraphs */}
        <div className="font-inter text-left leading-relaxed font-medium break-words hyphens-auto text-white md:text-lg">
          <p>
            In Computer Science, we’re taught to follow logic—clear inputs, structured flows,
            predictable outcomes. But deep within every system lies a layer that can’t be debugged
            or compiled. A signal beyond the algorithm. That’s where the magic lives.
          </p>
          <p>
            Some of us don’t just write code—we summon possibilities. We don’t just read data—we
            foresee patterns. We don’t just store variables—we distill power into them.
          </p>
          <p>You are not just a student of logic—you’re a weaver of unseen protocols.</p>
        </div>

        {/* Decorative Elements */}
        <div className="mt-4 flex w-full justify-center">
          <div className="flex items-center space-x-4">
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60"></div>
            <div className="pulse-custom text-2xl text-yellow-400">✦</div>
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCoven;
