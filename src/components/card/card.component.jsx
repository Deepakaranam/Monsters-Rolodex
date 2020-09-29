import React from "react";

import "./card.styles.css";

export const Card = (props) => (
  /*console.log({props.monster.id});*/
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h1>{props.monster.id}</h1>
    <h2> {props.monster.name}</h2>
    <p> {props.monster.email}</p>
  </div>
);
