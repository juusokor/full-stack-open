import React from "react";

const Countries = ({
  countries,
  filter,
  selectedCountry,
  handleCountryClick
}) => {
  const filteredList = countries.filter(e =>
    e.name.toLowerCase().includes(filter)
  );
  const countryList = filteredList.map(country => (
    <Country
      key={country.name}
      country={country.name}
      handleCountryClick={handleCountryClick}
    />
  ));

  if (filter.length === 0) {
    return <div />;
  }

  if (selectedCountry !== "") {
    const theCountry = countries.find(e => e.name === selectedCountry);
    return <CountryDetails country={theCountry} />;
  }

  if (filteredList.length >= 10) {
    return <div>too many matches, specify another filter</div>;
  } else {
    if (filteredList.length === 1) {
      return (
        <CountryDetails key={filteredList[0].name} country={filteredList[0]} />
      );
    } else {
      return (
        <div>
          <table>
            <tbody>{countryList}</tbody>
          </table>
        </div>
      );
    }
  }
};

const Country = ({ country, handleCountryClick }) => {
  return (
    <tr>
      <td key={country} data-country={country} onClick={handleCountryClick}>
        {country}
      </td>
    </tr>
  );
};

const CountryDetails = ({ country }) => {
  return (
    <div>
      <h1>
        {country.name} {country.nativeName}
      </h1>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <img src={country.flag} alt="" width="50%" height="50%" />
    </div>
  );
};

export default Countries;
