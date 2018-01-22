import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newPuh: '',
      filter: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.checkDuplicates()) {
      alert("name was a duplicate!")
      return
    }

    const newPerson = {
      name: this.state.newName,
      puh: this.state.newPuh
    }

    const persons = this.state.persons.concat(newPerson)

    this.setState({
      persons,
      newName: '',
      newPuh: ''
    })
  }

  handleChange = (state) => {
    return (event) => {
      this.setState({[state]: event.target.value})
    }
  }

  checkDuplicates = () => {
    return this.state.persons.find((p) => {
      return p.name === this.state.newName
    })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Filter onChange={this.handleChange('filter')} />
        <form onSubmit={this.handleSubmit}>
          <div>
            nimi: <input onChange={this.handleChange('newName')} value={this.state.newName} />
          </div>
          <div>
            puhelin: <input onChange={this.handleChange('newPuh')} value={this.state.newPuh} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <Lista persons={this.state.persons} filter={this.state.filter}/>
      </div>
    )
  }
}

const Lista = ({persons, filter}) => {
  const personElems = 
    persons
    .filter((s) => {
      return s.name.toLowerCase().includes(filter)
    })
    .map((s, i) => {
      return <p key={i}>{s.name}  {s.puh}</p>
    })

  return (
    <React.Fragment>
      <h2>Numerot</h2>
      {personElems}
    </React.Fragment>
  )
}

const Filter = props => {
  return(
    <p>rajaa näytettäviä: <input onChange={props.onChange}/></p>
  )
}

export default App