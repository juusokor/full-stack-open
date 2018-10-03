import React from 'react'
import ReactDOM from 'react-dom'

const Kurssi = ({ kurssi }) =>
  <div>
    <Otsikko kurssi={kurssi} />
    <Sisalto kurssi={kurssi} />
    <Yhteensa kurssi={kurssi} />
  </div>

const Otsikko = (props) =>
  <div>
    <h1>{props.kurssi.nimi}</h1>
  </div>

const Sisalto = ({ kurssi }) => {
  const osaLista = kurssi.osat.map(osa => <Osa key={osa.id} osa={osa} />)
  return (
    <div>
      {osaLista}
    </div>
  )
}

const Osa = ({ osa }) =>
  <div>
    <p>{osa.nimi} {osa.tehtavia}</p>
  </div>

const Yhteensa = ({ kurssi }) => {
  const summa = kurssi.osat.reduce((sum, osa) => sum + osa.tehtavia, 0)
  return (
    <div>
      <p>yhteensa {summa} tehtävää</p>
    </div>
  )
}

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10,
        id: 1
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7,
        id: 2
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Kurssi kurssi={kurssi} />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)