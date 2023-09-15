// react
import React, { FC, ReactNode } from 'react'

// styles
import './container.scss'
type containerProps = {
    children: ReactNode
}
const Container: FC<containerProps> = ({ children }) => {
    return (
        <div className='container'>{children}</div>
    )
}

export default Container