import { FC } from 'react';
import './alert.scss';

import { FaExclamationCircle, FaExclamationTriangle, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';

type alertTypes = 'error' | 'warning' | 'info' | 'success';

type alertProps = {
    type: alertTypes;
    message: string;
    icon?: string;
}

const Alert: FC<alertProps> = ({ type, message, icon }) => {
    const alertIconClass = `icon-${type}`;

    const iconMapping: { [key: string]: JSX.Element } = {
        error: <FaExclamationCircle />,
        warning: <FaExclamationTriangle />,
        info: <FaInfoCircle />,
        success: <FaCheckCircle />,
    };

    return (
        <div className={`alert ${type}`}>
            <span className={alertIconClass}>
                {icon && iconMapping[icon]}
            </span>
            <p>{message}</p>
        </div>
    );
};

export default Alert;
