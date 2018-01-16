import React, { Component } from 'react';
import Button from './Button'
import Statistics from './Statistics'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  asetaArvo = (state, value) => {
    return () => {
      this.setState({ [state]: value })
    }
  }

  render() {
    return (
      <div>
       <h1>Anna palautetta</h1>

        <div>
          <Button 
            onClick={this.asetaArvo("hyva", this.state.hyva + 1)}
            text="hyvä"
          />
          <Button 
            onClick={this.asetaArvo("neutraali", this.state.neutraali + 1)} 
            text="neutraali"
          />
          <Button 
            onClick={this.asetaArvo("huono", this.state.huono + 1)} 
            text="huono"
          />
        </div>
       
        <Statistics 
          hyva={this.state.hyva}
          neutraali={this.state.neutraali}
          huono={this.state.huono}
        />

      </div>
    );
  }
}

export default App;
