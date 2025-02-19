import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

interface SongProps {
    title: string,
    subtitle: string,
    image: string,
    handlePlaySong: () => void
}

export const Song = ({ title, subtitle: description, image, handlePlaySong }: SongProps) => {
    const navigate = useNavigate();

    const onOpenArtist = (artist: string) => {
        const path = `/artist/${artist}`;
        navigate(path);
    }

    return (
        <div className="playlist-box">
            <div className="position-relative">
                <img src={image} alt="" />
                <div className="menu">
                    <div className="actions">
                        <FontAwesomeIcon icon={faCirclePlay} onClick={handlePlaySong} />
                    </div>
                </div>
            </div>
            <p className="title c-pointer" onClick={handlePlaySong} >
                {title}
            </p>
            <p className="description" onClick={() => onOpenArtist(description)}>
                {description}
            </p>
        </div>
    )
}