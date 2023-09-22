export type image = {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}
export type skins = {
    id: string;
    num: number;
    name: string;
    chromas: boolean;
}[]
export type info = {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
};
export type stats = {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
};
export type spells = {
    id: string;
    name: string;
    description: string;
    tooltip: string;
    leveltip: {
        label: string[];
        effect: string[];
    };
    maxrank: number;
    cooldown: number[];
    cooldownBurn: string;
    cost: number[];
    costBurn: string;
    resource: string;
    range: number[];
    rangeBurn: string;
    image: image
}[];
export type passive = {
    name: string;
    description: string;
    image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
    };
}
export type championDataType<T> = {
    type: string;
    format: string;
    version: string;
    data: {
        [championKey: string]: {
            id: string;
            key: string;
            name: string;
            title: string;
            image: image
            skins: skins
            lore: string;
            blurb: string;
            allytips: string[];
            enemytips: string[];
            tags: string[];
            partype: string;
            info: info;
            stats: stats;
            spells: spells;
            passive: passive;
            recommended: T[];
        };
    };
};
