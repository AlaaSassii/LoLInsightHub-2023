// react
import React, { FC } from 'react'
// enums 
import { buttonTypes } from '../../../enums/buttonEnums';
// styles
import './index.scss'

type buttonProps = {
    type: buttonTypes;
    onClick: () => void;
    label: string;
};

const Button: FC<buttonProps> = ({ type, onClick, label }) => {
    return (
        <button onClick={onClick}>{label}</button>
    )
}

export default Button