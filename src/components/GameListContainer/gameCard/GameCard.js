import ItemCount from "../ItemCount/ItemCount"
import "./gameCard.css"

const GameCard = (props) => {

    const { id, title, description, img } = props.game

    const initial = Number((props.initial))

    return (
        <>
            <div className="card card-style">
                <img src={img} className="card-img-top height" alt=""></img>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="stock"> Stock actual : {props.stock} </p>
                    <a href="#" className="btn btn-primary" onClick={props.onAdd}>Añadir al carrito</a>
                    <ItemCount stock={props.stock} initial={initial} />
                </div>
            </div>
        </>
    )
}
export default GameCard