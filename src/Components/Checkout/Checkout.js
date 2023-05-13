import './Checkout.css'
import { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { db } from '../../firebase'
import { addDoc, collection, doc, documentId, getDocs, query, where} from 'firebase/firestore'

import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { writeBatch } from 'firebase/firestore'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({name, phone, email}) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: { name, phone, email },
                items: cart,
                total: total,
                date: Date.now()
        }

        const bach = writeBatch(db)

        const outOfStock = []

        const ids = cart.map(prod => prod.id)

        console.log(ids)

        const productosRef = collection(db, 'productos')

        const productosAddedFromFirestore = await getDocs(query(productosRef, where (documentId(), 'in', ids)))

        const {docs} = productosAddedFromFirestore

        docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDB = dataDoc.stock
                const productoAddToCart = cart.find(item => item.id === doc.id)
                const prodQuantity = productoAddToCart?.quantity

                if (stockDB >= prodQuantity) {
                    bach.update(doc.ref, {stock: stockDB - prodQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
        })



        if (outOfStock.length === 0) {
            await bach.commit()

            const orderRef = collection(db, 'ordenes')

            const orderAdded = await addDoc(orderRef, objOrder)

            setOrderId(orderAdded.id)
            clearCart()

        } else {
            console.error('hay productos sin stock')
        }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    if(loading) {
        return <h2>Se está generando su orden...</h2>
    }
    
    if(orderId) {
        return <h2>Su orden se generó con el id {orderId}</h2>
    }

    return (
        <div>
            <h2>Checkout</h2>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )

    
}

export default Checkout