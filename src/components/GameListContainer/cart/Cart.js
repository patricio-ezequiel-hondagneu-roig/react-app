import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../context/cartContext"
import EmptyCart from "./EmptyCart"
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

const Cart = () => {

    const { cart } = useContext(CartContext)

    const { clearCart } = useContext(CartContext)

    const { removeFromCart } = useContext(CartContext)

    const clearCartHandler = () => {
        clearCart()
    }
    const [total, setTotal] = useState(0)

    let cont = 0

    useEffect(() => {
        const contador = cart.forEach((e) => {
            setTotal(cont += e.totalPrice)
        })
    }, [total])

    if (cart.length === 0) {
        return <EmptyCart />
    } else
        return (
            <>
                <h2>Carrito</h2>
                {cart.map(c =>
                    <li>
                        {`Titulo: ${c.game.title}, Precio: $${c.game.price}, Cantidad: ${c.count}, Total: ${c.game.price * c.count}`}
                        <button className="btn btn-primary" onClick={() => { removeFromCart(c.game.id) }}>
                            <span className="material-symbols-outlined">
                                delete
                            </span>
                        </button>

                    </li>

                )}
                <div>{`Monto total: $${total}`} </div>
                <button className="btn btn-primary" onClick={clearCartHandler}>Borrar Carrito</button>
            </>
        )
}

export default Cart 
