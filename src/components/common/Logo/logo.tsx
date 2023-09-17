// assets
import { logoName } from '../../../assets/logo/logoName'
import { logo } from '../../../assets/logo/logo'
// styles
import './logo.scss'
const Logo = () => {
    return (
        <div className='app__logo'>
            <div className='logo__svg' dangerouslySetInnerHTML={{ __html: logo }} />
            <h4 className='logo__name'>{logoName}</h4>
        </div>
    )
}

export default Logo