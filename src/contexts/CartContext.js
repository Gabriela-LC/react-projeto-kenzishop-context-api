import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({children}){

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])

    function addToCart(product){
        const list = JSON.parse(localStorage.getItem("cart")) || []

        let prodEncontrado = list.find((element) => {
            return element.id === product.id
        })

        if(prodEncontrado){
            prodEncontrado.quant += 1
        } else{
            list.push(product)
        }
        
        localStorage.setItem("cart", JSON.stringify(list))

        setCart(list)
    }

    function removeFromCart(id){

        let prodEncontrado = cart.find((element) => {
            return element.id === id
        })

        let newList = []

        if(prodEncontrado.quant === 1){
            newList = cart.filter((product) => {
                return product.id !== id
            })

        } else{
            prodEncontrado.quant -= 1
            newList = [...cart]
        }

        localStorage.setItem("cart", JSON.stringify(newList))
        setCart(newList)


    }

    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )

}