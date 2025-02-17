import { configureStore } from '@reduxjs/toolkit';

import playerSlice from '../features/playerSlice';
import playlistSlice from '../features/playlistSlice';

const store = configureStore({
    reducer: {
        musicPlayer: playerSlice,
        playlist: playlistSlice
    }
});


export default store; 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch