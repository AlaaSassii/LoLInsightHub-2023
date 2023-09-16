import { BiSolidSun, } from 'react-icons/bi'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import useThemeToggle from '../../../hooks/useToggleTheme'
import './toggle.scss';
const Toggle = () => {
    const [light, toggleTheme,] = useThemeToggle();

    return (
        <button
            onClick={toggleTheme}
            className={`toggle__theme__btn ${light ? 'light' : 'dark'}`}>
            {light ? <BiSolidSun /> : <BsFillMoonStarsFill />}
        </button>
    )
}

export default Toggle