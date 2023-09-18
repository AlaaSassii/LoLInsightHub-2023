import { riotGamesApiAxiosInstance } from "./axios"

export const getChampionsData = async (
    version: string,
    region: string,
) => {
    return await riotGamesApiAxiosInstance.get(`${version}/data/${region}/champion.json`);
}

export const getChampionData = async (
    version: string,
    region: string,
    name: string,
) => {
    return await riotGamesApiAxiosInstance.get(`${version}/data/${region}/champion/${name}.json`);
}
