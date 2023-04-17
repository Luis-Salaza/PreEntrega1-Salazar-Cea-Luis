import { useState, useEffect } from 'react'
import { getProductos, getProductosByCategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

import './TextStyle.css'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductosByCategory : getProductos
        
        asyncFunc(categoryId).then(res => {
            setProductos(res)
        })
        .catch(err => {
            console.log(err)
        })
    }, [categoryId])

    return (
            console.log(productos),
        <div>
            <h1>{greeting}</h1>
            <ItemList productos={productos} />
        </div>
        
    )
}

export default ItemListContainer
