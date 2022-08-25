import { useContext,useState } from 'react'
import { ContextProvide } from '../ContextProvider'
import style from './netflix.module.css'
    
export default function Movie({item,account}){
    const choseF = useContext(ContextProvide)
    const[heart,setHeart] = useState(true)
    return <div  key={item.id} className={`${style.rowDiv} m-2 d-flex align-items-center justify-content-center`} style={{  position:'relative',width:280,display:'inline-block'}}>
    {choseF.account != null && choseF.account !=='' && choseF.account && account !='' ? <i onClick={()=>{setHeart(!heart);{heart ? choseF.setChosen(arr=>[...arr,item]):choseF.setChosen(choseF.chose.filter((elmnt)=>(elmnt.title != item.title)))}}} className={`${style.rowTitle} bi bi-suit-heart${heart ? '':'-fill'} text-white`} style={{position:'absolute',top:'2%',left:'2%',fontSize:22}}></i>:''}
    <h4 className={style.rowTitle}>{item.title}</h4>
    <img style={{width:280}} className={style.rowImg} src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt="" />
</div>
}