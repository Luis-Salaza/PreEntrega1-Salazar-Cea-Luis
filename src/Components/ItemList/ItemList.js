

import Item from '../Item/Item'

const ItemList = ({ productos }) => {
    return ( 
        console.log(productos ),
        <div>
            
            {productos.map(prod => <Item key={prod.id} {...prod} />)}
            
        </div>
    )
}

export default ItemList