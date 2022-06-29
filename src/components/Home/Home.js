import { useContext } from "react"
import { ProductsContext } from "../../contexts/ProductsContext"

import Header from "../Header/Header"
import Product from "../Product/Product"

import "./Home.css"

function Home(){

    const {products} = useContext(ProductsContext)

    return(
        <>
            <Header/>
            <ul className="vitrine">
            {products.map((product) => (
                <Product key={product.id} product={product}/>
            ))}
            </ul>
        </>
    )
}

export default Home