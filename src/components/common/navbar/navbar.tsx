import { FC } from 'react'
import { links, } from '../../../types/navbarType'
import Container from '../container'
import { NavLink } from 'react-router-dom';
import './navbar.scss'
import Logo from '../logo';
import Toggle from '../toggle';
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
                    <Toggle />
                </ul>

            </Container>
        </nav>
    )
}

export default Navbar