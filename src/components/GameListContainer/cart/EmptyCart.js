import { Link } from "react-router-dom"

const EmptyCart = () => {

    return (
        <>
            <div>Carrito Vacio</div>
            <Link to={`/`}><button type="button" className="btn btn-primary" >Lista de juegos</button></Link>
        </>
    )
}

export default EmptyCart