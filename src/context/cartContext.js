import { createContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext({

})

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const upsert = (cartItem) => {
        if (!isInCart(cartItem.game.id)) {
            setCart(current => {
                return current.concat(cartItem)
            })
            toast("Se agrego al carrito")
        } else {
            const updatedCart = cart.map((item) => {
                if (item.game.id === cartItem.game.id) {
                    return { game: item.game, count: cartItem.count, totalPrice: cartItem.totalPrice }
                } else return item
            })
            setCart(updatedCart)
            toast("Se actualizo el carrito")
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const cartTotalPrice = () => {
        return cart.reduce((acumulado, actual) => {
            return acumulado + actual.totalPrice
        }, 0)
    }

    const removeFromCart = (gameId) => {
        const cartWithoutGame = cart.filter((item) => item.game.id !== gameId);
        setCart(cartWithoutGame)
        toast("Borrado del carrito");
    }

    const isInCart = (gameId) => {
        return cart.some((item) => item.game.id === gameId)
    }

    const context = {
        cart,
        upsert,
        clearCart,
        removeFromCart,
        isInCart,
        cartTotalPrice
    }

    return (
        <CartContext.Provider value={context} >
            {children}
            <ToastContainer />
        </CartContext.Provider>
    )
}


export default CartProvider 