import React, { useContext, useEffect, useState } from "react";
import { useParams, withRouter } from "react-router-dom";
import { pokemonsContext } from "../../common/pokemonsContext";
import PokemonCard from "../PokemonCard/PokemonCard";
import "../AllPokemons/allPokemons.css";
import { Layer, Rect, Stage, Text } from "react-konva";
import MyRect from "../konva";
import URLImage from "../konva";
import Konva from "konva";
import { SignalCellularNullSharp } from "@material-ui/icons";

const Battle = () => {
  const { selectedPokemon } = useParams();
  const fightPair = selectedPokemon.split("VS");
  const { pokemons } = useContext(pokemonsContext);
  const [myPokemonHp, setMyPokemonsHp] = useState(null);
  const [enemyHp, setEnemyHp] = useState(null);
  const [enemyMove, setEnemyMove] = useState(500);
  const [myPokemonMove, setMyPokemonMove] = useState(100);
  const [myPokemonPicture, setMyPokemonPicture] = useState(null);
  const [enemyPicture, setEnemyPicture] = useState(null);
  const [finish, setFinish] = useState("BATTLE");

  const myPokemon = pokemons.filter((p) => p.name === fightPair[0])[0];

  const enemy = pokemons.filter((p) => p.name === fightPair[1])[0];

  useEffect(() => {
    setMyPokemonsHp(myPokemon.stats.hp);
    setEnemyHp(enemy.stats.hp);
    setMyPokemonPicture(myPokemon.pictureBack);
    setEnemyPicture(enemy.pictureFront);
  }, []);

  const atack = (op1, op2) => {
    const damage =
      (op1.stats.attack / op2.stats.defense) * Math.floor(Math.random() * 200) +
      1;
    console.log(op1.stats.attack);
    return damage;
  };

  const blink = (pokemon) => {
    for (var i = 900; i < 4500; i = i + 900) {
      setTimeout(setMyPokemonPicture(null), i);
      setTimeout(setMyPokemonPicture(pokemon.pictureBack), i + 450);
    }
  };

  const battle = (op1, op2) => {
    if (op1.stats.speed > enemy.stats.speed) {
      setMyPokemonsHp(Math.floor(myPokemonHp - atack(op1, op2)));
      setEnemyMove(150);
      blink(myPokemon);
      setInterval(() => {
        setEnemyMove(500);
      }, 3000);
    } else {
      setEnemyHp(Math.floor(enemyHp - atack(op2, op1)));
      setMyPokemonMove(450);
      blink(myPokemon);
      setInterval(() => {
        setMyPokemonMove(100);
      }, 3000);
    }
  };

  return (
    <div className="grid-container">
      <button
        onClick={() => {
          battle(myPokemon, enemy);
          if (myPokemonHp <= 0) {
            setFinish("You Lose!");
          } else if (enemyHp <= 0) {
            setFinish("You Win!");
          }
        }}
      >
        BATTLE
      </button>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text={finish} fontSize={100} x={200} />
          <URLImage src={myPokemonPicture} x={myPokemonMove} y={100} />
          <Rect
            x={myPokemonMove}
            y={200}
            width={100}
            height={15}
            stroke={"black"}
          />
          <Rect
            x={myPokemonMove}
            y={200}
            width={myPokemonHp >= 0 ? myPokemonHp : 0}
            height={15}
            fill={"limegreen"}
          />
          <Text
            x={myPokemonMove}
            y={202}
            text={`hp: ${myPokemonHp > 0 ? myPokemonHp : "0"}%`}
          />

          <URLImage src={enemyPicture} x={enemyMove} y={100} />
          <Rect
            x={enemyMove}
            y={200}
            width={100}
            height={15}
            stroke={"black"}
          />
          <Rect
            x={enemyMove}
            y={200}
            width={enemyHp >= 0 ? enemyHp : 0}
            height={15}
            fill={"limegreen"}
          />
          <Text
            x={enemyMove}
            y={202}
            text={`hp: ${enemyHp ? enemyHp : "0"}%`}
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default withRouter(Battle);
