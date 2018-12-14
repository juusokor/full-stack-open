import React from "react";
import Numbers from "./Numbers";
import NewNumber from "./NewNumber";
import Filter from "./Filter";
import Message from "./Message";
import personService from "../services/persons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      newName: "",
      newNumber: "",
      filter: "",
      message: null
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
        number: this.state.newNumber,
        id: this.state.persons.length + 1
      };
      const persons = this.state.persons.concat(nameObject);

      personService.create(nameObject).then(() => {
        this.setState({
          persons,
          newName: "",
          newNumber: "",
          message: `Lisätty nimi ${nameObject.name} numerolla ${
            nameObject.number
          }`
        });
        setTimeout(() => {
          this.setState({ message: null });
        }, 5000);
      });
    } else {
      const updatedNameObject = { ...hasName, number: this.state.newNumber };

      if (
        window.confirm(
          `${
            updatedNameObject.name
          } on jo luetteleossa. Korvataanko vanha numero uudella?`
        )
      ) {
        personService
          .update(updatedNameObject.id, updatedNameObject)
          .then(updatedNameObject => {
            const persons = this.state.persons.filter(
              e => e.id !== updatedNameObject.id
            );
            this.setState({
              persons: persons.concat(updatedNameObject),
              newName: "",
              newNumber: "",
              message: `Päivitetty nimi ${updatedNameObject.name} numerolla ${
                updatedNameObject.number
              }`
            });
            setTimeout(() => {
              this.setState({ message: null });
            }, 5000);
          })
          .catch(() => {
            alert(
              "Varoitus! Päivitys epäonnistui koska muutoksen kohteena olleen henkilön tiedot on jo poistettu."
            );
            personService.getAll().then(persons => {
              this.setState({ persons });
            });
          });
      }
    }
  };

  removeName = event => {
    event.preventDefault();
    const removeId = event.target.dataset.id;
    const personR = this.state.persons.find(e => e.id === removeId);

    if (window.confirm(`Poistetaanko id ${personR.name}?`)) {
      personService.remove(removeId).then(() => {
        this.setState({
          persons: this.state.persons.filter(e => e.id !== removeId),
          message: `Poistettu henkilö ${personR.name}`
        });
        setTimeout(() => {
          this.setState({ message: null });
        }, 5000);
      });
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
        <Message message={this.state.message} />
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
        <Numbers
          persons={this.state.persons}
          filter={this.state.filter}
          handleRemoveClick={this.removeName}
        />
      </div>
    );
  }
}

export default App;
