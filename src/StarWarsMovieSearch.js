import React, { Component } from 'react'

class StarWarsMovieTab extends Component {
  state = {
    movie: {
      title: '',
      director: '',
      opening_crawl: '',
      producer: '',
      release_date: '',
    },
  }
  constructor(props) {
    super(props)

    this.fetchUserData(this.props)
  }

  fetchUserData = (props) => {
    let movie = {}
    fetch(`https://swapi.co/api/films/?search=${props.match.params.username}&format=json`)
      .then(response => response.json())
      .then(people => { movie = people.results[0] })
      .then(people => {if (movie) { this.setState({ movie })} })
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = nextProps.location !== this.props.location
    if (locationChanged) {
      this.fetchUserData(nextProps)
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.movie.title}</h1>
        <h3>Director: {this.state.movie.director}</h3>
        <h3>Producer: {this.state.movie.producer}</h3>
        <h3>Release Date: {this.state.movie.release_date}</h3>
        <h3>Opening Crawl:</h3>
        <h2>{this.state.movie.opening_crawl}</h2>
      </div>
    )
  }
}

export default StarWarsMovieTab