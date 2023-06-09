import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({id, titulo, precio, img, stock,descripcion,categoria}) => {
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
                <p className="ItemInfo"> descripcion: {descripcion}</p>
                <p className="ItemInfo"> categoria: {categoria}</p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`}  className='ItemBtn'>Ver Detalle</Link>
            </footer>
        </article>
        
    )

}
export default Item