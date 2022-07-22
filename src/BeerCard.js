import React from 'react'


const BeerCard = (props) => {

    handleLike = () => {
        console.log("LIKED!!!!!!!!!!");
        return alert('is Liked')
      };
    
  return (
    <div>
        <h1>{props.tagline}</h1>
        <li>{props.name}</li>
        <img src={props.image_url}></img>
        <button onClick={handleLike}> {props.likeCount} Like</button>
        
    </div>
  )
}

export default BeerCard