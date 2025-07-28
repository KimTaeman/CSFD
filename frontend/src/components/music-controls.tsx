import React, { useCallback, useMemo, useState, useRef, useEffect } from 'react';
import { useMusic } from '@/context/MusicContext';
import {IconPlayerPause, IconPlayerPlay} from "@tabler/icons-react";
import '../styles/music.css';

const MusicControls = React.memo(() => {
    const { playing, toggle, setVolume, volume } = useMusic();
    const [isVolumeChanging, setIsVolumeChanging] = useState(false);
    const [announcedVolume, setAnnouncedVolume] = useState(volume);
    const volumeTimeoutRef = useRef<NodeJS.Timeout>(null);
    const sliderRef = useRef<HTMLInputElement>(null);

    const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number(e.target.value);
        setVolume(newVolume);
        setIsVolumeChanging(true);

        if (volumeTimeoutRef.current) {
            clearTimeout(volumeTimeoutRef.current);
        }

        volumeTimeoutRef.current = setTimeout(() => {
            setAnnouncedVolume(newVolume);
            setIsVolumeChanging(false);
        }, 500);
    }, [setVolume]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        switch (e.key) {
            case ' ':
            case 'Enter':
                e.preventDefault();
                toggle();
                break;
            case 'ArrowUp':
            case 'ArrowRight':
                if (e.target === sliderRef.current) {
                    e.preventDefault();
                    const newVolume = Math.min(1, volume + 0.1);
                    setVolume(newVolume);
                }
                break;
            case 'ArrowDown':
            case 'ArrowLeft':
                if (e.target === sliderRef.current) {
                    e.preventDefault();
                    const newVolume = Math.max(0, volume - 0.1);
                    setVolume(newVolume);
                }
                break;
            case 'Home':
                if (e.target === sliderRef.current) {
                    e.preventDefault();
                    setVolume(0);
                }
                break;
            case 'End':
                if (e.target === sliderRef.current) {
                    e.preventDefault();
                    setVolume(1);
                }
                break;
        }
    }, [toggle, volume, setVolume]);

    const volumePercentage = useMemo(() => Math.round(volume * 100), [volume]);
    const announcedVolumePercentage = useMemo(() => Math.round(announcedVolume * 100), [announcedVolume]);

    useEffect(() => {
        return () => {
            if (volumeTimeoutRef.current) {
                clearTimeout(volumeTimeoutRef.current);
            }
        };
    }, []);

    const volumeAriaLabel = useMemo(() =>
            `Music volume, ${volumePercentage}%`,
        [volumePercentage]
    );

    return (
        <div
            className="music-controls"
            role="group"
            aria-label="Music playback controls"
            onKeyDown={handleKeyDown}
        >
            <button
                onClick={toggle}
                className="control-button customized-cursor"
                type="button"
                aria-label={playing ? 'Pause background music' : 'Play background music'}
                aria-pressed={playing}
                title={playing ? 'Pause music (Space)' : 'Play music (Space)'}
            >
                {playing ? <IconPlayerPause /> : <IconPlayerPlay />}
            </button>

            <div className="volume-control" role="group" aria-label="Volume control">
                <input
                    ref={sliderRef}
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={handleVolumeChange}
                    className="volume-slider customized-cursor"
                    aria-label={volumeAriaLabel}
                    aria-valuetext={`${volumePercentage}%`}
                    title={`Volume: ${volumePercentage}% (Use arrow keys to adjust)`}
                />

                <span className="volume-display font-poppins text-xs" aria-hidden="true">
                    {volumePercentage}%
                </span>
            </div>

            <div
                className="sr-only"
                aria-live="polite"
                aria-atomic="true"
            >
                {!isVolumeChanging && announcedVolumePercentage !== Math.round(volume * 100) ?
                    `Volume set to ${announcedVolumePercentage}%` : ''
                }
            </div>

            <div className="sr-only">
                Music controls: Press Space or Enter to toggle playback.
                Use Tab to navigate to volume slider, then arrow keys to adjust volume.
            </div>
        </div>
    );
});

export default MusicControls;