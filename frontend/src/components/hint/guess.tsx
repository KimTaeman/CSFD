function Guess() {
  return (
    <div className="flex flex-col">
      <h1 className="mb-8 font-[Poppins] text-2xl">Guess your P'code 💚💚💚</h1>

      <div className="flex w-full items-center gap-4">
        <input
          type="text"
          placeholder="ex. 880"
          className="min-h-14 flex-1 rounded-2xl border-none bg-white px-4 py-3 text-xl text-black placeholder-gray-400 outline-none"
        />
        <button className="ml-1 rounded-2xl bg-orange-400 px-6 py-3 text-xl whitespace-nowrap text-white transition-colors hover:bg-orange-500">
          Send
        </button>
      </div>
    </div>
  );
}

export default Guess;
