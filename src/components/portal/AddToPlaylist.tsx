import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { Playlist } from '../../types';
import { addToPlaylist } from '../../features/playlistSlice';
import { useAppDispatch,  useAppSelector } from "../../store/hook";

interface AddToPlaylistModalProps {
    handleOnCloseModal: () => void,
    playlists: Array<Playlist>
}

export const AddToPlaylist = ({ handleOnCloseModal, playlists }: AddToPlaylistModalProps) => {
    const { actualSong } = useAppSelector((state) => state.musicPlayer);
    const dispatch = useAppDispatch();

    const handleAddToPlaylist = (id: number) => {
        if(actualSong){
            dispatch(addToPlaylist({
                id, 
                song: actualSong
            }));
        }

        handleOnCloseModal();
    }

    return (
        <div className="modal">
            <div className="overlay" onClick={handleOnCloseModal} />
            <div className="content">
                <h2 className="modal-header">
                    Select the playlist
                </h2>
                <div className="modal-body">
                    {playlists.map(playlist =>
                        <div className="play-list-row" key={playlist.id}>
                            <span className="title">
                                {playlist.title}
                            </span>
                            <button 
                            className="btn-default primary-btn btn-white-color"
                            onClick={() => handleAddToPlaylist(playlist.id)}
                            >
                                <FontAwesomeIcon icon={faPlus} /> Select
                            </button>
                        </div>
                    )}
                </div>
                <div className="modal-footer">
                    <span className="c-pointer" onClick={handleOnCloseModal}>
                        Close
                    </span>
                </div>
            </div>
        </div>
    )
}
