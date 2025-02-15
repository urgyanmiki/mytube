import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

interface SidebarPlaylistProps {
    id: number,
    title: string,
    handleStartPlaylist: () => void
}

export const SidebarPlaylist = ({ id, title, handleStartPlaylist }: SidebarPlaylistProps) => {
    const navigate = useNavigate();

    const onNavigate = () => {
        const path = `playlists/${id}`;
        navigate(path)
    }

    return (
        <div className="playlist" onClick={onNavigate}>
            <p>
                {title}
            </p>
            <FontAwesomeIcon className='play-icon' icon={faCirclePlay} size="1x" onClick={handleStartPlaylist} />
        </div>
    )

}