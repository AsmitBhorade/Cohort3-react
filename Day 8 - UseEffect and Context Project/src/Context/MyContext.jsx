import { createContext } from "react";
import { useState } from "react";

export let MyStore = createContext()

export const ContextProvider =({children}) =>{

    const [isCartOpen, setisCartOpen] = useState(false)
    const [cartItem, setcartItem] = useState([])
    console.log(cartItem)

    const incrementqty=(id)=>{
        setcartItem((prev)=>{
            return prev.map((elem)=>{
                return elem.id===id? {...elem,qty:elem.qty+1} : elem;
            })
        })
    }

    const decrementqty=(id)=>{
        setcartItem((prev)=>{
            return prev
            .map((elem)=>{
                return elem.id===id? {...elem,qty:elem.qty-1} : elem;
            })
            .filter((item) => item.qty > 0)
        })
    }    

    const removeFromCart = (id) => {
    setcartItem((prev) => prev.filter((item) => item.id !== id));
    };

    return <MyStore.Provider value={{isCartOpen,setcartItem,cartItem,setisCartOpen,incrementqty,decrementqty,removeFromCart}}>{children}</MyStore.Provider>
}