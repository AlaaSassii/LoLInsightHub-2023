import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { championDataType } from "../types/championDataType";
const initialState = {
    data: ChampionDataType | null.
        loading: false,
    error: string | null,
}