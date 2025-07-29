import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';

const MusicContext = createContext<{
  playing: boolean;
  toggle: () => void;
  setVolume: (v: number) => void;
  volume: number;
}>({
  playing: false,
  toggle: () => {},
  setVolume: () => {},
  volume: 0.3,
});

export const useMusic = () => useContext(MusicContext);

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasInteracted = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.3); // Lower default volume for desktop

  const toggle = useCallback(() => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play().catch(console.warn);
    } else {
      audioRef.current.pause();
    }
  }, []);

  const setVolume = useCallback((v: number) => {
    const clampedVolume = Math.max(0, Math.min(1, v)); // Clamp between 0 and 1
    setVolumeState(clampedVolume);
    if (audioRef.current) {
      audioRef.current.volume = clampedVolume;
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      playing,
      toggle,
      setVolume,
      volume,
    }),
    [playing, toggle, setVolume, volume],
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setPlaying(true);
    const handlePause = () => setPlaying(false);
    const handleEnded = () => setPlaying(false);
    const handleError = () => console.warn('Audio playback error');

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    audio.volume = volume;
    setPlaying(!audio.paused);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [volume]);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (hasInteracted.current) return;
      hasInteracted.current = true;

      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(console.warn);
      }
    };

    const events = ['click', 'keydown', 'touchstart'];
    events.forEach((event) => {
      document.addEventListener(event, handleFirstInteraction, { once: true, passive: true });
    });

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, handleFirstInteraction);
      });
    };
  }, []);

  return (
    <MusicContext.Provider value={contextValue}>
      {children}
      <audio
        ref={audioRef}
        src="/sounds/bg-music.mp3"
        loop
        preload="metadata"
        style={{ display: 'none' }}
      />
    </MusicContext.Provider>
  );
};
