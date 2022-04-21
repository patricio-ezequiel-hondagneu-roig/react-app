import "../ItemListContainer/ItemListContainer"
import "./Card.css"

const Card = ({ children }) => {
    return (
        <div className="card card-style">
            <img src="..." className="card-img-top" alt=""></img>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

export default Card