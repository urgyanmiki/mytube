import { configureStore } from '@reduxjs/toolkit';

import playerSlice from '../features/playerSlice';
import playlistSlice from '../features/playlistSlice';
import { shazamApi } from '../services/shazamApi';

const store = configureStore({
    reducer: {
        musicPlayer: playerSlice,
        playlist: playlistSlice,
        [shazamApi.reducerPath]: shazamApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(shazamApi.middleware)
});

export default store; 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch