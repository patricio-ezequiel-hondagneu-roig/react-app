import { createContext, useState } from "react";

export const CartContext = createContext({

})

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const upsert = (cartItem) => {
        if (!isInCart(cartItem.game.id)) {
            setCart(current => {
                return current.concat(cartItem)
            })
            alert("Se agrego al carrito")
        } else {
            const updatedCart = cart.map((item) => {
                if (item.game.id === cartItem.game.id) {
                    return { game: item.game, count: cartItem.count }
                } else return item
            })
            setCart(updatedCart)
            alert("Se actualizo el carrito")
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const removeFromCart = (gameId) => {
        const cartWithoutGame = cart.filter((item) => item.game.id !== gameId);
        setCart(cartWithoutGame)
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
    }

    return (
        <CartContext.Provider value={context} >
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider 