import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect } from 'react';

import { getTime } from '../../utils/utils';
import { Song } from '../../types';

interface SongInfoProps {
    isPlaying: boolean,
    volume: number,
    seekTime: number,
    handleShowAddToPlayList: () => void,
    onSetDuration: (duration: number) => void,
    onSetCurrentTime: (currentTime: number) => void,
    actualSong?: Song
}

export const SongInfo = ({ isPlaying, volume, handleShowAddToPlayList, onSetCurrentTime, seekTime, onSetDuration, actualSong }: SongInfoProps) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const duration = audioRef.current?.duration;

    useEffect(() => {
        onSetDuration(duration);
        audioRef.current.currentTime = 0;
    }, [actualSong]);

    useEffect(() => {
        audioRef.current.currentTime = seekTime;
    }, [seekTime]);

    // isActive változik akkro is renderelődjön
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying])

    useEffect(() => {
        audioRef.current.volume = volume;
    }, [volume]);

    const updateTime = () => {
        onSetCurrentTime(audioRef.current.currentTime);
    }

    return (
        <div className="song-info">
            <audio
                ref={audioRef}
                onTimeUpdate={updateTime}
                src={actualSong?.audioSrc}
            />
            <img src={actualSong?.image}
                alt=""
            />
            <div>
                <p>
                    {actualSong?.title}
                </p>
                <p className='fc-broken-white'>
                    {actualSong?.subtitle} - <span className="time"> {getTime(audioRef.current?.currentTime)} / {duration ? getTime(duration) : ''} </span>
                </p>
            </div>
            <FontAwesomeIcon icon={faCirclePlus} className='control-icons' onClick={handleShowAddToPlayList} />

        </div>
    )
}