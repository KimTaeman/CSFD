import { useEffect, useState } from 'react';

interface SlotProps {
  finalNumber: string;
  isSpinning: boolean;
  symbols: string[];
}

const Slot = ({ finalNumber, isSpinning, symbols }: SlotProps) => {
  const [shuffledSymbols, setShuffledSymbols] = useState<string[]>([]);

  useEffect(() => {
    const symbolsCopy = [...symbols];
    const finalIndex = symbolsCopy.indexOf(finalNumber);
    if (finalIndex > -1) {
      symbolsCopy.splice(finalIndex, 1);
    }
    const shuffled = symbolsCopy.sort(() => Math.random() - 0.5);
    setShuffledSymbols([finalNumber, ...shuffled, ...shuffled, ...shuffled]);
  }, [finalNumber, symbols]);

  const reelHeight = 5 * shuffledSymbols.length;
  const finalPosition = 0;

  const transformValue = isSpinning
    ? `translateY(-${Math.random() * (reelHeight / 1.5)}rem)`
    : `translateY(${finalPosition}rem)`;

  return (
    <div className="h-24 w-20 overflow-hidden rounded-xl bg-slate-900/50 shadow-lg ring-1 shadow-purple-500/30 ring-white/10 ring-inset">
      <div
        className="flex flex-col items-center justify-center font-mono"
        style={{
          transform: transformValue,
          transition: `transform ${isSpinning ? 0.5 : 2.5}s ${isSpinning ? 'linear' : 'cubic-bezier(0.2, 0.8, 0.2, 1)'}`,
        }}
      >
        {shuffledSymbols.map((symbol, i) => (
          <div key={i} className="flex h-24 items-center justify-center text-6xl font-bold">
            <span className="bg-gradient-to-br from-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
              {symbol}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slot;
