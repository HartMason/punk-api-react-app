import { Component } from "react";
import axios from "axios";
import { render } from "@testing-library/react"; //is this necessary
import BeerCard from "./BeerCard";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfBeer: [],
    };
  }

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then((res) => {
      const arrayOfBeer = res.data.map((beer) => {
        beer.likeCount = 0;
        return beer;
      });
      console.log(arrayOfBeer, "ARRAY OF BEERS");
      this.setState({ arrayOfBeer });
    });
  }

  render() {
    return (
      <div>
        <header className="appHeader">
          <ol className="beerList">
            {this.state.arrayOfBeer.map((beer, index) => (
              <BeerCard
                key={index} //passing props or display a value...???? Template literalls // display
                name={beer.name}
                image_url={beer.image_url}
              />
            ))}
          </ol>
        </header>
      </div>
    );
  }
}
export default App;
