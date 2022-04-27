import { useState } from "react"

const ItemCount = (props) => {

    const [count, setCount] = useState(props.initial)

    const resHandler = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const addHandler = () => {
        if (count < props.stock) {
            setCount(count + 1)
        }
    }

    return (
        <>
            <div className="d-inline-block float-end">
                <button className="btn" onClick={resHandler}> - </button>
                <strong> {count}</strong>
                <button className="btn" onClick={addHandler}> +</button>
            </div>
        </>
    )

}
export default ItemCount