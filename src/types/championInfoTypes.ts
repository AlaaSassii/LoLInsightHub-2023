
export type ChampionInfo = {
    championId: number;
    championLevel: number;
    championPoints: number;
    championPointsSinceLastLevel: number;
    championPointsUntilNextLevel: number;
    chestGranted: boolean;
    lastPlayTime: number;
    puuid: string;
    summonerId: string;
};
