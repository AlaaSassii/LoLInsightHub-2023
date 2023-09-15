import { FC, ReactNode } from 'react';
// hooks
import useHover from '../../../hooks/useHover';

import './tooltip.scss';


type tooltipProps = {
    text: string;
    children: ReactNode;
};

const Tooltip: FC<tooltipProps> = ({ text, children }) => {

    const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

    return (
        <div className="tooltipContainer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
            {isHovered && <div className="tooltipText">{text}</div>}
        </div>
    );
};

export default Tooltip;
