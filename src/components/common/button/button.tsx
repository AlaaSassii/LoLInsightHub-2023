// react
import React, { FC } from 'react'
// enums 
import { buttonType } from '../../../enums'
// styles
import './index.scss'

type buttonProps = {
    type: buttonType;
    onClick: () => void;
    label: string;
};

const Button: FC<buttonProps> = ({ type, onClick, label }) => {
    return (
        <button onClick={onClick}>{label}</button>
    )
}

export default Button