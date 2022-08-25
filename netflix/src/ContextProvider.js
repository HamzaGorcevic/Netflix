import { useState } from "react"
import { createContext } from "react"

const ContextProvide = createContext()

export default function Provide(props){
    const [account,setAccount] = useState(null)
    const [chose,setChosen] = useState([])
    const [prods,setProds] = useState([])
    return <ContextProvide.Provider value={{setAccount:setAccount,account:account,chose:chose,setChosen:setChosen,prods:prods,setProds:setProds}}>
        {props.children}
    </ContextProvide.Provider>
}
export {ContextProvide}