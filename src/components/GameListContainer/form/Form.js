import { useContext } from "react"
import { CartContext } from "../../../context/cartContext"
import "./Form.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Form = () => {

    const db = getFirestore();

    const orderCollection = collection(db, "orders")

    const { cart } = useContext(CartContext)

    const processPurchase = async () => {
        if (document.getElementById('name').value && document.getElementById('phone').value && document.getElementById('email').value !== "") {
            const buyer = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value
            }
            const buyerToSave = {
                buyer: buyer,
                cart: cart,
                total: cart.length
            }

            const respuesta = await addDoc(orderCollection, buyerToSave)

            console.log(respuesta.id)

        } else {
            toast("Falta completar un campo")
        }
    }

    const handler = () => {
        processPurchase()
    }

    return (
        <>
            <fieldset className="fieldset-contact">
                <legend>Contactenos</legend>
                <form>
                    <div className="row">
                        <div className="col">
                            <input className="form-control form-control-sm" id="name" type="text" placeholder="Nombre" aria-label=".form-control-sm example" required></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input className="form-control form-control-sm" id="phone" type="number" placeholder="Telefono" aria-label=".form-control-sm example" required></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input className="form-control form-control-sm" id="email" type="email" placeholder="Correo Electronico" aria-label=".form-control-sm example" required></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div>
                                <input className="btn btn-primary btn-sm" type="button" onClick={handler} value="Enviar"></input>
                                <input className="btn btn-primary btn-sm" type="reset" value="Borrar"></input>
                            </div>
                        </div>
                    </div>
                </form>
            </fieldset>
            <ToastContainer />
        </>
    )
}
export default Form