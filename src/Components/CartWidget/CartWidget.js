import cart from './assets/cart.svg';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div classNamme="carrito">
            <img src={cart} alt="carrito" classNamme="carrito" />
            <span>3</span>
        </div>
    )
}

export default CartWidget