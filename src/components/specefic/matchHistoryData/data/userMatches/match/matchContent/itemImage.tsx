import { FC, useState } from 'react'
import Tooltip from '../../../../../../common/tooltip'
type itemImageProps = {
    image: string
}
const ItemImage: FC<itemImageProps> = ({ image }) => {
    const [imageSrc, setImage] = useState<string>(image)
    const handleImageError = () => {
        setImage('https://raw.communitydragon.org/t/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png');
    }
    return (
        <div>
            <img src={imageSrc} onError={handleImageError} />
        </div>
    )
}

export default ItemImage