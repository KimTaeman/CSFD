const HouseDetail = () => {
    return (
        <div className="bg-white/40 backdrop-blur-lg border border-white/50 
                        hover:bg-white/60 hover:border-white/70 hover:shadow-3xl transition-all duration-300 ease-in-out 
                        w-[985px] rounded-3xl shadow-2xl font-medium font-['Inter'] text-black">

            <div className="flex flex-col justify-start items-start p-5">
                <p className="break-words hyphens-auto leading-relaxed text-left">
                    You are a natural connector. You understand both people and systems—and you know how to get them to talk. You love building bridges: APIs, interfaces, relationships, ideas.
                </p>
                <p className="break-words hyphens-auto leading-relaxed text-left">
                    You are likely to be a full-stack dev, a systems integrator, or the friend everyone goes to when they need something "to just work."
                </p>
            </div>

        </div>
    );
}

export default HouseDetail;