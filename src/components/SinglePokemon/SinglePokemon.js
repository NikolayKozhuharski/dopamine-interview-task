import React, { useEffect, useState } from 'react'

export const SinglePokemon = (props) => {
  const [loading, setLoadind] = useState(false);
  const [pokemon, setPokemon] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoadind(true);
    fetch(props.pokemons[0].url)
      .then((p) => p.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.message);
        }
        setPokemon(data);
       
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoadind(false));
  }, []);
console.log(pokemon)

  return (
    <div>
      {/* {props.pokemons.map((p) =>(
        <p key={p.name}>name: {p.name}</p>
      ))} */}
    </div>
  )
}
