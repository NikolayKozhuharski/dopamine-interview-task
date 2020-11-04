import React from "react";
import { BASE_URL } from "./constants";

const getPokemon = (name, url) => {
  let ability;
  const moves = [];
  const stats = {};
  let pokemon = {};
  let picture;
  return fetch(url)
    .then((response) => response.json())
    .then((pokemonData) => {
      ability = pokemonData.abilities.find(
        (ability) => ability.is_hidden === false
      );
      console.log(pokemonData);
      for (let i = 0; i <= 3; i++) {
        moves.push(pokemonData.moves[i].move.name);
      }

      for (const stat of pokemonData.stats) {
        stats[stat.stat.name] = stat.base_stat;
      }
      picture = pokemonData.sprites.back_default;
      pokemon = {
        name,
        ability,
        moves,
        stats,
        picture,
      };

      return pokemon;
    });
};

export const getAllPokemons = () => {
  return fetch(BASE_URL)
    .then((p) => p.json())
    .then((data) => {
      const allPokemonsPromises = [];
      for (const element of data.results) {
        allPokemonsPromises.push(getPokemon(element.name, element.url));
      }

      return Promise.all(allPokemonsPromises);
    });
};
