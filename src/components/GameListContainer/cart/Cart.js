import { useContext } from "react"
import { CartContext } from "../../../context/cartContext"

const Cart = () => {

    const { cart } = useContext(CartContext)

    const { clearCart } = useContext(CartContext)

    const { removeFromCart } = useContext(CartContext)

    const clearCartHandler = () => {
        clearCart()
    }

    return (
        <>
            <h2>Carrito</h2>
            {cart.map(c =>
                <li>
                    {`Titulo: ${c.game.title}, Precio: $${c.game.price}, Cantidad: ${c.count}`}
                    <button className="btn btn-primary" onClick={() => { removeFromCart(c.game.id) }}>delete</button>
                </li>

            )}
            <button className="btn btn-primary" onClick={clearCartHandler}>Borrar Carrito</button>
        </>
    )
}

export default Cart 
