import ItemCount from "../ItemCount/ItemCount"
import "../gameCard/gameCard.css"
import { useState } from "react"

const GameDetail = (props) => {

    const { id, title, description, img, stock, precio } = props.props.game

    const [count, setCount] = useState(props.props.initial)

    const onAdd = () => {
        props.props.onAdd(count)
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
                    <div className="div-stock-precio">
                        <p className="stock"> Stock actual : {stock} </p>
                        <span className="precio"> Precio : ${precio} </span>
                    </div>
                    <a href="#" className="btn btn-primary" onClick={onAdd}>Añadir al carrito</a>
                    <ItemCount count={count} resHandler={resHandler} addHandler={addHandler} />
                </div>
            </div>
        </>
    )
}

export default GameDetail