import Navn from "./navnetf"


export default function LayoutN(props){

    return <div>
        <Navn/>
        {props.children}
    </div>
}