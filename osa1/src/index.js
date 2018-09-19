import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <div>
             <h1>{props.kurssi.nimi}</h1>
        </div>
    )
}
const Sisalto = (props) => {  
    const osaLista = props.kurssi.osat.map((osa) => {
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
    props.kurssi.osat.forEach((osa) => {
        summa += osa.tehtavia;
    });
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
      }

  return (
    <div>
     <Otsikko kurssi={kurssi} />
     <Sisalto kurssi={kurssi} />
     <Yhteensa kurssi={kurssi} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)