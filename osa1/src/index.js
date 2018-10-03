import React from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({ anecdotes, selected }) => {
  return (
    <div>
      {anecdotes[selected]}
    </div>
  )
}

const AnecdoteVoteCount = ({ voteCount }) => {
  return (
    <div>
      has {voteCount} votes
    </div>
  )
}

const AnecdoteWithMostVotes = ({ anecdotes, selected, pisteet }) => {
  const topAnecdote = pisteet.reduce(function (a, b) { return a > b ? a : b })
  return (
    <div>
      <Anecdote anecdotes={anecdotes} selected={pisteet[topAnecdote]} />
      <AnecdoteVoteCount voteCount={topAnecdote} />
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      pisteet: new Array(anecdotes.length).fill(0)
    }
  }

  voteAnecdote = (prevState, index) => {
    return () => {
      const newPisteet = [...prevState]
      newPisteet[index] += 1
      this.setState(
        {
          pisteet: newPisteet
        })
    }
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  chooseRandomAnecdote = () => {
    this.setState({
      selected: this.getRandomInt(0, anecdotes.length - 1)
    })
  }

  render() {

    const showStatsIfVotes = () => {
      const sum = this.state.pisteet.reduce((a, b) => a + b, 0)
      if (sum === 0) {
        return (
          <h2>vote to see the highest voted anecdote.</h2>
        )
      }
      return (
        <div>
          <h2>anecdote with most votes:</h2>
          <AnecdoteWithMostVotes anecdotes={this.props.anecdotes} selected={this.state.selected} pisteet={this.state.pisteet} />
        </div>
      )
    }

    return (
      <div>
        <Anecdote anecdotes={this.props.anecdotes} selected={this.state.selected} />
        <AnecdoteVoteCount voteCount={this.state.pisteet[this.state.selected]} />
        <Button handleClick={this.voteAnecdote(this.state.pisteet, this.state.selected)} text='vote' />
        <Button handleClick={this.chooseRandomAnecdote} text='next anecdote' />
        <div>{showStatsIfVotes()}</div>
      </div >
    )
  }
}
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
