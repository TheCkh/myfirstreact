import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useContext } from "react"
import { AppContext } from "../App"
export function Choosepokemon(){

    const navigate  = useNavigate()
    const [chosen, setchosen] = useState(false)
    const [pokemonchosen,setpokemonchosen] = useState("")
    const [nickname,setnickname] = useState("") 
    // const {pokemonchosen, setpokemonchosen} = useContext(AppContext)
    // const {nickname, setnickname} = useContext(AppContext)
    const [tempname,settemp] = useState("")

    const chosenpokemon = (name) =>{
        setpokemonchosen(name)
        setnickname(name)
        setchosen(true)
    }

    const setnick = (newname) =>{
        if (newname.toUpperCase() === "GOD"){
            alert("Only Arceus is god!")
        }

        else{
            setnickname(newname)
        }
    }

    const Goto = (name) => {
        navigate('/Battle',{ state: { firstpokemon: name, nickname } })
    }
    return(
        <fieldset>
            <legend>Choose your first pokemon!</legend>
            <div>
                <button onClick={()=> chosenpokemon("Charmander")}>Charmander!</button>
                <button onClick={()=> chosenpokemon("Squirtle")}>Squirtle</button>
                <button onClick={()=> chosenpokemon("Bulbasaur")}>Bulbasaur</button>
            </div>
            {chosen && (
            <div>
                <p>
                <input onChange={(e)=>settemp(e.target.value)}></input>
                <button onClick={()=>setnick(tempname)}>Set Nickname!</button>
                </p>
                <div>Your current nickname: {nickname}</div>
                <p>
                <button onClick={()=> Goto(pokemonchosen)}>Go adventuring!</button>
                </p>
            </div>
        )}
        </fieldset>
    )
}