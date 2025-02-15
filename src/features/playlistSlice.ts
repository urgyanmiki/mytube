import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
        toggleShowAddToPlaylistModal: (state) => {
            state.showAddToPlayListModal = !state.showAddToPlayListModal
        },
        addToPlaylist: (state, action: PayloadAction<{ id: string, song: Song }>) => {
            const playlist = state.playlists.find((p) => p.id === action.payload.id);
            if (playlist) {
                playlist.songs.push(action.payload.song);
            }
        },
        removeFromPlaylist: (state, action: PayloadAction<{playlistId: string, songId: string}> ) => {
            const playlist = state.playlists.find((p) => p.id === action.payload.playlistId);

            if(playlist){
                // playlist.songs.find((s) => s.id !== action.payload.songId);
                // playlist.splice(playlist.findIndex(playlist.songs.find((s) => s.id === action.payload.songId)), 1);
            }
        }
    }
});

export default playlistSlice.reducer;
export const { toggleShowAddPlaylistModal, addPlaylist, toggleShowAddToPlaylistModal, addToPlaylist, removeFromPlaylist } = playlistSlice.actions;