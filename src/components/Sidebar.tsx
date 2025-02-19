import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHouse, faMusic } from "@fortawesome/free-solid-svg-icons";

import { useAppSelector } from '../store/hook';
import { SidebarPlaylist } from './SidebarPlaylist';
import { toggleShowAddPlaylistModal } from '../features/playlistSlice';
import { startPlaylist } from '../features/playerSlice';

export const Sidebar = () => {
    const playlists = useAppSelector((state) => state.playlist.playlists)
    const dispatch = useDispatch();

    return (
        <nav className="sidebar">
            <div className="branding">
                <h1>
                    <span className="fc-third">My</span>Tube Music
                </h1>
            </div>
            <div className="nav-links">
                <NavLink to="/"> <FontAwesomeIcon icon={faHouse} /> Home </NavLink>
                <NavLink to="/playlists"> <FontAwesomeIcon icon={faMusic} /> Playlists </NavLink>
            </div>
            <div className="playlists">
                <button className="btn btn-default primary-btn btn-main-color" onClick={() => dispatch(toggleShowAddPlaylistModal())}>
                    <FontAwesomeIcon icon={faPlus} /> New playlist
                </button>
                {playlists.map(playlist => (
                    <SidebarPlaylist
                        key={playlist.id}
                        title={playlist.title}
                        id={playlist.id}
                        handleStartPlaylist={() => dispatch(startPlaylist({
                            songs: playlist.songs,
                            currentIndex: 0
                        }))}
                    />
                ))}
            </div>
        </nav>
    )
}