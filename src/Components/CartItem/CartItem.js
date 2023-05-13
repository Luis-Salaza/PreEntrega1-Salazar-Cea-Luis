import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CartItem = ({ id, titulo, precio, img, categoria, stock, descripcion, quantity }) => {
    const { removeItem } = useContext(CartContext)
    

    return(
        <article className="cardItem">
            <header className="Header">
                <h2 className="ItemHeader">{titulo}</h2>
            </header>
            <picture >
                <img src = {img} alt={titulo} className="ItemImg" />
            </picture>
            <section>
                <p className="ItemInfo"> Precio: ${precio}</p>
                <p className="ItemInfo"> Stock: {stock}</p>
                <p className="ItemInfo"> Categoria: {categoria}</p>
                <p className="ItemInfo"> Descripción: {descripcion}</p>
            </section>
            <footer className="ItemFooter">
                <button className='ItemBtn' onClick={() => removeItem(id)}> Eliminar </button>
            </footer>
        </article>
    )
}

export default CartItem