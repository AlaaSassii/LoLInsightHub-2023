import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
type cardProps = {
    image: string,
    title: string,
    text: string,
    navigateLink: string,
}
const Card: FC<cardProps> = ({ image, title, text, navigateLink }) => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate(navigateLink);
    }
    return (
        <div className='card__home_page'>
            <div className="card__image">
                <img src={image} alt="" />
            </div>
            <div className="info">
                <h2>{title}</h2>
                <p>{text}</p>
                <button onClick={handleClick}>navigate</button>
            </div>
        </div>
    )
}

export default Card