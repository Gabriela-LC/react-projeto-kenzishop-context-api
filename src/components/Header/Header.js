import {BsCart} from "react-icons/bs"
import {AiOutlineHome} from "react-icons/ai"

import {useHistory} from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

import "./Header.css"

function Header({onCart = false}){

    const history = useHistory()

    const {cart} = useContext(CartContext)

    return(
        <header>
            <h1>Kenzie Shop</h1>
            {onCart? (
                <button onClick={() => history.push("/")}>
                    <AiOutlineHome className="headerIcon" color="white"/>
                </button>
            ):(
                cart.length > 0? (
                    <button onClick={() => history.push("/cart")}>
                        <BsCart className="headerIcon" color="white"/>
                        <div className="qtCartIcon">
                            <p>{cart.reduce((acc,product) => {
                            return acc + product.quant
                        }, 0)}</p>
                        </div>
                    </button>
                ):(
                    <button onClick={() => history.push("/cart")}>
                        <BsCart className="headerIcon" color="white"/>
                    </button>
                ))}
                
        </header>
    )
}

export default Header