import React from 'react'
import PersonService from './services/PersonService'
import Notification from './Notification'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newPuh: '',
      filter: '',
      notification: null
    }
  }

  componentDidMount() {
    PersonService
      .getAll()
      .then((res) => {
        this.setState({ persons: res.data })
      })
  }

  postNewPerson = (person) => {
    PersonService
      .create(person)
      .then((res) => {
        const persons = this.state.persons.concat({ ...person, id: res.data.id })
        this.setState({
          persons,
          newName: '',
          newPuh: ''
        })
      })
      .catch(() => {

      })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const duplicate = this.checkDuplicates()
    if (duplicate) {
      if (window.confirm(`${this.state.newName} on jo olemassa, korvataanko vanha numero uudella?`)) {
        const updated = { ...duplicate, number: this.state.newPuh}

        const persons = 
          this.state.persons
            .filter((p) => p.name !== duplicate.name)
            .concat(updated)

        this.setState({
          persons,
          newName: '',
          newPuh: ''
        })

        PersonService
          .update(updated)

        return
      }
    }

    const newPerson = {
      name: this.state.newName,
      number: this.state.newPuh
    }

    this.postNewPerson(newPerson)    
    this.setNotification(`Lisättiin henkilö ${newPerson.name}`)
  }

  setNotification = (text) => {
    this.setState({notification: text})
    setTimeout(() => {
      this.setState({notification: null})
    }, 3000)
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

  handleDeleteButton = (person) => {
    return () => {
      if (window.confirm(`haluatko varmasti poistaa henkilön ${person.name}`)) {
        PersonService
          .destroy(person)
          .catch(() => {
            this.setNotification(`Poistaminen epäonnistui, henkilö on luultavasti jo poistettu!`)
          })
      }

      this.setState({
        persons: this.state.persons.filter((p) => p.id !== person.id)
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.notification &&
          <Notification text={this.state.notification} />
        }
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
        {this.state.persons &&
          <Lista persons={this.state.persons} filter={this.state.filter} destroy={this.handleDeleteButton}/>
        }
      </div>
    )
  }
}

const Lista = ({persons, filter, destroy}) => {
  const personElems = 
    persons
    .filter((s) => 
      s.name.toLowerCase().includes(filter)
    )
    .map((s, i) => {
      return <p key={i}>{s.name},  {s.number} <button onClick={destroy(s)}>poista</button></p>
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