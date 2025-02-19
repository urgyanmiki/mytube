import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


interface VolumeProps {
    volume: number,
    handleChangeVolume: (volume: number) => void
}

export const Volume = ({ volume, handleChangeVolume }: VolumeProps) => {

    return (
        <div className="volume">
            <input type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                className="volume-bar"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChangeVolume(+event.target.value)}
            />
            <FontAwesomeIcon icon={faVolumeHigh} className="control-icons" />
        </div>
    )
    
}