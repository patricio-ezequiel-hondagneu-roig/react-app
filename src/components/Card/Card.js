
import "../ItemListContainer/ItemListContainer"
import "./Card.css"
import ItemCount from "./Counter/ItemCount"

const Card = ({ children }) => {



    return (
        <div className="card card-style">
            <img src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2020/02/hipertextual-half-life-alyx-tiene-fecha-lanzamiento-2020245237.jpg?w=1560&quality=50&strip=all&ssl=1" className="card-img-top" alt=""></img>
            <div className="card-body">
                {children}
                <a href="#" className="btn btn-primary">Añadir al carrito</a>
                <ItemCount stock={children.props.stock} />
            </div>

        </div>
    )
}

export default Card