import "./ItemCount.css"

const ItemCount = (props) => {

    return (
        <>
            <div className="d-inline-block float-end">
                <button className="btn" onClick={props.resHandler}> - </button>
                <strong> {props.count}</strong>
                <button className="btn" onClick={props.addHandler}> +</button>
            </div>
        </>
    )

}
export default ItemCount