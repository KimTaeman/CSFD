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

        <p className="text-center text-sm text-white/80 italic">
          Click any coven above to discover its members and meet the wizards who call it home.
        </p>

        {/* Detail Paragraphs */}
        <blockquote className="font-inter md:text-md space-y-4 text-center text-sm leading-relaxed font-medium text-pretty break-words hyphens-auto text-white [&>p]:indent-4 md:[&>p]:indent-8">
          <p>
            In Computer Science, we're taught to think logically. We work with clear inputs, follow
            structured flows, and expect predictable outcomes. But beneath every system, there's a
            layer you can't debug or compile. Something that doesn't follow instructions. That's
            where the real magic begins.
          </p>
          <p>
            Some of us do more than just write code, we open doors to new possibilities. We don't
            just analyze data, we start to see the future in it. And when we define variables, we're
            not just holding values, we're capturing potential.
          </p>
          <p>
            You're not just learning logic. You're learning to shape the invisible rules that guide
            everything around us.
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
