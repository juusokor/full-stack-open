import React from "react";

const Numbers = ({ persons, filter, handleRemoveClick }) => {
  const filteredList = persons.filter(e =>
    e.name.toLowerCase().includes(filter)
  );
  const numberList = filteredList.map(person => (
    <Person
      key={person.id}
      person={person}
      handleRemoveClick={handleRemoveClick}
    />
  ));

  return (
    <div>
      <h2>Numerot</h2>
      <table>
        <tbody>{numberList}</tbody>
      </table>
    </div>
  );
};

const Person = ({ person, handleRemoveClick }) => {
  return (
    <tr key={person.id}>
      <td>{person.name}</td>
      <td>{person.number}</td>
      <td>
        <button type="submit" data-id={person.id} onClick={handleRemoveClick}>
          poista
        </button>
      </td>
    </tr>
  );
};

export default Numbers;
