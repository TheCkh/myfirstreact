import { useState, useEffect } from "react";
export function Attack({currentenemy, setcurrentenemy, arraypokemon, setarraypokemon, currentpokemon,hasattacked,sethasattacked,totaleffective,settotaleffective}){

    const pokemonattacking = arraypokemon[currentpokemon]
    const typeeffective = {
    Normal: ["Fighting"],
    Fire: ["Water", "Rock", "Ground"],
    Water: ["Electric", "Grass"],
    Electric: ["Ground"],
    Grass: ["Fire", "Ice", "Poison", "Flying", "Bug"],
    Ice: ["Fire", "Fighting", "Rock", "Steel"],
    Fighting: ["Flying", "Psychic", "Fairy"],
    Poison: ["Ground", "Psychic"],
    Ground: ["Water", "Grass", "Ice"],
    Flying: ["Electric", "Ice", "Rock"],
    Psychic: ["Bug", "Ghost", "Dark"],
    Bug: ["Fire", "Flying", "Rock"],
    Rock: ["Water", "Grass", "Fighting", "Ground", "Steel"],
    Ghost: ["Ghost", "Dark"],
    Dragon: ["Ice", "Dragon", "Fairy"],
    Dark: ["Fighting", "Bug", "Fairy"],
    Steel: ["Fire", "Fighting", "Ground"],
    Fairy: ["Poison", "Steel"]

    }

    const typeIneffective = {
        Fire: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
        Water: ["Water", "Fire", "Ice", "Steel"],
        Electric: ["Electric", "Flying", "Steel"],
        Grass: ["Water", "Electric", "Grass", "Ground"],
        Ice: ["Ice"],
        Fighting: ["Bug", "Rock", "Dark"],
        Poison: ["Fighting", "Poison", "Bug", "Grass", "Fairy"],
        Ground: ["Poison", "Rock"],
        Flying: ["Grass", "Fighting", "Bug"],
        Psychic: ["Fighting","Psychic"],
        Bug: ["Fighting","Ground","Grass"],
        Rock: ["Normal","Fire","Poison","Flying"],
        Ghost: ["Poison","Bug"],
        Dragon: ["Water","Fire","Electric","Grass"],
        Dark:["Ghost","Dark"],
        Steel:["Normal","Grass","Ice","Flying","Psychic","Bug","Rock","Dragon","Steel","Fairy"],
        Fairy:["Fighting","Bug","Dark"],
        Normal: []
    };
    

    function decreasehp(eachattack){
        let multiplier = 1
        console.log("BASEMULTI"+multiplier)
        currentenemy.data.type.forEach((poketype)=>{
            console.log("ENEMYFIRST TYPE:" + poketype)
            console.log(eachattack.type)
            if (typeeffective[poketype].includes(eachattack.type)){
                multiplier = multiplier*2
            }
            if (typeIneffective[poketype].includes(eachattack.type)){
                multiplier = multiplier*0.5
                console.log("ENEMY RESISTS:" + eachattack.type + "THANKS TO" + poketype)
            }
        })
        const newhp = currentenemy.hp-eachattack.damage*multiplier
        let updatedenemy = {...currentenemy,hp:newhp}
        setcurrentenemy(updatedenemy)

        if (multiplier<1){
            settotaleffective("Not Very Effective...")
        }

        if (multiplier>1){
            settotaleffective("Super Effective!")
        }

        if (multiplier===1){
            settotaleffective("Dealt Normal Damage!")
        }
        
        if (hasattacked === false){
            sethasattacked(true)
        }
    }

    useEffect(() => {
        if (currentenemy.hp <= 0) {
            console.log("YOU WIN!");
            sethasattacked(false);
            let newarray = [...arraypokemon];
            newarray[currentpokemon].level += 1;
            setarraypokemon(newarray);
        }
    }, [currentenemy.hp]);

    return <div>
        {currentenemy.hp>=0 ? (
            <div>
                <div>You have these Attacks:</div>
            {pokemonattacking.data.Attack.map((eachattack)=>{
            return <button key={eachattack.name} onClick={()=>decreasehp(eachattack)}>{eachattack.name}</button>
        })}
            </div>
    ):null}
    </div>
    
}

export default Attack