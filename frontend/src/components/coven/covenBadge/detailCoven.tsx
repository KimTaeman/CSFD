const DetailCoven = () => {
  return (
    <div className="font-inter group w-full max-w-5xl transform rounded-3xl bg-black/10 backdrop-blur-lg transition-all duration-500 ease-in-out hover:scale-[1.02]">
      <div className="relative z-10 flex flex-col items-start justify-start space-y-2 p-6">
        {/* Decorative Elements */}
        <div className="mb-4" />

        {/* Detail Paragraphs */}
        <blockquote className="font-inter md:text-md space-y-4 text-left text-sm leading-relaxed font-medium text-pretty break-words hyphens-auto text-white md:text-lg [&>p]:indent-4 md:[&>p]:indent-8">
          <p>
            In Computer Science, we're taught to think logically. We work with clear inputs, follow
            structured flows, and expect predictable outcomes. But beneath every system, there's a
            layer you can't debug or compile. Something that doesn't follow instructions. That's
            where the real magic begins.
          </p>
          <p>
            Some of us do more than just write code, we open doors to new possibilities. We don't
            just analyze data, we start to see the future in it. And when we define variables,
            we're not just holding values, we're capturing potential.
          </p>
          <p>
            You're not just learning logic. You're learning to shape the invisible rules that guide
            everything around us.
          </p>
        </blockquote>

        {/* Decorative Elements */}
        <div className="mt-4 flex w-full justify-center">
          <div className="flex items-center space-x-4 select-none">
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60 transition-all duration-500 group-hover:w-20"></div>
            <div className="pulse-custom text-2xl text-yellow-400 transition-all duration-500 group-hover:text-3xl">
              ✦
            </div>
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60 transition-all duration-500 group-hover:w-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCoven;
