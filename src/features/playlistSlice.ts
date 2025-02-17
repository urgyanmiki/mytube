import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Playlist, Song } from '../types/index';

interface initialState {
    showAddPlaylistModal: boolean
    showAddToPlayListModal: boolean
    playlists: Array<Playlist>
}

const initialState: initialState = {
    showAddPlaylistModal: false,
    showAddToPlayListModal: false,
    playlists: []
}

const playlistSlice = createSlice({
    name: 'playlist',
    initialState,
    reducers: {
        toggleShowAddPlaylistModal: (state) => {
            state.showAddPlaylistModal = !state.showAddPlaylistModal
        },
        addPlaylist: (state, action: PayloadAction<Playlist>) => {
            state.playlists.push(action.payload)
        },
        updatePlaylist: (state, action: PayloadAction<{ id: number, title: string, description: string }>) => {
            const playlist = state.playlists.find((p) => p.id === action.payload.id);

            if(playlist){
                playlist.title = action.payload.title;
                playlist.description = action.payload.description;
            }

        },
        toggleShowAddToPlaylistModal: (state) => {
            state.showAddToPlayListModal = !state.showAddToPlayListModal
        },
        addToPlaylist: (state, action: PayloadAction<{ id: number, song: Song }>) => {
            const playlist = state.playlists.find((p) => p.id === action.payload.id);
            if (playlist) {
                playlist.songs.push(action.payload.song);
            }
        },
        removeFromPlaylist: (state, action: PayloadAction<{playlistId: number, songId: string}> ) => {
            let playlist = state.playlists.find((p) => p.id === action.payload.playlistId);

            if(playlist){
                playlist.songs = playlist.songs.filter((s) => s.id !== action.payload.songId);
            }
        }
    }
});

export default playlistSlice.reducer;
export const { toggleShowAddPlaylistModal, addPlaylist, toggleShowAddToPlaylistModal, addToPlaylist, removeFromPlaylist, updatePlaylist } = playlistSlice.actions;