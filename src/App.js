import { Component } from "react";
import "./App.css";
import axios from 'axios'
import { render } from "@testing-library/react";

class App extends Component() {
  constructor() {
    super()
  this.state = {
    arrayOfBeer: []
  }
  }

  axios.get('https://api.punkapi.com/v2/beers')
    .then( res => {
      const arrayOfBeer = res.data 
      this.setState({ arrayOfBeer })
    })


render() {
  return <div className="App">

  </div>;
}
}
export default App;
