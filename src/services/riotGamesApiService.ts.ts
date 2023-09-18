import { riotGamesApiAxiosInstance } from "./axios"

//  champions data
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

// item image
export const getItemImage = async (
    version: string,
    id: number | string,
) => {
    return await riotGamesApiAxiosInstance.get(`${version}/img/item/${id}.png`)
}