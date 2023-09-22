import { FC } from 'react'
import { skins } from "../../../../types/championDataType"
import CardContainer from "../../../common/cardContainer"
import Slider from '../../../common/slider'

type championSkinsProps = {
    name: string | undefined
    skins: skins
}
const championSkins: FC<championSkinsProps> = ({ name, skins }) => {
    const images = skins.map(skin => `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_${skin.num}.jpg `)
    const titles = skins.map(skin => skin.name)
    return (
        <CardContainer loading={false} className='champion__skins'>
            <Slider images={images} titles={titles} />
        </CardContainer>
    )
}

export default championSkins