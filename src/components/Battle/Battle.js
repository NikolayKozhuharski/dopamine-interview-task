import React, { useContext, useState } from "react";
import { useParams, withRouter } from "react-router-dom";
import { pokemonsContext } from "../../common/pokemonsContext";
import PokemonCard from "../PokemonCard/PokemonCard";
import "../AllPokemons/allPokemons.css";
import { Layer, Rect, Stage, Text } from "react-konva";
import MyRect from "../konva";
import URLImage from "../konva";
import Konva from "konva";

const Battle = () => {
  const { selectedPokemon } = useParams();
  const fightPair = selectedPokemon.split("VS");
  const { pokemons } = useContext(pokemonsContext);
  const [myPokemonHp, setMyPokemonsHp] = useState(pokemons.filter((p) => p.name === fightPair[0])[0].stats.hp);
  const [enemyHp, setEnemyHp] = useState(pokemons.filter((p) => p.name === fightPair[1])[0].stats.hp);

  const myPokemon = pokemons.filter((p) => p.name === fightPair[0])[0];
  
  const enemy = pokemons.filter((p) => p.name === fightPair[1])[0];
  

  const atack = (op1, op2) => {
    const damage =
      (op1.stats.attack / op2.stats.defense) * Math.floor(Math.random() * 200) +
      1;
      console.log(op1.stats.attack)
      return damage;
  };

  const battle = (op1, op2) => {
    if (op1.stats.speed > enemy.stats.speed) {
      setMyPokemonsHp(myPokemonHp-atack(op1, op2))
    }
    else{setEnemyHp(enemyHp-atack(op2, op1))}
  };

  return (
    <div className="grid-container">
      <button onClick={()=>battle(myPokemon, enemy)}>BATTLE</button>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <URLImage src={myPokemon.picture} x={100} y={100} />
          <Rect x={100} y={200} width={100} height={15} stroke={"black"} />
          <Rect
            x={100}
            y={200}
            width={myPokemonHp >= 0 ? myPokemonHp :0}
            height={15}
            fill={"limegreen"}
          />
          <Text x={100} y={202} text={`hp: ${myPokemonHp > 0 ? myPokemonHp : "0"}%`} />

          <URLImage src={enemy.picture} x={500} y={100} />
          <Rect x={500} y={200} width={100} height={15} stroke={"black"} />
          <Rect
            x={500}
            y={200}
            width={enemyHp >= 0 ? enemyHp : 0}
            height={15}
            fill={"limegreen"}
          />
          <Text x={500} y={202} text={`hp: ${enemyHp ? enemyHp : "0"}%`} />
        </Layer>
      </Stage>
    </div>
  );
};

export default withRouter(Battle);
