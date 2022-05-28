import "./Cart.css"
import { useContext } from "react"
import { CartContext } from "../../../context/cartContext"
import EmptyCart from "./EmptyCart"
import { Link } from "react-router-dom"
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

const Cart = () => {

    const { cart, clearCart, removeFromCart, cartTotalPrice } = useContext(CartContext)

    const clearCartHandler = () => {
        clearCart()
    }

    if (cart.length === 0) {
        return <EmptyCart />
    } else
        return (
            <>
                <h2>Carrito</h2>
                {cart.map(c =>
                    <div className="card card-style">
                        <img src={c.game.img} className="card-img-top height" alt=""></img>
                        <div className="card-body">
                            <h5 className="card-title">{c.game.title}</h5>
                            <div className="card-description" id="card-desc">
                                <p className="card-text">{c.game.description}</p>
                            </div>
                            <div>
                                <p className="cantidad">
                                    {`Cantidad: `}{c.count}
                                    <br></br>
                                    {`Total: $`}{c.game.price}
                                </p>
                            </div>
                            <button className="btn btn-primary" onClick={() => { removeFromCart(c.game.id) }}>
                                <span className="material-symbols-outlined">
                                    delete
                                </span>
                            </button>
                        </div>
                    </div>
                )}
                <div>{`Monto total: $${cartTotalPrice()}`} </div>
                <button className="btn btn-primary text-decoration-none" onClick={clearCartHandler}>Borrar Carrito</button>
                <Link to="/checkout"><button className="btn btn-primary">Comprar</button></Link>
            </>
        )
}
export default Cart 
