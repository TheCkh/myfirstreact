import Axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export function Information(){
    const { infoid } = useParams()
    const [catinfo,setcatinfo] = useState("")
    // useEffect(() => {
    //     Axios.get("https://catfact.ninja/fact").then((res)=>{
    //         setcatinfo(res)
    //     })
    // }, []) // Depend on infoid, so the effect only runs when infoid changes

    const fetchcatfact = () => {
        Axios.get("https://catfact.ninja/fact").then((res)=>{
            setcatinfo(res)
        })
    }

    return (
    <div>
        <div>You are User {infoid}</div>
        <button onClick ={fetchcatfact}>Press for facts!</button>
        <p>Fact of the day: {catinfo?.data?.fact}</p>
    </div>
    )
}

//Axios => 