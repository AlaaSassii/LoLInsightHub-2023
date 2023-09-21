import React, { FC, ReactNode } from 'react';
import './cardContainer.scss';
import MainLoadingSpinner from '../mainLoadingSpinner';
type cardContaienrProps = {
    children: ReactNode,
    loading: boolean
}
const CardContainer: FC<cardContaienrProps> = ({ children, loading }) => {
    return (
        <div className='card__container'>
            {
                loading ?
                    <div className="loading">
                        <MainLoadingSpinner />
                    </div>
                    :
                    <>
                        {children}
                    </>
            }
        </div>
    )
}

export default CardContainer