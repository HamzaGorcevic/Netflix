import { useContext ,useState} from "react"
import { ContextProvide } from "../ContextProvider"
import Movie from './movientf.jsx'

export default function Accout(){
    const choseF = useContext(ContextProvide)
    
    return <div className="d-flex bg-dark align-items-center justify-content-center flex-wrap" style={{height:'99vh',background:'white'}}>
        <div style={{position:'absolute',top:'10%',left:'6%',color:'white'}}>
        <h2 className="text-danger" >Welcome {choseF.account}</h2>
        </div>
        {choseF.chose.map((el)=>{
            return  <div style={{position:'relative'}}>
                <Movie item={el} account={''} />
                <h3 onClick={()=>{choseF.setChosen(choseF.chose.filter((elm)=>(elm.title != el.title)))}} className="text-white" style={{position:'absolute',top:'5%',right:'5%'}}>X</h3>
            </div>
            
        })}
    </div>
}