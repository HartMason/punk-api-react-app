import React, { useState } from "react";
import "./beerCard.css";

const BeerCard = (props) => {
  const [like, setlike] = useState(false);
  const results = useState(false);
  console.log(results);

  return (
    <div className="beerContainer">
      <ul className="beerName">{props.name}</ul>
      <ul className="flex">
        <img className="beerImage" src={props.image_url} alt="beerImage"></img>
      </ul>
      <h1>{props.tagline}</h1>
      <button onClick={() => setlike(!like)}>
        {like ? "Like Me" : "Not Liked"}
      </button>
    </div>
  );
};

export default BeerCard;
