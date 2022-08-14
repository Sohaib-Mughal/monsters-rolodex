// import { Component } from "react";
import "./card.styles.css";

const Card = ({ data }) => (
  <div className="card-container">
    <img
      alt={`monster ${data.name}`}
      src={`https://robohash.org/${data.id}?set=set2&size=180x180`}
    />
    <h1>{data.name}</h1>
    <p>{data.email}</p>
  </div>
);

export default Card;
