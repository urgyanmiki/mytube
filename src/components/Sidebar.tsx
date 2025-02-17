import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { useAppSelector } from '../store/hook';
import { SidebarPlaylist } from './SidebarPlaylist';
import { toggleShowAddPlaylistModal } from '../features/playlistSlice';
import { startPlaylist } from '../features/playerSlice';
import { Playlist } from '../types';

export const Sidebar = () => {
    const playlists = useAppSelector((state) => state.playlist.playlists)

    const dispatch = useDispatch();

    // TODO: ID alapján kérje ki
    const handleStartPlaylist = (playlist: Playlist) => {
        // if(playlist.songs.length > 0){
        //     dispatch(playSong(playlist.songs[0]))
        // }

        dispatch(startPlaylist(playlist));
    }

    return (
        <nav className="sidebar">
            <div className="branding">
                <h1>
                    <span className="fc-third">My</span>Tube Music
                </h1>
            </div>
            <div className="nav-links">
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/playlists">  Playlists </NavLink>
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
                        handleStartPlaylist={() => handleStartPlaylist(playlist)}
                    />
                ))}
            </div>
        </nav>
    )
}