import { useMusic } from '@/context/MusicContext';
import '../styles/music.css';

const MusicControls = () => {
  const { playing, toggle, setVolume, volume } = useMusic();

  return (
    <div className="music-controls">
      <button
        onClick={toggle}
        className="control-button"
        aria-label={playing ? 'Pause music' : 'Play music'}
      >
        {playing ? (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        ) : (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 3l14 9-14 9V3z"></path>
          </svg>
        )}
      </button>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        className="volume-slider"
        aria-label="Music volume"
      />
    </div>
  );
};

export default MusicControls;
