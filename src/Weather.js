import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import WeatherUser from './WeatherUser'
import './Weather.css'

class Weather extends Component {
  state = {
    username: ''
  }

  handleChange = (ev) => {
    const username = ev.currentTarget.value
    this.setState({ username })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/weather/${this.state.username}`)
  }

  render() {
    return (
      <div className="weather">
        <img className="weather-logo" src="https://home.openweathermap.org/assets/logo_OpenWeatherMap_orange_website-04422775ccee2bbe88f4f2d55678c28b17c2cfeca05619f9138cf376fe53043e.png" alt="weather logo"/>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Look up Weather user</button>
          </div>
        </form>
        <Route exact path='/weather' render={() => <h3>Please enter a city to search the weather for</h3>} />
        <Route path='/weather/:username' component={WeatherUser} />
      </div>
    )
  }

}

export default Weather