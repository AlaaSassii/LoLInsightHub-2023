import { riotGamesApiAxiosInstance } from "./axios"

export const getGameData = async (
    version: string,
    region: string,
    restOfApi: string) => {
    return await riotGamesApiAxiosInstance.get(`${version}/data/${region}/${restOfApi}`);
}
export const getGameImage = async (
    version: string,
    restOfApi: string) => {
    return await riotGamesApiAxiosInstance.get(`${version}/img /${restOfApi}`);
}
