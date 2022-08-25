import React from "react";
import { requests } from "../Context";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Row from "./rowntf";
import style from './netflix.module.css'
import { useLocation } from "react-router-dom";
export default function Home(){
    const locationAccount = useLocation()
    const [popular,setPopular] = useState([])
    const[check,setCheck] = useState(false)


    console.log(locationAccount.state);

    let randomN = Math.floor(Math.random() * 20)
    useEffect(()=>{
        axios.get(requests.Popular).then((response)=>{
            setPopular(response.data.results[randomN])
            
        })
    },[])
    
    

    return <div className="" style={{height:'auto'}}>
        <div className={style.bgHome}></div>
        <div className="w-100 d-flex justify-content-start align-items-center" style={{backgroundRepeat:'no-repeat',backgroundSize:'100%',height:'80vh',backgroundImage:`url(${`https://image.tmdb.org/t/p/original${popular.backdrop_path}`})`}}>
            <div style={{zIndex:'2', height:'90%',width:'100%',position:'absolute',background:'linear-gradient(to right,rgba(0, 0, 0,1 ) ,rgba(0, 0, 0, 0))'}}>
            
            </div>
            <div className="m-4" style={{width:'50%',zIndex:'3'}}>

                <h1 className="text-white">{popular.title}</h1>
                <div className="d-flex justify-content-between m-2" style={{width:'35%'}}>
                <button className="btn btn-outline-danger">Watch Later</button>
                <button className="btn btn-danger">Play Now</button>
                </div>
                <p className="text-light lead" style={{textShadow:'3px 3px 5px black'}}> {check && popular.overview ? popular.overview: popular.overview && popular.overview.slice(0,150)}  <span style={{display:'block',cursor:'pointer',letterSpacing:'10px',fontWeight:'bold'}} onClick={()=>{setCheck(!check)}}>{!check && '...'}</span> </p>


            </div>
        </div>
        <div style={{height:40}}></div>
        <Row idRow={'1'} title='Top rated' req={requests.TopRated}/>
        <Row idRow={'2'} title='Up coming' req={requests.Upcoming}/>
        <Row idRow={'3'} title='Popular' req={requests.Popular}/>
        <Row idRow={'4'} title='Now playing' req={requests.NowPlaying}/>

    </div>
}