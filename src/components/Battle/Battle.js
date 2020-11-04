import React, { useContext } from "react";
import { useParams, withRouter } from "react-router-dom";
import { pokemonsContext } from "../../common/pokemonsContext";
import PokemonCard from "../PokemonCard/PokemonCard";
import '../AllPokemons/allPokemons.css'

const Battle = () => {
  const { selectedPokemon } = useParams();
  const fightPair = selectedPokemon.split("VS");
  const { pokemons } = useContext(pokemonsContext);
  const myPokemon = pokemons.filter((p) => p.name === fightPair[0])[0];
  const enemy = pokemons.filter((p) => p.name === fightPair[1])[0];
  return (
    <div className='grid-container'>
    <h1>Battle</h1>
      <PokemonCard key={myPokemon.name} pokemon={myPokemon} />
      <h1>VS</h1>
      <PokemonCard key={enemy.name} pokemon={enemy} />
    </div>
  );
};

export default withRouter(Battle);
