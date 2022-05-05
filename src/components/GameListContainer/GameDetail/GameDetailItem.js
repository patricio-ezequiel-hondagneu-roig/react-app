import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { gamesData } from "../../../data/gamesData"


const GameDetailItem = (props) => {

    const { gameId } = useParams()
    const [game, setGame] = useState({})



    useEffect(() => {
        setGame(gamesData.find(g => g.id === gameId))
    }, [gameId])

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
        if (count < game.stock) {
            setCount(count + 1)
        }
    }

    return (
        <>
            <div className="card card-style">
                <img src={game.img} className="card-img-top height" alt=""></img>
                <div className="card-body">
                    <h5 className="card-title">{game.title}</h5>
                    <div className="card-description" id="card-desc">
                        <p className="card-text">{game.description}</p>
                        <div className="div-stock-precio">
                            <p className="stock"> Stock actual : {game.stock}</p>
                            <span className="precio"> Precio : ${game.precio}</span>
                        </div>
                        <a href="#" className="btn btn-primary" onClick={onAdd} >Añadir al carrito</a>
                        <ItemCount count={count} resHandler={resHandler} addHandler={addHandler} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameDetailItem