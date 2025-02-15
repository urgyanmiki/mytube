import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { Song } from "../types";

interface initialState {
    isPlaying: boolean,
    isPlayerActive: boolean,
    actualSong?: Song,
    queuedSongs?: Array<Song>,
    currentIndex: number
}

const initialState: initialState = {
    isPlaying: false,
    isPlayerActive: false,
    actualSong: {},
    queuedSongs: [],
    currentIndex: 0,
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        togglePlayPause: (state) => {
            state.isPlaying = !state.isPlaying ;
        },
        playSong: (state, action) => {
            state.actualSong = action.payload;
            state.isPlayerActive = true;
            state.isPlaying = true;
        },
        startPlaylist: (state, action: PayloadAction<{ songs: Array<Song>, currentIndex: number }>) => {
            state.isPlayerActive = true;
            state.isPlaying = true;
            state.currentIndex = action.payload.currentIndex ? action.payload.currentIndex : 0;

            state.queuedSongs = action.payload.songs;
            if(state.queuedSongs){
                state.actualSong = state.queuedSongs[state.currentIndex];
            }
        },
        nextSong: (state) => {
            if(state.queuedSongs  && state.queuedSongs.length > state.currentIndex + 1){
                state.currentIndex++;
                state.actualSong = state.queuedSongs[state.currentIndex];
            }
        },
        prevSong: (state) => {
            if(state.currentIndex > 0 && state.queuedSongs){
                state.currentIndex--;
                state.actualSong = state.queuedSongs[state.currentIndex];
            }
        }
    }
});

export default playerSlice.reducer;
export const { togglePlayPause, playSong, startPlaylist, nextSong, prevSong } = playerSlice.actions;