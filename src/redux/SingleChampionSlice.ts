import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { championDataType } from "../types/championDataType";
import axios, { AxiosResponse } from "axios";


type initialStateType = {
    data: championDataType<string> | null,
    loading: boolean,
    error: string | null,
}

const initialState: initialStateType = {
    data: null,
    loading: false,
    error: null,
}

type fetchChampionDataArgumentType = {
    version: string,
    region: string,
    name: string,
}

export const fetchChampionData = createAsyncThunk('champion/fetchChampionData', async ({
    version = '',
    region = '',
    name = '',
}: fetchChampionDataArgumentType) => {
    try {
        const response: AxiosResponse = await axios(`http://ddragon.leagueoflegends.com/cdn/${version}/data/${region}/champion/${name}.json`);
        const data = await response.data;
        return data;
    } catch (error) {
        return error
    }
})


const championSlice = createSlice({
    name: 'champion',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchChampionData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchChampionData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload
            })
            .addCase(fetchChampionData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'An error occurred.';
            });
    },
})

export default championSlice.reducer;
