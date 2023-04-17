import {useState} from 'react';
import './Contador.css';

const Contador = ({stock,inicial,onAdd}) => {
    const [cantidad, setcantidad] = useState(inicial);

    const increment = () => {
        if(cantidad < stock){
            setcantidad(cantidad + 1);
        }

    }

    const decrement = () => {
        if(cantidad > 1){
            setcantidad(cantidad - 1);
        }
    }

    return (
        <div>
            <div className='Controles'>
                <button className='Btn' onClick={decrement}>-</button>
                <span>{cantidad}</span>
                <button className='Btn' onClick={increment}>+</button>
            </div>
            <button className="Btn" onClick={() => onAdd(cantidad)} disabled={!stock}>Agregar al carrito</button>
        </div>
    )

}
export default Contador;