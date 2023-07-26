import { Showtype } from "./Showtype";
export function User({enemydata, hasattacked,totaleffective}){
  return(
    <div>
      
      <h1>Level: {enemydata.level} <Showtype typelist={enemydata.data.type}/></h1>
      <div>
        <h1>HP: {enemydata.hp > 0 ? enemydata.hp : <span>Defeated!</span>}
        <progress value = {enemydata.hp} max = {enemydata.maxhp}>HP</progress>
        </h1>
      </div>
      {enemydata.hp>0 ? <h2>{enemydata.data.name} attacks!</h2> : <h2>You win!</h2>}
      {hasattacked && <div className="side-effect">{totaleffective}</div>}

    </div>
  );
};