export type singleMatch = {
    metadata: Metadata;
    info: Info;
};

export type Info = {
    gameCreation: number;
    gameDuration: number;
    gameEndTimestamp: number;
    gameId: number;
    gameMode: string;
    gameName: string;
    gameStartTimestamp: number;
    gameType: string;
    gameVersion: string;
    mapId: number;
    participants: Participant[];
    platformId: string;
    queueId: number;
    teams: Team[];
    tournamentCode: string;
};

export type Participant = {
    allInPings: number;
    assistMePings: number;
    assists: number;
    // ... (other properties)
    wardsPlaced: number;
    win: boolean;
};

export type Perks = {
    statPerks: StatPerks;
    styles: Style[];
};

export type StatPerks = {
    defense: number;
    flex: number;
    offense: number;
};

export type Style = {
    description: Description;
    selections: Selection[];
    style: number;
};

enum Description {
    PrimaryStyle = "primaryStyle",
    SubStyle = "subStyle",
}

export type Selection = {
    perk: number;
    var1: number;
    var2: number;
    var3: number;
};

export type Team = {
    bans: Ban[];
    objectives: Objectives;
    teamId: number;
    win: boolean;
};

export type Ban = {
    championId: number;
    pickTurn: number;
};

export type Objectives = {
    baron: Baron;
    champion: Baron;
    dragon: Baron;
    inhibitor: Baron;
    riftHerald: Baron;
    tower: Baron;
};

export type Baron = {
    first: boolean;
    kills: number;
};

export type Metadata = {
    dataVersion: string;
    matchId: string;
    participants: string[];
};
