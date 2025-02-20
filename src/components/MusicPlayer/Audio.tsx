import { useRef, useEffect } from "react";

import { Song } from '../../types';

interface SongInfoProps {
    isPlaying: boolean,
    volume: number,
    seekTime: number,
    onSetDuration: (duration: number) => void,
    onSetCurrentTime: (currentTime: number) => void,
    actualSong?: Song,
    handleNextSong: () => void,
}

export const Audio = ({ isPlaying, volume, onSetCurrentTime, seekTime, onSetDuration, actualSong, handleNextSong }: SongInfoProps) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play();
            audioRef.current.currentTime = 0;
        }
    }, [actualSong]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.currentTime = seekTime;
        }
    }, [seekTime]);


    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying])

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    const updateTime = () => {
        if (audioRef.current) {
            onSetCurrentTime(audioRef.current.currentTime);
        }
    }

    const handleLoadedMetaData = () => {
        if(audioRef.current){
            onSetDuration(audioRef.current?.duration);
        }
    }

    return (
            <audio
                ref={audioRef}
                onTimeUpdate={updateTime}
                src={actualSong?.audioSrc}
                onEnded={handleNextSong}
                onLoadedMetadata={handleLoadedMetaData}
            />
    )
}