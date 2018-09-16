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
    const osa1 = props.osa1
    const osa2 = props.osa1
    const osa3 = props.osa3
    const tehtavia1 = props.tehtavia1
    const tehtavia2 = props.tehtavia2
    const tehtavia3 = props.tehtavia3
    return( 
        <div>
            <Osa osa={osa1} tehtavia={tehtavia1} />
            <Osa osa={osa2} tehtavia={tehtavia2} />
            <Osa osa={osa3} tehtavia={tehtavia3} />
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
    return (
        <div>
            <p>yhteensa {props.yhteensa} tehtävää</p>
        </div>
    )

}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
     <Otsikko kurssi={kurssi} />
     <Sisalto osa1={osa1} tehtavia1={tehtavia1} osa2={osa2} tehtavia2={tehtavia2} osa3={osa3} tehtavia3={tehtavia3}  />
     <Yhteensa yhteensa={tehtavia1 + tehtavia2 + tehtavia3} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)