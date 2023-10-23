import { FC } from 'react'
import './GameInfoCard.scss'
import { links } from '../../../enums/routes/links'
import { useNavigate } from 'react-router-dom'
type GameInfoCardPropsType = {
    title: string,
    desciption: string,
    image: string,
    link: links,
}
const GameInfoCard: FC<GameInfoCardPropsType> = ({ desciption, image, link, title }) => {
    const navigate = useNavigate();
    return (
        <div className='game__info__card'>
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="card__info">
                <h2>{title}</h2>
                <p>{desciption}</p>
                <button onClick={() => navigate(link)} >Play</button>
            </div>
        </div>
    )
}

export default GameInfoCard