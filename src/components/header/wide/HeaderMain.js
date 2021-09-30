import './HeaderMainWide.css'
import logo_b from '../../../assets/logo_black.svg'
import logo_w from '../../../assets/logo_white.svg'

function HeaderMain(){
    return(
        <nav>
            <img className="nav--logo--wide" src={logo_b} alt="Logo tesla" />

            <span className="nav--menu--mid">
                <span className="nav--Item" >Model S</span>
                <span className="nav--Item" >Model 3</span>
                <span className="nav--Item" >Model X</span>
                <span className="nav--Item" >Model Y</span>
                <span className="nav--Item" >Powerwall</span>
                <span className="nav--Item" >Carregamento</span>
            </span>

            <span className="nav--menu--rig">
                <span className="nav--Item" >Loja</span>
                <span className="nav--Item" >Conta</span>
                <span className="nav--Item" >Menu</span>
            </span>
        </nav>
    )
}
export default HeaderMain 