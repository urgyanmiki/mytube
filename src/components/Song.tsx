import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

interface SongProps {
    title: string
    subtitle: string
    image: string
    artistId: number
    handlePlaySong: () => void
}

export const Song = ({ title, subtitle: description, image, artistId, handlePlaySong }: SongProps) => {
    const navigate = useNavigate();

    const onOpenArtist = (artistId: number) => {
        const path = `/artist/${artistId}`;
        navigate(path);
    }

    return (
        <div className="playlist-box">
            <div className="position-relative">
                <img src={image} alt="" loading="lazy" />
                <div className="menu">
                    <div className="actions">
                        <FontAwesomeIcon icon={faCirclePlay} onClick={handlePlaySong} />
                    </div>
                </div>
            </div>
            <p className="title c-pointer" onClick={handlePlaySong} >
                {title}
            </p>
            <p className="description" onClick={() => onOpenArtist(artistId)}>
                {description}
            </p>
        </div>
    )
}