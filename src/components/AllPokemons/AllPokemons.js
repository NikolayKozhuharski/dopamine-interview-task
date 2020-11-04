import React, { createContext, useContext, useEffect, useState } from "react";
import { getAllPokemons } from "../../common/pokemonsConstruction";
import { pokemonsContext } from "../../common/pokemonsContext";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./allPokemons.css";
export const AllPokemons = (props) => {
  const { pokemons } = useContext(pokemonsContext);
  console.log(pokemons);

  return (
    <div>
      <h1>All Pokemons</h1>
      <div className="grid-container">
        {" "}
        {pokemons.map((e) => (
          <PokemonCard key={e.name} pokemon={e} pokemons={pokemons} />
        ))}
      </div>
    </div>
  );
};
