import React, { FC } from 'react'
import { links, logo } from '../../../types/navbarType'
import Container from '../container'
import { Link } from 'react-router-dom'
type navbarProps = {
    links: links,
    logo: logo
}
const navbar: FC<navbarProps> = ({ links, logo }) => {
    return (
        <nav>
            <Container >
                {logo}
                <ul>
                    {
                        links.map((link, index) => <Link to={link.path} key={`link__${index}`}>{link.name}</Link>)
                    }
                </ul>
            </Container>
        </nav>
    )
}

export default navbar