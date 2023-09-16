import React, { FC } from 'react'
import { AiFillHome } from 'react-icons/ai';
import './pageUnavailable.scss';
type typePageUnavailable = {
    title: string,
    titleExplanation: string,
    paragraph: string,
}
const PageUnavailable: FC<typePageUnavailable> = ({ title, titleExplanation, paragraph }) => {
    return (
        <div className='page__not__found'>
            <div className='large__title'>{title}</div>
            <h2>{titleExplanation}</h2>
            <p>{paragraph}</p>
            <button><AiFillHome />  go to home page </button>
        </div>
    )
}

export default PageUnavailable