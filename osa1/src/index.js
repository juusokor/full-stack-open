import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
    <div>
      <h1>anna palautetta</h1>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)


const Statistics = ({ stats }) => {
  const sum = stats.hyva + stats.neutraali + stats.huono
  const keskiarvo = (sum === 0) ? "0" : round((stats.hyva - stats.huono) / sum)
  const positiivisia = (stats.hyva === 0) ? "0 %" : "".concat(round(100 / (sum / stats.hyva)), " %")

  function round(value) {
    return Number(Math.round(value + 'e' + 1) + 'e-' + 1)
  }

  if (sum === 0) {
    return (<div><h1>statistiikka</h1><p>ei yhtään palautetta annettu</p></div>)
  }
  return (
    <div>
      <h1>statistiikka</h1>
      <table>
        <tbody>
        <Statistic text='hyva' value={stats.hyva}></Statistic>
        <Statistic text='neutraali' value={stats.neutraali}></Statistic>
        <Statistic text='huono' value={stats.huono}></Statistic>
        <Statistic text='keskiarvo' value={keskiarvo}></Statistic>
        <Statistic text='positiivisia' value={positiivisia}></Statistic>
        </tbody>
      </table>
    </div>
  )
}


const Statistic = ({ text, value }) => {
  return (
    <tr><td>{text}</td><td>{value}</td></tr>
    )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
    }

  }

  lisaaYksi = (prevState, stateKey) => {
    return () => {
      this.setState((prevState) => (
        {
          [stateKey]: prevState[stateKey] + 1
        }))
    }
  }

  render() {

    return (
      <div>
        <Otsikko />
        <Button handleClick={this.lisaaYksi(this.state.hyva, 'hyva')} text="hyvä" />
        <Button handleClick={this.lisaaYksi(this.state.neutraali, 'neutraali')} text="neutraali" />
        <Button handleClick={this.lisaaYksi(this.state.huono, 'huono')} text="huono" />
        <Statistics stats={this.state} />

      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)