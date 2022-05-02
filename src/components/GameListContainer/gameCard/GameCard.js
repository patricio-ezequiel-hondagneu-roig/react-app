import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import "./gameCard.css"

const GameCard = (props) => {

    const { id, title, description, img, stock } = props.game

    const [count, setCount] = useState(props.initial)

    const onAdd = () => {
        props.onAdd(count)
    }

    const resHandler = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const addHandler = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <>
            <div className="card card-style">
                <img src={img} className="card-img-top height" alt=""></img>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="stock"> Stock actual : {stock} </p>
                    <a href="#" className="btn btn-primary" onClick={onAdd}>Añadir al carrito</a>
                    <ItemCount count={count} resHandler={resHandler} addHandler={addHandler} />
                </div>
            </div>
        </>
    )
}
export default GameCard