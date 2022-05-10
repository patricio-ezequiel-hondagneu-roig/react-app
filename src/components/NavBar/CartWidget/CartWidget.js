import { Link } from "react-router-dom"

const CartWidget = () => {
    return (
        <Link to={"/cart"}><button type="button" className="btn btn-light rounded-pill mx-4 d-flex">
            <span className="material-symbols-outlined">
                shopping_cart
            </span>
        </button>
        </Link>
    )
}
export default CartWidget