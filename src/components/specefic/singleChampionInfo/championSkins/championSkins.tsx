import { FC } from 'react'
import { skins } from "../../../../types/championDataType"
import CardContainer from "../../../common/cardContainer"
import ImageSlider from '../../ImageSlider'
import './championSkins.scss'
type championSkinsProps = {
    name: string | undefined
    skins: skins
}
const championSkins: FC<championSkinsProps> = ({ name, skins }) => {
    const images = skins.map(skin => `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${skin.num}.jpg`)
    // 
    return (
        <CardContainer loading={false} className='champion__skins'>
            <ImageSlider images={images} />
        </CardContainer>
    )
}

export default championSkins