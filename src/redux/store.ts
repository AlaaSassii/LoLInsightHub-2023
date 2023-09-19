import { configureStore } from '@reduxjs/toolkit';
import ChampionsReducer from './ChampionsSlice';
import SingleChampionReducer from './SingleChampionSlice'
const store = configureStore({
    reducer: {
        champions: ChampionsReducer,
        champion: SingleChampionReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
