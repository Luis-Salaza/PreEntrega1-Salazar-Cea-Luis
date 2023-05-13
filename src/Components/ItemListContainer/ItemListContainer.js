import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'

import './TextStyle.css'
import { useParams } from 'react-router-dom'

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../firebase'

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId ? query(collection(db, 'productos'), where ('categoria', '==', categoryId)) : collection(db, 'productos')

        getDocs(collectionRef).then(response => {
            const productosAdp = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })
            setProductos(productosAdp)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            setLoading(false)
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
