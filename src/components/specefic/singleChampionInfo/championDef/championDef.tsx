import React, { FC } from 'react'
import CardContainer from '../../../common/cardContainer'
import { image, passive, skins, spells } from '../../../../types/championDataType'
type ChampionDefProps = {
    blurb: string,
    image: image,
    spells: spells,
    passive: passive

}
const ChampionDef: FC<ChampionDefProps> = () => {
    return (
        <CardContainer loading={false}>championDef</CardContainer>
    )
}

export default ChampionDef