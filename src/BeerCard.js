import React from "react";
import "./beerCard.css";

const beerCard = (props) => {

    //ask Jacob how to style data fetched from the api !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  return (
    
      <div className="beerContainer">
        <ul className="beerName">{props.name}</ul>
        <ul className="flex">
        <img className="beerImage" src={props.image_url} alt='beerImage'></img>
        </ul>
        <h1>{props.tagline}</h1>
        {/* <button onClick={handleLike}> {props.likeCount} Like</button> */}
      </div>
   
  );
};

export default beerCard;
