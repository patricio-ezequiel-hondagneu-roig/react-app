const ItemListContainer = ({ stock }) => {
    return (
        <>
            <h5 className="card-title">Half Life Alyx</h5>
            <p className="card-text">Juego para VR de la empresa Steam</p>
            <p className="stock"> Stock actual : {stock} </p>
        </>
    )
}

export default ItemListContainer