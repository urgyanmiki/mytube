import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faTrash, faPen, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

import { useAppSelector } from '../store/hook';
import { useAppDispatch } from '../store/hook.js';
import { startPlaylist } from "../features/playerSlice.js";
import { removeFromPlaylist, updatePlaylist } from '../features/playlistSlice.js';

const Playlist = () => {
    const [isEdit, setIsEdit] = useState(false);
    let { playlistId } = useParams();

    const playlists = useAppSelector((state) => state.playlist.playlists);
    const dispatch = useAppDispatch();
 
    let selectedPlaylist = null
    if(playlistId){
        selectedPlaylist = playlists.filter(actaulPlaylist => actaulPlaylist.id === +playlistId)[0];
    }

    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    
    const editPlaylist = () => {
        if(selectedPlaylist && titleRef.current && descriptionRef.current){
            dispatch(updatePlaylist({
                id: selectedPlaylist.id, 
                title: titleRef.current.value, 
                description: descriptionRef.current.value
            }));
        }

        setIsEdit(prevState => !prevState);
    }

    return (
        <div className="container">
            <div className="playlist-page">
                <div className="descriptiton">
                    <div className="position-relative mb-4">
                        <img src={selectedPlaylist && selectedPlaylist.songs.length > 0 ? selectedPlaylist.songs[0].image : "https://placehold.co/400"} alt="" className="playlist-img" />
                    </div>
                    <div className="mb-4">
                        {!isEdit ?
                            <div>
                                <h2 className="">
                                    {selectedPlaylist?.title}
                                </h2>
                                <h3 className="">
                                    {selectedPlaylist?.description}
                                </h3>
                                <p className="mb-4">
                                    ({selectedPlaylist?.songs.length}) Songs
                                </p>
                            </div> :
                            <div>
                                <input
                                    type="text"
                                    ref={titleRef}
                                    className="default-input w-100"
                                    defaultValue={selectedPlaylist?.title}
                                />
                                <input
                                    type="text"
                                    className="default-input w-100"
                                    ref={descriptionRef}
                                    defaultValue={selectedPlaylist?.description}
                                />
                            </div>
                        }
                    </div>
                    {isEdit ?
                        <button
                            className="btn btn-default primary-btn btn-white-color"
                            onClick={() => editPlaylist()} >
                            <FontAwesomeIcon icon={faFloppyDisk} /> Save
                        </button> :
                        <button className="btn btn-default primary-btn btn-white-color" onClick={() => setIsEdit(prevState => !prevState)} >
                            <FontAwesomeIcon icon={faPen} /> Edit
                        </button>
                    }
                </div>
                <div className="song-list">
                    {selectedPlaylist?.songs.map((song, index) =>
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
                                    onClick={() => dispatch(startPlaylist({ songs: selectedPlaylist.songs, currentIndex: index }))}
                                />
                                <FontAwesomeIcon icon={faTrash}
                                    className="start-list-icon"
                                    onClick={() => dispatch(removeFromPlaylist({ playlistId: selectedPlaylist.id, songId: song.id }))}
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