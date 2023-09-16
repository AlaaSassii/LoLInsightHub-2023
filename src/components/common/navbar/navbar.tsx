import React, { FC, ReactNode } from 'react'
import { links, logo } from '../../../types/navbarType'
import Container from '../container'
import { NavLink } from 'react-router-dom';
import './navbar.scss'
import Logo from '../logo';
type navbarProps = {
    links: links,
}
const Navbar: FC<navbarProps> = ({ links }) => {
    return (
        <nav>
            <Container className='navbar' >
                <Logo />
                <ul>
                    {
                        links.map((link, index) => <li>
                            <NavLink
                                className={({ isActive }) => `${isActive ? 'isActive' : ''}`}
                                to={link.path}
                                key={`link__${index}`}
                            >{link.name}
                            </NavLink>
                        </li>)
                    }
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar