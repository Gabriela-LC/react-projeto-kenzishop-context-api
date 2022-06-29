
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import "./Product.css"

function Product({product, isRemovable = false}){

    const {addToCart, removeFromCart} = useContext(CartContext)

    const {id, name, price, quant, image} = product

    return(
        <li>
            <figure>
                <img src={image} alt={name}/>
            </figure>
            <div className="infoProd">
                <h2>{name}</h2>
                <p>R$ {price.toFixed(2).replace(".",",")}</p>
                {isRemovable?(
                <>
                    <p>x{quant}</p>
                    <button onClick={() => removeFromCart(id)}>Remover</button>
                </>
                ):(
                <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
                )}
            </div>
        </li>
    )
}

export default Product