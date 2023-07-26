export function Evodisplay({pokemon}){

    const prevo = () => {
        return <div>PREVOLUTION: {pokemon.name}<sub>{pokemon.evolvesfrom}</sub></div>
    }

    const postevo = () => {
        return <div>EVOLUTION: {pokemon.name}<sup>{pokemon.evolvesinto}</sup></div>
    }

    return (<div>
        <fieldset>
        {prevo()}
        {postevo()}
        </fieldset>
        </div>
    )

}