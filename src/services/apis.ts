export const getGameData = (
    baseUrl: string,
    version: string,
    region: string,
    restOfApi: string,
): string => {
    return `${baseUrl}${version}/data/${region}/${restOfApi}`
}

export const getGameImage = (
    baseUrl: string,
    version: string,
    restOfApi: string,
): string => {
    return `${baseUrl}${version}/img /${restOfApi}`
}

