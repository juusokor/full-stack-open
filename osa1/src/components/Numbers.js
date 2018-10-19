import React from 'react'

const Numbers = ({ persons, filter }) => {
    const filteredList = persons.filter(e => e.name.toLowerCase().includes(filter))
    const numberList = filteredList.map(person => <Person key={person.name} person={person} number={person.number} />)
    // const numberList = persons.map(person => <Person key={person.name} person={person} number={person.number} />)
    
    return (
        <div>
            <h2>Numerot</h2>
            <table>
                <tbody>
                    {numberList}
                </tbody>
            </table>
        </div>
    )
}

const Person = ({ person, number }) => {
    return (
        <tr>
            <td>{person.name}</td><td> {number}</td>
        </tr>
    )
}

export default Numbers