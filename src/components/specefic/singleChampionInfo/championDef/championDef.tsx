import { FC } from 'react'
import CardContainer from '../../../common/cardContainer'
import { image, passive, spells } from '../../../../types/championDataType'
import { championSquareImage } from '../../../../helpers/championSquareImage'
import Tooltip from '../../../common/tooltip'
type ChampionDefProps = {
    name: string,
    blurb: string,
    title: string,
    image: image,
    spells: spells,
    passive: passive

}
const ChampionDef: FC<ChampionDefProps> = ({ name, blurb, title, image, passive, spells }) => {
    const imageSrc = championSquareImage(name);
    console.log({ imageSrc })
    return (
        <CardContainer loading={false}>
            <h1>{name}</h1>
            <p>{title}</p>
            <img src={imageSrc} alt="" />
            <p>{blurb}</p>
            {
                spells.map((spell, index) => <Tooltip text={spell.description}><img src={`${index}__spell`} alt="" /></Tooltip>)
            }
        </CardContainer>
    )
}

export default ChampionDef