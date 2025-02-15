import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

import { useAppSelector } from "../store/hook";
import { useAppDispatch } from '../store/hook.js';
// import { Playlist } from "../types";

const Playlist = () => {
    const playlists = useAppSelector((state) => state.playlist.playlists)
    let { playlist } = useParams();

    let selectedPlaylist = playlists.filter(actaulPlaylist => actaulPlaylist.title === playlist)[0];

    return (
        <div className="container">
            <div className="playlist-page">
                <div className="descriptiton">
                    <h2 className="mb-4">
                        {selectedPlaylist.title}
                    </h2>
                    <img src={selectedPlaylist.songs[0].image} alt="" className="playlist-img" />
                </div>
                <div className="song-list">
                    {selectedPlaylist.songs.map(song =>
                        <div className="">
                            <img src={song.image} alt="" className="" />
                            <div className="">
                                <p>
                                    {song.title}
                                </p>
                                <p>
                                    {song.subtitle}
                                </p>
                            </div>
                            <FontAwesomeIcon icon={faCirclePlay} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Playlist;