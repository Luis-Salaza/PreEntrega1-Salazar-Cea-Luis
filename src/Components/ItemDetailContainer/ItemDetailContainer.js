
import { useState , useEffect } from "react"  

import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const [loading, setLoading] = useState(false)
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'productos', itemId)

        getDoc(docRef).then(response => {
            const data = response.data()
            const productoAdp = { id: response.id, ...data }
            setProducto(productoAdp)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [itemId])


    return (
        
            <ItemDetail {...producto} />
    )
}
export default ItemDetailContainer

