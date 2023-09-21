import React from 'react'
import CardContainer from '../../../common/cardContainer'
type ChampionDef = {
    image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
    },
    title: string,
    spells: {
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
    }[],
    passive: {
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

}
const ChampionDef = () => {
    return (
        <CardContainer loading={false}>championDef</CardContainer>
    )
}

export default ChampionDef