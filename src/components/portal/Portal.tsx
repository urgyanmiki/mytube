import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../store/hook';
import { AddPlaylistModal } from './AddPlaylistModal';
import { toggleShowAddPlaylistModal, toggleShowAddToPlaylistModal, addPlaylist } from '../../features/playlistSlice';
import { Playlist } from '../../types';
import { AddToPlaylist } from './AddToPlaylist';

export const Portal = () => {
    const showAddPlaylistModal = useAppSelector((state) => state.playlist.showAddPlaylistModal);
    const showAddToPlaylistModal = useAppSelector((state) => state.playlist.showAddToPlayListModal);
    const playlists = useAppSelector((state) => state.playlist.playlists);

    const dispatch = useDispatch();

    const handleOnAddPlaylist = (newPlaylist: Playlist) => {
        dispatch(addPlaylist(newPlaylist))
    }
    
    return (
        <>
            {showAddPlaylistModal && createPortal(
                <AddPlaylistModal 
                    handleOnCloseModal={() => dispatch(toggleShowAddPlaylistModal())}
                    handleOnAddPlaylist={handleOnAddPlaylist}
                    />,
                document.body
            )}
            {showAddToPlaylistModal && createPortal(
                <AddToPlaylist 
                    handleOnCloseModal={() => dispatch(toggleShowAddToPlaylistModal())}
                    playlists={playlists}
                    />,
                document.body
            )}
        </>
    )

}