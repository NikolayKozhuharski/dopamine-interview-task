import React, { useEffect, useState } from "react";
import { getAllPokemons } from "../../common/pokemonsConstruction";
export const AllPokemons = (props) => {
  const [loading, setLoadind] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoadind(true);
    getAllPokemons().then((allPokemons) => {
      setPokemons(allPokemons);
      setLoadind(false);
    });
  }, []);

  console.log(pokemons);

  return (
    <div>
      {error && <div>Error: {error}</div>}
      {loading ? <h1>....Loading</h1> : null}
      <h1>All Pokemons</h1>
    </div>
  );
};
