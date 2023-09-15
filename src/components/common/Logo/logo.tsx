// assets
import { logoName } from '../../../assets/logoName'
import { logo } from '../../../assets/logo'
// styles
import './index.scss'
const Logo = () => {
    return (
        <div className='app__logo'>
            <div className='logo__svg' dangerouslySetInnerHTML={{ __html: logo }} />
            <h4 className='logo__name'>{logoName}</h4>
        </div>
    )
}

export default Logo