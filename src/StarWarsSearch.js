import React, { Component } from 'react'

import StarWarsMovies from './StarWarsMovies'

class StarWarsSearch extends Component {
  state = {
    person: {
      birth_year: '',
      eye_color: '',
      gender: '',
      hair_color: '',
      height: '',
      name: '',
      skin_color: '',
      films: [],
    },
  }
  constructor(props) {
    super(props)

    this.fetchUserData(this.props)
  }

  fetchUserData = (props) => {
    let person = {}
    fetch(`https://swapi.co/api/people/?search=${props.match.params.username}&format=json`)
      .then(response => response.json())
      .then(people => { person = people.results[0] })
      .then(people => {if (person) { this.setState({ person })} })
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = nextProps.location !== this.props.location
    if (locationChanged) {
      this.fetchUserData(nextProps)
    }
  }

  render() {
    return (
      <div className="StarWars-user">
        <h1>{this.state.person.name}</h1>
        <h3>Gender: {this.state.person.gender}</h3>
        <h3>Skin Color: {this.state.person.skin_color}</h3>
        <h3>Hair Color: {this.state.person.hair_color}</h3>
        <h3>Eye Color: {this.state.person.eye_color}</h3>
        <h3>Birth Year: {this.state.person.birth_year}</h3>
        <StarWarsMovies movies={this.state.person.films}/>
      </div>
    )
  }
}

export default StarWarsSearch