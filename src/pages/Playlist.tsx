import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faTrash } from '@fortawesome/free-solid-svg-icons';

import { useAppSelector } from "../store/hook";
import { useAppDispatch } from '../store/hook.js';
import { removeFromPlaylist } from "../features/playlistSlice.js";
import { startPlaylist } from "../features/playerSlice.js";
import { current } from "@reduxjs/toolkit";
// import { Playlist } from "../types";

const Playlist = () => {
    let { playlist } = useParams();

    const playlists = useAppSelector((state) => state.playlist.playlists);
    const dispatch = useAppDispatch();

    let selectedPlaylist = playlists.filter(actaulPlaylist => actaulPlaylist.title === playlist)[0];

    return (
        <div className="container">
            <div className="playlist-page">
                <div className="descriptiton">
                    <img src={selectedPlaylist.songs[0].image} alt="" className="playlist-img mb-4" />
                    <h2 className="">
                        {selectedPlaylist.title}
                    </h2>
                    <h3 className="">
                        {selectedPlaylist.description}
                    </h3>
                    <p>
                        ({selectedPlaylist.songs.length}) Songs
                    </p>
                </div>
                <div className="song-list">
                    {selectedPlaylist.songs.map((song, index) =>
                    //TODO: Majd átírni id-ra
                        <div className="song-row" key={song.title}>
                            <div className="song-title-img">
                                <img src={song.image} alt="" className="" />
                                <div className="">
                                    <p className="title">
                                        {song.title}
                                    </p>
                                    <p className="description">
                                        {song.subtitle}
                                    </p>
                                </div>
                            </div>
                            <div className="icon-box">
                                <FontAwesomeIcon icon={faCirclePlay} className="start-list-icon" 
                                    onClick={() => dispatch(startPlaylist({songs: selectedPlaylist.songs, currentIndex: index}))}
                                />
                                <FontAwesomeIcon icon={faTrash}
                                    className="start-list-icon"
                                    // onClick={() => dispatch(removeFromPlaylist({ playlistId: selectedPlaylist.id, songId: song.id }))}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Playlist;