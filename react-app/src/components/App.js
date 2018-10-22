import React from "react";
import Countries from "./Countries";
import Filter from "./Filter";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      filter: ""
    };
  }

  componentDidMount() {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      this.setState({ countries: response.data });
    });
  }

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    return (
      <div>
        <Filter
          filter={this.state.filter}
          handleFilterChange={this.handleFilterChange}
        />
        <Countries
          countries={this.state.countries}
          filter={this.state.filter}
        />
      </div>
    );
  }
}

export default App;
