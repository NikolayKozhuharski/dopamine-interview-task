import React, { createContext, useContext, useEffect, useState } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./App.css";
import { BASE_URL } from "./common/constants";
import { getAllPokemons } from "./common/pokemonsConstruction";
import { pokemonsContext } from "./common/pokemonsContext";
import { AllPokemons } from "./components/AllPokemons/AllPokemons";
import Battle from "./components/Battle/Battle";
import Konva from "./components/konva";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const [pokemons, setPokemons] = useState([]);
  
  useEffect(() => {
    
    getAllPokemons().then((allPokemons) => {
      setPokemons(allPokemons);
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <pokemonsContext.Provider value={{pokemons}}>
        <Switch>
          <Route path='/pokemons' exact component={AllPokemons} />
          <Route path='/battle/:selectedPokemon' exact component={Battle} />
          <Route path='/konva' exact component={Konva} />
        </Switch>
        </pokemonsContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
