
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      top: null
    }
  }

  voteAction = () => {
    return () => {
      let selected = this.state.selected
      this.getAnec(selected).votes++
      this.forceUpdate()

      let votes = this.getAnec(selected).votes
      if (this.state.top === null || votes > this.getAnec(this.state.top).votes) {
        this.setState({ top: selected })
      }
    }
  }

  nextButton = () => {
    return () => {
      let next = Math.floor(Math.random() * anecdotes.length)
      this.setState({ selected: next })
    }
  }

  getAnec = index => {
    return(
      this.props.anecdotes[index]
    )
  }

  topAnec = () => {
    return this.props.anecdotes[this.state.top]
  }

  render() {
    let anec = this.getAnec(this.state.selected)

    return (
      <div>
        <p>{anec.text}</p>
        <p>Votes: {anec.votes}</p>
        <button onClick={this.nextButton()}>next</button>
        <button onClick={this.voteAction()}>vote</button>

        { this.state.top !== null &&
          <div>
            <h5>top anecdote:</h5>
            <p>{this.topAnec().text}</p>
            <p>with {this.topAnec().votes}</p>
          </div>
        }
      </div>
    )
  }
}

const anecdotes = [
  {
    text: 'If it hurts, do it more often',
    votes: 0
  },
  {
    text: 'Adding manpower to a late software project makes it later!',
    votes: 0
  },
  {
    text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    votes: 0
  },
  {
    text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    votes: 0
  },
  {
    text: 'Premature optimization is the root of all evil.',
    votes: 0
  },
  {
    text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    votes: 0
  }  
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)