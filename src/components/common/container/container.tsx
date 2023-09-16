// react
import { FC, ReactNode } from 'react'

// styles
import './container.scss'
type containerProps = {
    children: ReactNode,
    className?: string,
    id?: string,
}
const Container: FC<containerProps> = ({ children, className, id }) => {
    return (
        <div id={id} className={`${className} container`}>{children}</div>
    )
}

export default Container