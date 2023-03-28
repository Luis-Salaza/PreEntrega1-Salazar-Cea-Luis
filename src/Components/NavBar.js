import CartWidget from "./CartWidget/CartWidget"

import './Css/NavStyle.css'
import './Css/ButtonStyle.css'

const Nav = () => {
    return (
        <nav className="navbar" >
            <h3>Carrito</h3>
            <div>
                <button className="button-ps4">PS4</button>
                <button className="button-ps5">PS5</button>
                <button className="button-xboxone">XBOX ONE</button>
                <button className="button-xboxseries">XBOX SERIE S/X</button>
            </div>
            <CartWidget />
        </nav>
    )
}
export default Nav
