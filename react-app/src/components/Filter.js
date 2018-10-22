import React from "react";

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <form>
        <div>
          find countries: <input value={filter} onChange={handleFilterChange} />
        </div>
      </form>
    </div>
  );
};

export default Filter;
