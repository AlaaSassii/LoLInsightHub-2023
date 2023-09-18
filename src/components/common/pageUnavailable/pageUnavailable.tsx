import { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import './pageUnavailable.scss';
type typePageUnavailable = {
    title?: string,
    titleExplanation?: string,
    paragraph?: string,
}
const PageUnavailable: FC<typePageUnavailable> = ({
    title = 'Coming Soon',
    titleExplanation = 'Page Under Maintenance',
    paragraph = "We're currently working on this page to make it even better. Please check back later for updates!"
}) => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }
    return (
        <div className='page__not__found'>
            <div className='large__title'>{title}</div>
            <h2>{titleExplanation}</h2>
            <p>{paragraph}</p>
            <button onClick={handleClick}><AiFillHome />  go to home page </button>
        </div>
    )
}

export default PageUnavailable