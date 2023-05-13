import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    

    const addItem = (item, cantidad) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, cantidad}])
        }else{
            console.error("El item ya está en el carrito")
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(item => item.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(item => item.id === itemId);
    }
    
    const total = () => {
        return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    }



    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, isInCart, total}}>
            {children}
        </CartContext.Provider>
    );
};
