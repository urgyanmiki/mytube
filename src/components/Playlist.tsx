import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

interface PlaylistProps {
    id: number,
    img: string,
    title: string,
    description: string,
    handleStartPlaylist: () => void,
}

export const Playlist = ({ id, img, title, description, handleStartPlaylist }: PlaylistProps) => {
    const navigate = useNavigate();

    const openPlaylist = () => {
        const path = `/playlists/${id}`;
        navigate(path);
    }

    return (
        <div className="playlist-box">
            <div className="position-relative">
                <img src={img} alt="" />
                <div className="menu">
                    <div className="actions">
                        <FontAwesomeIcon icon={faCircleArrowRight} onClick={openPlaylist} />
                        <FontAwesomeIcon icon={faCirclePlay} onClick={handleStartPlaylist} />
                    </div>
                </div>
            </div>
            <p className="title">
                {title}
            </p>
            <p className="description">
                {description}
            </p>
        </div>
    )
}