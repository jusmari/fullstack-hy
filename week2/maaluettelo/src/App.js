import React from 'react';
import Axios from 'axios'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allCountries: [],
      filter: ''
    }
  }

  componentWillMount() {
    Axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => 
        this.setState({ allCountries: response.data })
      )
  }

  mapCountries = () => {
    const countries = 
      this.state.allCountries
        .filter((country) => {
          return country.name.toLowerCase().includes(this.state.filter.toLowerCase())
        })
        .map((country) => {
          return country
       })

       if (countries.length === 1) return this.showOneCountry(countries[0])

       if (countries.length > 10) {
         return ["too many matches, specify another filter"]
       } else {
         return countries.map((c) => <div onClick={this.handleCountryClick(c.name)} key={c.cioc}>{c.name}</div>)
       }
  }

  handleCountryClick = (country) => {
    return () => {
      this.setState({ filter: country })
    }
  }

  showOneCountry = (country) => {
    return (
      <div>
        <h3>{country.name}</h3>
        
        <p>Population: {country.population}</p>
        <img src={country.flag} />
      </div>
    )
  }

  handleChange = event => {
    this.setState({ filter: event.target.value})
  }

  render() {


    return (
      <div>
        find countries: <input value={this.state.filter} onChange={this.handleChange} />

        <div>
          {this.mapCountries()}
        </div>
      </div>
    )
  }

}