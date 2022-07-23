import React from "react";
import BeerCard from "./BeerCard.css";

const beerCard = (props) => {

    //ask Jacob how to style data fetched from the api !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  return (
    
      <div className="beerContainer">
        <li className="beerName">{props.name}</li>
        <img className="beerImage" src={props.image_url}></img>
        <h1>{props.tagline}</h1>
        {/* <button onClick={handleLike}> {props.likeCount} Like</button> */}
      </div>
   
  );
};

export default beerCard;
