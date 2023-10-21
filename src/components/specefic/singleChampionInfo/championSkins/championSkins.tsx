import { FC } from 'react'
import { skins } from "../../../../types/championDataType"
import CardContainer from "../../../common/cardContainer"
import Slider from '../../../common/slider'
import ImageSlider from '../../ImageSlider'
import './championSkins.scss'
type championSkinsProps = {
    name: string | undefined
    skins: skins
}
const championSkins: FC<championSkinsProps> = ({ name, skins }) => {
    const images = skins.map(skin => `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${skin.num}.jpg`)
    // 
    const titles = skins.map(skin => skin.name)
    return (
        <CardContainer loading={false} className='champion__skins'>
            {/* <Slider  titles={titles} /> */}
            <ImageSlider images={images} />
        </CardContainer>
    )
}

export default championSkins