import "../gameCard/gameCard.css"
import { Link } from "react-router-dom"

const GameDetail = (props) => {

    const { id, title, img } = props.props.game

    return (
        <>
            <div className="card card-style">
                <img src={img} className="card-img-top height" alt=""></img>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <Link to={`/game/${id}`}><button type="button" className="btn btn-primary" >Mostrar Informacion</button></Link>
                </div>
            </div>
        </>
    )
}

export default GameDetail