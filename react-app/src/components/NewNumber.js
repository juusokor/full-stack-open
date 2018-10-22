import React from "react";

const NewNumber = ({
  handleSubmit,
  newNameState,
  newNumberState,
  handleNameChange,
  handleNumberChange
}) => {
  return (
    <div>
      <h2>Lisää uusi</h2>
      <form onSubmit={handleSubmit}>
        <div>
          nimi:
          <input value={newNameState} onChange={handleNameChange} />
        </div>
        <div>
          numero:
          <input value={newNumberState} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
    </div>
  );
};

export default NewNumber;
