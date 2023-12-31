import { FC } from 'react'
import CardContainer from '../../../common/cardContainer'
import { passive, spells } from '../../../../types/championDataType'
import { championSquareImage } from '../../../../helpers/championSquareImage'
import Tooltip from '../../../common/tooltip'
import { abilityImage, passiveImage } from '../../../../helpers'
type ChampionDefProps = {
    name: string,
    lore: string | undefined,
    title: string,
    spells: spells,
    passive: passive

}
const ChampionDef: FC<ChampionDefProps> = ({ name, lore, title, passive, spells }) => {
    const imageSrc = championSquareImage(name);
    return (
        <CardContainer loading={false} className='champion__def'>
            <h1>{name}</h1>
            <p>{title}</p>
            <img src={imageSrc} alt="" />
            <p>{lore || ""}</p>
            <div className="spells">
                <Tooltip text={passive?.description}><img src={passiveImage(name)} alt="" /></Tooltip>
                {
                    spells?.map((spell, index) => <Tooltip key={`spell__${index}`} text={spell?.description}><img src={abilityImage(spell?.image?.full)} /></Tooltip>)
                }
            </div>
        </CardContainer>
    )
}

export default ChampionDef