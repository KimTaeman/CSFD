const HouseDetail = () => {
  return (
    <div className="hover:shadow-3xl font-inter w-full max-w-5xl rounded-3xl border border-white/50 bg-white/40 font-medium text-black shadow-2xl backdrop-blur-lg transition-all duration-300 ease-in-out hover:border-white/70 hover:bg-white/60">
      <div className="flex flex-col items-start justify-start p-5">
        <p className="text-left leading-relaxed break-words hyphens-auto">
          You are a natural connector. You understand both people and systems—and you know how to
          get them to talk. You love building bridges: APIs, interfaces, relationships, ideas.
        </p>
        <p className="text-left leading-relaxed break-words hyphens-auto">
          You are likely to be a full-stack dev, a systems integrator, or the friend everyone goes
          to when they need something "to just work."
        </p>
      </div>
    </div>
  );
};

export default HouseDetail;
