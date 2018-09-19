import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <div>
             <h1>{props.kurssi}</h1>
        </div>
    )
}
const Sisalto = (props) => {  
    const osaLista = props.osat.map((osa) => {
        return <Osa osa={osa.nimi} tehtavia={osa.tehtavia} />;
    }) 
     return( 
        <div>
           {osaLista}
        </div>
    )
}

const Osa = (props) => {
    return (
        <div>
            <p>{props.osa} {props.tehtavia}</p>
        </div>
    )

}

const Yhteensa = (props) => {
    let summa = 0
    props.osat.forEach((osa) => {
        summa += osa.tehtavia;
    });
    return (
        <div>
            <p>yhteensa {summa} tehtävää</p>
        </div>
    )

}

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osat = [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14
        }
      ]

  return (
    <div>
     <Otsikko kurssi={kurssi} />
     <Sisalto osat={osat} />
     <Yhteensa osat={osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)