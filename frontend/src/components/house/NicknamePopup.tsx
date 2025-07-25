import { useState } from 'react';

interface NickNameProps {
  onSubmit: (nickname: string) => void;
}

const NickName: React.FC<NickNameProps> = ({ onSubmit }) => {
  const [nickname, setNickname] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nickname.trim()) {
      onSubmit(nickname.trim());
    }
  };

  return (
    <div className="hover:shadow-3xl font-inter w-full max-w-2xl rounded-3xl border-none bg-white/40 p-6 font-medium text-black shadow-2xl backdrop-blur-lg transition-all duration-300 ease-in-out hover:bg-white/50">
      <h1 className="font-inter text- mb-8 text-center text-xl font-bold text-gray-800">
        What shall we call you in the enchanted realm?
      </h1>
      <form onSubmit={handleSubmit} className="font-inter space-y-6 font-medium">
        <input
          type="text"
          placeholder="Nickname here"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-700 placeholder-gray-400 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-orange-400 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="text-bold w-full transform rounded-xl bg-orange-500 px-6 py-4 font-medium text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-orange-600 hover:shadow-xl active:scale-95"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default NickName;
