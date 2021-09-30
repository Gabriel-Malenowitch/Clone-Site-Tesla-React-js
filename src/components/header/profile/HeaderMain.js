import './HeaderMainProfile.css'
import logo_b from '../../../assets/logo_black.svg'
import logo_w from '../../../assets/logo_white.svg'

function HeaderMain(){
    return(
        <nav>
            <img className="nav--logo" src={logo_b} alt="Logo tesla" />
            <span className="nav--menu">
                Menu
            </span>
        </nav>
    )
}
export default HeaderMain 