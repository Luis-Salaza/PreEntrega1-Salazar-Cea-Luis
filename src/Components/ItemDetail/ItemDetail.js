import './ItemDetail.css'
import Contador from '../Contador/Contador'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { CartContext } from '../../Context/CartContext'

const ItemDetail = ({ id, titulo, precio, img, categoria, stock, descripcion }) => {
    const [quantityAdded, SetQuantityAdded] = useState(0)

    const { addItem , TotalQuantity } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        SetQuantityAdded(quantity)

        const item = {
            id,titulo,precio,img,categoria,stock,descripcion
        }

        addItem(item, quantity)

        
    }

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
                    {
                        quantityAdded > 0 ? (
                            <Link to="/cart" className='ItemBtn'> Terminar mi compra </Link>
                        ) : (
                        <Contador inicial={1} stock={stock} onAdd={handleOnAdd}/>
                        )
                    }
                </footer>
            </article>
    )
}
export default ItemDetail