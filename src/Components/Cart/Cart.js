import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, addItem, removeItem, clear, isInCart, total, TotalQuantity } = useContext(CartContext)

    if(TotalQuantity === 0){
        return (
            <div >
                <h1 >Tu carrito está vacío</h1>
                <Link to="/" className="CartBtn">Volver al inicio</Link>
            </div>
        )
    }

   
    

    return(
        <div className="Cart">
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0)}</h3>
            <button onClick={() => clear()} className="CartBtn" >Vaciar carrito</button>
            <Link to="/checkout" className="CartBtn">Confirmar Compra</Link>
        </div>
    )
}

export default Cart