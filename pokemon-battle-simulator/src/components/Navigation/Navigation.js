import React, { useContext } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./Navigation.css";

const Navigation = (props) => {
  const history = props.history;


  return (
        <nav id="mainNav">

            <div className="list-group">

          <NavLink to="/" className="list-group-item">
            Home
            </NavLink>
            <br/>
              <NavLink to="/pokemons" className="list-group-item">
                Pokemons
              </NavLink>
            <br/>

              <NavLink to="/battle" className="list-group-item">
                Bottle
              </NavLink>
            </div>
        </nav>
  );
};

export default withRouter(Navigation);
