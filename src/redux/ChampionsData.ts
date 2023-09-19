// counterSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { championsData } from '../types/championsDataType';

interface ChampionsState {
    data: championsData | null
    loading: boolean;
    error: string | null;
}
const initialState: ChampionsState = {
    data: null,
    loading: false,
    error: null,
};
export const fetchChampionsData = createAsyncThunk(
    'champions/fetchChampionsData',
    async () => {
        try {
            const response = await axios.get(`http://ddragon.leagueoflegends.com/cdn/13.18.1/data/en_US/champion.json`);
            const newData = response.data;
            return newData;
        } catch (error) {
            throw error;
        }
    }
);
const championsSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchChampionsData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchChampionsData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload
            })
            .addCase(fetchChampionsData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'An error occurred.';
            });
    },
});

export default championsSlice.reducer;
