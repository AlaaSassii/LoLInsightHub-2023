import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import './pageNotFound.scss'
const PageNotFound = () => {
    return (
        <div className='page__not__found'>
            <div className='large__error__code'>404</div>
            <h2>Page Not Found</h2>
            <p>
                The page you are looking for might have been removed had its name changed or is temporarily unavailable.
            </p>
            <button><AiFillHome />  go to home page </button>
        </div>
    )
}

export default PageNotFound