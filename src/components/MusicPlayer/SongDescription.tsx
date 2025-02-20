import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import { Song } from "../../types"
import { getTime } from "../../utils/utils"

interface SongDescriptionProps {
    actualSong: Song
    duration: number
    currentTime: number,
    handleShowAddToPlayList: () => void,
}

export const SongDescription = ({actualSong, currentTime, duration, handleShowAddToPlayList}: SongDescriptionProps) => {
    return (
        <div className="song-info">
            <img src={actualSong?.image}
                alt=""
            />
            <div>
                <p>
                    {actualSong?.title}
                </p>
                <p className="fc-broken-white">
                    {actualSong?.subtitle} -
                    <span className="time">
                        {getTime(currentTime)} / {duration ? getTime(duration) : ""}
                    </span>
                </p>
            </div>
            <FontAwesomeIcon icon={faCirclePlus} className="control-icons" onClick={handleShowAddToPlayList} />
        </div>
    )
}