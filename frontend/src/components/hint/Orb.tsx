import { useEffect, useState } from 'react';

interface OrbProps {
  code: string;
  isRevealing: boolean;
  onRevealComplete?: () => void;
}

const MagicalOrb = ({ code, isRevealing, onRevealComplete }: OrbProps) => {
  const [revealed, setRevealed] = useState<string[]>(['', '', '']);

  useEffect(() => {
    if (!isRevealing) {
      setRevealed(['', '', '']);
      return;
    }

    if (code) {
      const chars = code.split('');
      const revealDuration = 1200;

      chars.forEach((char, index) => {
        setTimeout(
          () => {
            setRevealed((prev) => {
              const updated = [...prev];
              updated[index] = char;
              return updated;
            });
          },
          revealDuration * (index + 1),
        );
      });

      if (onRevealComplete && chars.length > 0) {
        const totalRevealTime = revealDuration * chars.length;
        setTimeout(() => {
          onRevealComplete();
        }, totalRevealTime);
      }
    }
  }, [isRevealing, code, onRevealComplete]);

  return (
    <div className="relative mx-auto size-56 rounded-full bg-gradient-to-br from-indigo-900 to-black shadow-2xl ring-4 ring-purple-700/30">
      <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-t from-purple-400/10 via-transparent to-pink-500/10 blur-md" />
      <div className="absolute inset-0 animate-ping rounded-full bg-purple-500/10 blur-lg" />
      <div className="z-10 flex h-full items-center justify-center gap-3 text-6xl font-bold text-white">
        {revealed.map((digit, i) => (
          <span
            key={i}
            className={`transition-all duration-700 ease-out ${
              digit ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}
          >
            {digit || '*'}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MagicalOrb;
