import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

interface SongProps {
    title: string,
    description: string,
    image: string,
    handlePlaySong: () => void
}

export const Song = ({ title, description, image, handlePlaySong }: SongProps) => {
    return (
        <div className="playlist-box">
            <img src={image} alt="" />
            <p className="title">
                {title}
            </p>
            <p className="description">
                {description}
            </p>
            <div className="menu">
                <div className='actions'>
                    <FontAwesomeIcon icon={faCirclePlay} onClick={handlePlaySong} />
                </div>
            </div>
        </div>
    )
}