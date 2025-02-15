import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep, faCirclePause, faForwardStep, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';

interface ControlsProps {
    isPlaying: boolean
    handlePlayPause: () => void,
    handleNextSong: () => void,
    handlePrevSong: () => void,
}

export const Controls = ({isPlaying, handlePlayPause, handleNextSong, handlePrevSong }: ControlsProps) => {

    return (
        <div className='controls'>
            <FontAwesomeIcon icon={faBackwardStep} className='control-icons' onClick={handlePrevSong} />
            <span className="toggle-box">
                {isPlaying ?
                    <FontAwesomeIcon icon={faCirclePause} className='control-icons' onClick={() => handlePlayPause() } />
                    : <FontAwesomeIcon icon={faPlay} className='control-icons' onClick={() => handlePlayPause()} />
                }
            </span>
            <FontAwesomeIcon icon={faForwardStep} className='control-icons' onClick={handleNextSong} />
        </div>
    )
}