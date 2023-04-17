import CartWidget from "../CartWidget/CartWidget"
import './NavStyle.css'
import { Link, NavLink } from 'react-router-dom'


const Nav = () => {
    return (
        <nav className="navbar" >
            <Link to={'/'}>
            <h3>Inicio</h3>
            </Link>
            <div>
                <NavLink to={`/category/PS4`} className="button-ps4" activeClassName="active">PS4</NavLink>
                <NavLink to={`/category/PS5`} className="button-ps5" activeClassName="active">PS5</NavLink>
                <NavLink to={`/category/XBOXONE`} className="button-xboxone" activeClassName="active">XBOX ONE</NavLink>
                <NavLink to={`/category/XBOXSERIES`} className="button-xboxseries" activeClassName="active">XBOX SERIES</NavLink>
            </div>
            <div className="CartWidget">
                <CartWidget />
            </div>
        </nav>
    )
}
export default Nav
