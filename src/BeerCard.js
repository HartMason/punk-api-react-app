import React from 'react'


const BeerCard = (props) => {
  return (
    <div>
        <h1>{props.tagline}</h1>
        <li>{props.name}</li>
        <img src={props.image_url}></img>
    </div>
  )
}

export default BeerCard