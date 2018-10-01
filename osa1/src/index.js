import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
      <div>
           <h1>anna palautetta</h1>
      </div>
)
  }

const Button = ({ handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)


const Statistics = ({ stats }) => {
  const sum = stats.hyva + stats.neutraali + stats.huono
  const keskiarvo = sum / 3
  const positiivisia = (stats.hyva === 0) ? "0 %" : "".concat(stats.hyva / 3," %")

 

  return (
      <div>
          <h1>statistiikka</h1>
          <Statistic text='hyva' value={stats.hyva}></Statistic>
          <Statistic text='neutraali' value={stats.neutraali}></Statistic>
          <Statistic text='huono' value={stats.huono}></Statistic>
          <Statistic text='keskiarvo' value={keskiarvo}></Statistic>
          <Statistic text='positiivisia' value={positiivisia}></Statistic>
      </div>
)
}

const Statistic = ({ text, value }) => {
  return (
      <div>
           <p>{text} {value}</p>
      </div>
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

  lisaaYksi = (prevState, stateType) => {
    return () => {
      this.setState((prevState) => ({
        [stateType] : prevState.state + 1
    }));
  }
  }

  lisaaHyva = () => {
    return () => {
      this.setState((prevState) => ({
        hyva : prevState.hyva + 1
    }));
  }
  }

  lisaaNeutraali = () => {
    return () => {
      this.setState((prevState) => ({
        neutraali : prevState.neutraali + 1
    }));
  }
  }

  lisaaHuono = () => {
    return () => {
      this.setState((prevState) => ({
        huono : prevState.huono + 1
    }));
  }
  }

  render() {
    
    return (
    <div>
      
     <Otsikko></Otsikko>
     <Button handleClick={this.lisaaHyva(this.state.hyva, 'hyva')} text="hyvä"/>
     <Button handleClick={this.lisaaNeutraali(this.state.neutraali)} text="neutraali"/>
     <Button handleClick={this.lisaaHuono(this.state.huono)} text="huono"/>
     <Statistics stats={this.state}></Statistics>
  
     
    </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)