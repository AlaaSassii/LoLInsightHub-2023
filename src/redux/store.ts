import { configureStore } from '@reduxjs/toolkit';
import ChampionsReducer from './ChampionsSlice';
const store = configureStore({
    reducer: {
        champions: ChampionsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
