import React, { createContext, useContext, useRef, useState, useEffect } from 'react';

const MusicContext = createContext<{
  playing: boolean;
  toggle: () => void;
  setVolume: (v: number) => void;
  volume: number;
}>({
  playing: false,
  toggle: () => {},
  setVolume: () => {},
  volume: 1,
});

export const useMusic = () => useContext(MusicContext);

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolumeState] = useState(1);

  const toggle = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  };

  const setVolume = (v: number) => {
    setVolumeState(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  // Sync playing state with audio element events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setPlaying(true);
    const handlePause = () => setPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    setPlaying(!audio.paused);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  // Autoplay after user interaction (browser policy)
  useEffect(() => {
    const resume = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(() => {});
      }
      window.removeEventListener('click', resume);
    };
    window.addEventListener('click', resume);
    return () => window.removeEventListener('click', resume);
  }, []);

  return (
    <MusicContext.Provider value={{ playing, toggle, setVolume, volume }}>
      {children}
      <audio ref={audioRef} src="/bg-music.mp3" loop preload="auto" style={{ display: 'none' }} />
    </MusicContext.Provider>
  );
};
