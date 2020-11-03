import React, { useEffect, useState } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./App.css";
import { BASE_URL } from "./common/constants";
import { AllPokemons } from "./components/AllPokemons/AllPokemons";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path='/pokemons' exact component={AllPokemons} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
