import './App.css';
import { Route, Routes } from "react-router-dom";
import Battlescreen from './pages/Battlescreen';
import { Dummypage } from './pages/Dummypage';
import { Choosepokemon } from './pages/Choosepokemon';
import { Information } from './pages/Information';
import { createContext } from 'react';
import { useState } from 'react';

export const AppContext = createContext()
function App() {

  // const [nickname,setnickname] = useState("Charmander")
  // const [pokemonchosen,setpokemonchosen] = useState("Charmander")
  
  return (<div>
    {/* <AppContext.Provider value={{nickname,setnickname,pokemonchosen,setpokemonchosen}}> */}
    <Routes>
      <Route path="/" element={<Choosepokemon />} />
      <Route path="/dummy" element={<Dummypage />} />
      <Route path="/Battle" element={<Battlescreen />} />
      <Route path="/Information/:infoid" element={<Information />} />
      <Route path="*" element={<h1>Page not found!</h1>} />
    </Routes>
    {/* </AppContext.Provider> */}
    </div>);
}

export default App;

