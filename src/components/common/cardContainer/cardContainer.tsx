import React, { FC, ReactNode } from 'react';
import './cardContainer.scss';
import MainLoadingSpinner from '../mainLoadingSpinner';
type cardContaienrProps = {
    children: ReactNode,
    className: string,
    loading: boolean,

}
const CardContainer: FC<cardContaienrProps> = ({ children, loading, className }) => {
    return (
        <div className={`card__container ${className}`}>
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