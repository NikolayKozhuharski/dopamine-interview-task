import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 180,
  },
  root2: {
    flexGrow: 1,
  },
  media: {
    height: 140,
  },
});

function PokemonCard(props) {
  const classes = useStyles();
  const battle = (name, pokemons) => {
    const random = Math.floor(Math.random() * pokemons.length);

    props.history.push(`/battle/${name}VS${pokemons[random].name}`);
  };

  return (
      <Card
          className={classes.root}
          onClick={() => {
            battle(props.pokemon.name, props.pokemons);
          }}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.pokemon.pictureFront}
              title={props.pokemon.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.pokemon.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <h6>Ability: {props.pokemon.ability.ability.name}</h6>
                <span>Hp: {props.pokemon.stats.hp}</span> <br />
                <span>Attack: {props.pokemon.stats.attack}</span> <br />
                <span>Defense: {props.pokemon.stats.defense}</span> <br />
                <span>
                  Special-attack: {props.pokemon.stats["special-attack"]}
                </span>{" "}
                <br />
                <span>
                  Special-defense: {props.pokemon.stats["special-defense"]}
                </span>{" "}
                <br />
                <span>Speed: {props.pokemon.stats.speed}</span> <br />
              </Typography>
            </CardContent>
          </CardActionArea>
          
        </Card>
  );
}

export default withRouter(PokemonCard);
