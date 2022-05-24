import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../../context/cartContext"

const CartWidget = () => {

    const { cart } = useContext(CartContext)

    let cont = 0

    const contLabel = () => {
        if (cont > 0) {
            return cont
        } else {
            return ""
        }
    }

    cart.forEach(element => {
        cont += element.count
    });
    return (
        <Link to={"/cart"}>
            <button type="button" className="btn btn-light rounded-pill mx-4 d-flex">
                {`${contLabel()}`}
                <span className="material-symbols-outlined">
                    shopping_cart
                </span>
            </button>
        </Link>
    )
}
export default CartWidget