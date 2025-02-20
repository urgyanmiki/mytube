import { useDispatch } from 'react-redux';

import { togglePlayPause, prevSong, nextSong } from '../../features/playerSlice';
import { toggleShowAddToPlaylistModal } from '../../features/playlistSlice';
import { useAppSelector } from '../../store/hook';
import { Controls } from './Controls';
import { Audio } from './Audio';
import { Volume } from './Volume';
import { useState } from 'react';
import { Seekbar } from './Seekbar';
import { SongDescription } from './SongDescription';

export const MusicPlayer = () => {
    const [volume, setVolume] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [seekTime, setSeekTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const { isPlaying, actualSong } = useAppSelector((state) => state.musicPlayer);
    const dispatch = useDispatch();

    const handleTogglePlayPause = () => {
        dispatch(togglePlayPause());
    }

    const handleShowAddToPlayList = () => {
        dispatch(toggleShowAddToPlaylistModal());
    }

    const handlePrevSong = () => {
        dispatch(prevSong())
    }

    const handleNextSong = () => {
        dispatch(nextSong())
    }

    const handleChangeVolume = (volume: number) => {
        setVolume(volume);
    }

    const onSetCurrentTime = (currentTime: number) => {
        setCurrentTime(currentTime)
    }

    const onSetDuration = (duration: number) => {
        setDuration(duration)
    }

    const onSetSeekTime = (seekTime: number) => {
        setSeekTime(seekTime)
    }

    return (
        <div className="music-player">
            <Seekbar
                currentTime={currentTime}
                duration={duration}
                onSetSeekTime={onSetSeekTime}
            />
            <Controls
                isPlaying={isPlaying}
                handlePlayPause={handleTogglePlayPause}
                handleNextSong={handleNextSong}
                handlePrevSong={handlePrevSong}
            />
            <Audio
                isPlaying={isPlaying}
                onSetCurrentTime={onSetCurrentTime}
                onSetDuration={onSetDuration}
                volume={volume}
                seekTime={seekTime}
                actualSong={actualSong}
                handleNextSong={handleNextSong}
            />
            <SongDescription
                actualSong={actualSong}
                currentTime={currentTime}
                duration={duration}
                handleShowAddToPlayList={handleShowAddToPlayList}
            />
            <Volume
                volume={volume}
                handleChangeVolume={handleChangeVolume}
            />
        </div>
    )
}