import './ItemDetail.css'
import Contador from '../Contador/Contador'

const ItemDetail = ({ id, titulo, precio, img, categoria, stock, descripcion }) => {
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
                    <Contador inicial={1} stock={10} onAdd={(cantidad)=> console.log('Cantidad Agregada', cantidad)}/>
                </footer>
            </article>
    )
}
export default ItemDetail