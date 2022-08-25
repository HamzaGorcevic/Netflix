
import { Routes,Route } from "react-router-dom";
import Home from "./netflixhome";
import LayoutN from "./layoutnft";
import Accout from "./accountnetflix";
export default function ShowHome(){
    return <>
    <LayoutN>
        <Routes>
            <Route path ={'/'} element={<Home/>}/>
            <Route path={'/account'} element={<Accout/>}/>
        </Routes>
    </LayoutN>
    </>
}