import carrito from './assets/carrito.svg';
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { cart } = useContext(CartContext)

    return (
        <Link to='/cart' className="carrito" style={{ display: cart.reduce((acc, item) => acc + item.cantidad, 0) > 0 ? 'block' : 'none'}}>
            <img src={carrito} alt="carrito" className="carrito" />
            <span>{ cart.reduce((acc, item) => acc + item.cantidad, 0) }</span>
        </Link>
    )
}

export default CartWidget