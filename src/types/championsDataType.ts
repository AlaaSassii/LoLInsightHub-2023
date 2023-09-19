type ChampionDataType = {
    blurb: string;
    id: string;
    image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
    };
    info: {
        attack: number;
        defense: number;
        magic: number;
        difficulty: number;
    };
    key: string;
    name: string;
    partype: string;
    stats: {
        hp: number;
        hpperlevel: number;
        mp: number;
        mpperlevel: number;
        movespeed: number;
    };
    tags: string[];
    title: string;
    version: string;
};

export type championsDataType = {
    data: {
        [key: string]: ChampionDataType
    },
    format: string,
    type: string,
    version: string,
}
