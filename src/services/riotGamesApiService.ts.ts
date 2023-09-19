import { AxiosResponse } from "axios";
import { riotGamesApiAxiosInstance } from "./axios"
import { championsData } from "../types/championsDataType";
import { ChampionDataType } from "../types/championDataType";

//  champions data
export const getChampionsData = async (
    version: string,
    region: string,
): Promise<AxiosResponse<championsData, any>> => {
    return await riotGamesApiAxiosInstance.get(`${version}/data/${region}/champion.json`);
}

export const getChampionData = async (
    version: string,
    region: string,
    name: string,
): Promise<AxiosResponse<ChampionDataType<any>, any>> => {
    return await riotGamesApiAxiosInstance.get(`${version}/data/${region}/champion/${name}.json`);
}

// item image
export const getItemImage = async (
    version: string,
    id: number | string,
): Promise<AxiosResponse<any, any>> => {
    return await riotGamesApiAxiosInstance.get(`${version}/img/item/${id}.png`)
}