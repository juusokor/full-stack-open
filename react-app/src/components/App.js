import React from "react";
import Numbers from "./Numbers";
import NewNumber from "./NewNumber";
import Filter from "./Filter";
import axios from "axios";
import personService from "../services/persons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      newName: "",
      newNumber: "",
      filter: ""
    };
  }

  componentDidMount() {
    personService.getAll().then(persons => {
      this.setState({ persons });
    });
  }

  addName = event => {
    event.preventDefault();

    const hasName = this.state.persons.find(e => e.name === this.state.newName);

    if (typeof hasName === "undefined") {
      const nameObject = {
        name: this.state.newName,
        number: this.state.newNumber
      };
      const persons = this.state.persons.concat(nameObject);

      personService.create(nameObject).then();

      this.setState({
        persons,
        newName: "",
        newNumber: ""
      });
    } else {
      alert("Nimi jo listassa");
      this.setState({});
    }
  };

  handleNameChange = event => {
    this.setState({ newName: event.target.value });
  };
  handleNumberChange = event => {
    this.setState({ newNumber: event.target.value });
  };
  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Puhelinluettelo</h1>
        <Filter
          filter={this.state.filter}
          handleFilterChange={this.handleFilterChange}
        />
        <NewNumber
          handleSubmit={this.addName}
          newNameState={this.state.newName}
          newNumberState={this.state.newNumber}
          handleNameChange={this.handleNameChange}
          handleNumberChange={this.handleNumberChange}
        />
        <Numbers persons={this.state.persons} filter={this.state.filter} />
      </div>
    );
  }
}

export default App;
