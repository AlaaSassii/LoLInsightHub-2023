import React, { FC } from 'react'
import CardContainer from '../../../common/cardContainer'
import { image, passive, spells } from '../../../../types/championDataType'
type ChampionDefProps = {
    blurb: string,
    image: image,
    spells: spells,
    passive: passive

}
const ChampionDef: FC<ChampionDefProps> = ({ blurb, image, passive, spells }) => {
    return (
        <CardContainer loading={false}>
            <p>{blurb}</p>
            <img src={image?.full} alt="" />
        </CardContainer>
    )
}

export default ChampionDef