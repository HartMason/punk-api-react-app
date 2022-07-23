import React from "react";
import BeerCard from "./BeerCard.css";

const beerCard = (props) => {
  // handleLike = () => {
  //     console.log("LIKED!!!!!!!!!!");
  //     return alert('is Liked')
  //   };

  return (
    <div className="parentContainer">
      <div className="beerContainer">
        <li className="beerName">{props.name}</li>
        <img className="beerImage" src={props.image_url}></img>
        <h1>{props.tagline}</h1>
        {/* <button onClick={handleLike}> {props.likeCount} Like</button> */}
      </div>
    </div>
  );
};

export default beerCard;
