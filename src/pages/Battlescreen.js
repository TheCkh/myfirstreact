import '../App.css';
import { User } from '../components/User';
import { Display } from '../components/Display';
import { Attack } from '../components/Attack';
import { useState, useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../App';
import { Evodisplay } from '../components/Evodisplay';
import { Showtype } from '../components/Showtype';
export function Battlescreen(props) {
  // const pokemonnames = [{name:"Charmander", evolevel: 16, evolvesinto: "Charmelon", evolvesfrom:"None"}, 
  // {name:"Charmelon", evolevel: 36, evolvesinto: "Charizard", evolvesfrom:"Charmander"},
  // {name:"Squirtle", evolevel: 16, evolvesinto:"Wartortle", evolvesfrom:"None"}, 
  // {name:"Bulbasaur", evolevel: 16, evolvesinto:"Ivysaur", evolvesfrom:"None"}]

  const navigate = useNavigate()
  const location = useLocation();
  const firstpokemon = location.state && location.state.firstpokemon
  const nickname = location.state && location.state.nickname
  // const {pokemonchosen,nickname} = useContext(AppContext)
  const [pokemoncaptured, setpokemoncaptured] = useState(1)

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const pokemonlist = {
    Bulbasaur: {name:"Bulbasaur", evolevel: 16, evolvesinto:"Ivysaur", evolvesfrom:"None", type:["Grass", "Poison"], Attack: [{name:"Razor Leaf", type:"Grass", damage:40}]},
    Ivysaur: {name:"Ivysaur", evolevel: 32, evolvesinto:"Venusaur", evolvesfrom:"Bulbasaur", type:["Grass", "Poison"], Attack: [{name:"Razor Leaf", type:"Grass", damage:40}]},
    Venusaur: {name:"Venusaur", evolevel: "None", evolvesinto:"None", evolvesfrom:"Ivysaur", type:["Grass", "Poison"], Attack: [{name:"Razor Leaf", type:"Grass", damage:40}]},
    Charmander: {name:"Charmander", evolevel: 16, evolvesinto: "Charmeleon", evolvesfrom:"None", type:["Fire"], Attack: [{name:"Ember", type:"Fire", damage:40}, {name:"Fire Blast", type:"Fire", damage:120}]},
    Charmeleon: {name:"Charmeleon", evolevel: 36, evolvesinto: "Charizard", evolvesfrom:"Charmander", type:["Fire"], Attack: [{name:"Ember", type:"Fire", damage:40},{name:"Fire Blast", type:"Fire", damage:120}]},
    Charizard: {name:"Charizard", evolevel: "None", evolvesinto: "None", evolvesfrom:"Charmeleon", type:["Fire"], Attack: [{name:"Ember", type:"Fire", damage:40}]},
    Squirtle: {name:"Squirtle", evolevel: 16, evolvesinto:"Wartortle", evolvesfrom:"None", type:["Water"], Attack: [{name:"Bubble", type:"Water", damage:40}]},
    Wartortle: {name:"Wartortle", evolevel: 36, evolvesinto:"Blastoise", evolvesfrom:"Squirtle", type:["Water"], Attack: [{name:"Bubble", type:"Water", damage:40}]},
    Blastoise: {name:"Blastoise", evolevel: "None", evolvesinto:"None", evolvesfrom:"Wartortle", type:["Water"], Attack: [{name:"Bubble", type:"Water", damage:40}]},
    Pikachu: {name:"Pikachu", evolevel: "None", evolvesinto:"Raichu", evolvesfrom:"Pichu", type:["Electric"], attack:[{name:"Thunder Shock", type:"Electric", damage:40}]},
    Meowth: {name:"Meowth", evolevel: 28, evolvesinto:"Persian", evolvesfrom:"None", type:["Normal"], attack:[{name:"Pay Day", type:"Normal", damage:40}]},
    Psyduck: {name:"Psyduck", evolevel: 33, evolvesinto:"Golduck", evolvesfrom:"None", type:["Water"], attack:[{name:"Confusion", type:"Psychic", damage:40}]},
    Machop: {name:"Machop", evolevel: 28, evolvesinto:"Machoke", evolvesfrom:"None", type:["Fighting"], attack:[{name:"Karate Chop", type:"Fighting", damage:50}]},
    Tentacool: {name:"Tentacool", evolevel: 30, evolvesinto:"Tentacruel", evolvesfrom:"None", type:["Water","Poison"], attack:[{name:"Bubble Beam", type:"Water", damage:40}]},
    Geodude: {name:"Geodude", evolevel: 25, evolvesinto:"Graveler", evolvesfrom:"None", type:["Rock","Ground"], attack:[{name:"Rock Throw", type:"Rock", damage:50}]},
    Rapidash: {name:'Rapidash',evolevel:'None',evolvesinto:'None',evolvesfrom:'Ponyta',type:['Fire'],attack:[{name:'Fire Spin',type:'Fire',damage:35}]},
    Magnemite:{name:'Magnemite',evolevel:30,evolvesinto:'Magneton',evolvesfrom:'None',type:['Electric','Steel'],attack:[{name:'Spark',type:'Electric',damage:20}]},
    Gengar:{name:'Gengar',evolevel:'None',evolvesinto:'None',evolvesfrom:'Haunter',type:['Ghost','Poison'],attack:[{name:'Shadow Ball',type:'Ghost',damage:80}]},
    Dragonite:{name:'Dragonite',evolevel:'None',evolvesinto:'None',evolvesfrom:'Dragonair',type:['Dragon','Flying'],attack:[{name:'Dragon Claw',type:'Dragon',damage:80}]}
  }

  const pokemonkeylist = Object.keys(pokemonlist)
  const random = getRandomInt(99)+1

  const [currentenemy, setcurrentenemy] = useState({level:random,hp:random*5,maxhp:random*5,data:pokemonlist[pokemonkeylist[getRandomInt(pokemonkeylist.length)]]})
  const generaterandomenemy = () => {
    const random = getRandomInt(99)+1
    let enemy = { 
      level: random,
      hp: random*5,
      maxhp: random*5,
      data: pokemonlist[pokemonkeylist[getRandomInt(pokemonkeylist.length)]]
    }
    setcurrentenemy(enemy)
  }

  const [arraypokemon,setarraypokemon] = useState([{level: 5, nickname:nickname, data: pokemonlist[firstpokemon]}])
  const [currentpokemon, setcurrentpokemon] = useState(0)

  const [totaleffective,settotaleffective] = useState("Dealt normal damage!")
  const [hasattacked,sethasattacked] = useState(false)


  // const showtype = (typelist) =>{
  //   let string = ""
  //   typelist.forEach(element => {
  //     string = string + element + " "
  //   });
  //   return string
  // }

  // useEffect(()=>{
  //   alert("Thanks for playing my game!")
  // },[])

  //should generate a uuid instead
  return <div className='center'>
    <strong>You're fighting a level {currentenemy.level} {currentenemy.data.name} in Vermillion forest!</strong>
    <button onClick = {generaterandomenemy}>Random!</button>

    <fieldset>
      <legend>Your pokemon: </legend>  
    {arraypokemon.map((pokemon, index) => {
    return (
    <div key = {pokemon.nickname+index} data-testid="yourpokemon">
      <div>Name: {pokemon.data.name} </div>
      <div>Nickname: {pokemon.nickname}</div> 
      <div>Level: {pokemon.level}</div>
      <Showtype typelist = {pokemon.data.type} />
    </div>
      )
      })}
    </fieldset>
    <h1 className=''>{currentenemy.hp<=0 ? <strong>You win!</strong> : <p>Still fighting!</p>}</h1>
    <h1 style={{color: currentenemy.hp/currentenemy.maxhp<=0.3 ? "red": "green"}}>Pokemon Battle!</h1>
    <fieldset>
      <legend data-testid="Battle">Battle!</legend>
    <User enemydata = {currentenemy} hasattacked={hasattacked} totaleffective={totaleffective}/>
    </fieldset>
    {/* {pokemonnames.map((pokemon)=>{

      // return(
      //   <Display name = {pokemon.name} level = {pokemon.level}/>
      // )
      return pokemon.level>10 ? <Display name = {pokemon.name} level = {pokemon.level}/> : null

    })} */}
    <h1 className='styletest'>Woo</h1>
    <Attack currentenemy={currentenemy} setcurrentenemy={setcurrentenemy} arraypokemon={arraypokemon} setarraypokemon={setarraypokemon} currentpokemon={currentpokemon} totaleffective={totaleffective} settotaleffective={settotaleffective} hasattacked={hasattacked} sethasattacked={sethasattacked}/>
    <p>
    <button onClick={()=>navigate(-1)}>Choose another pokemon!</button>
    </p>
    </div>;
}


export default Battlescreen;
//jsx mixes js and html
//every time you display ui, create a function that returns some html
//a component is some js function that returns jsx
//returning ui stuff...every component starts with a CAPITAL LETTER
//every react component has props (data)
//need {} for numbers
//if you have a variable, put it in {brackets}
//JSX treats age = 1 as a string!
