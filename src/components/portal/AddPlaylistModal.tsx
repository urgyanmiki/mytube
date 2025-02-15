import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Playlist } from '../../types';
import { useRef } from 'react';

interface AddPlaylistModalProps {
    handleOnCloseModal: () => void,
    handleOnAddPlaylist: (newPlaylist: Playlist) => void
}

export const AddPlaylistModal = ({ handleOnCloseModal, handleOnAddPlaylist }: AddPlaylistModalProps) => {
    const titleInput = useRef('');
    const descriptionInput = useRef('');

    const onAddPlaylist = () => {
        const newPlaylist = {
            id: `${Math.random() * Math.random() * 100}`,
            title: titleInput.current.value,
            description: descriptionInput.current.value,
            songs: []
        }

        handleOnAddPlaylist(newPlaylist);
        titleInput.current.value = '';
        descriptionInput.current.value = '';
        handleOnCloseModal();
    }

    return (
        <div className="modal">
            <div className="overlay" onClick={handleOnCloseModal} />
            <div className="content">
                <h2 className="modal-header">
                    Create new playlist
                </h2>
                <div className="modal-body">
                    <div className="input-group">
                        <label htmlFor="title">
                            *Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            ref={titleInput}
                            className="default-input"
                            placeholder="Enter playlist name..."
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="description">
                            Description
                        </label>
                        <input
                            type="text"
                            id="description"
                            ref={descriptionInput}
                            className="default-input"
                            placeholder="Describe your playlist..."
                        />
                    </div>
                </div>
                <div className="modal-footer">
                    <span className="c-pointer" onClick={handleOnCloseModal}>
                        Close
                    </span>
                    <button onClick={onAddPlaylist} className="btn-default primary-btn btn-white-color">
                        <FontAwesomeIcon icon={faPlus} /> Create
                    </button>
                </div>
            </div>
        </div>
    )
}