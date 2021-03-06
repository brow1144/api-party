import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'

import StarWarsMovieSearch from './StarWarsMovieSearch'

class StarWarsMovieTab extends Component {
  state = {
    username: ''
  }

  handleChange = (ev) => {
    const username = ev.currentTarget.value
    this.setState({ username })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/movies/${this.state.username}`)
  }

  render() {
    return (
      <div className="StarWars">
        <NavLink className='NavLink' to={'/movies'}>Star Wars Movies</NavLink>
        <div>
        <img className="StarWars-logo" src="http://wallpapercave.com/wp/2s5s6mN.jpg" alt="starwars logo"/>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Look up Star Wars Movie</button>
          </div>
        </form>
        </div>

        <Route exact path='/movies' render={() => <h3>Please enter a Star Wars Movie</h3>} />
        <Route path='/movies/:username' component={StarWarsMovieSearch} />
      </div>
    )
  }
}

export default StarWarsMovieTab