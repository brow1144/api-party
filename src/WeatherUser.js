import React, { Component } from 'react'

class WeatherUser extends Component {
  state = {
    user: {
      main: {
        temp: '',
      },
      wind: {
        speed: '',
      },
    }
  }
  constructor(props) {
    super(props)

    this.fetchUserData(this.props)
  }

  fetchUserData = (props) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q={${props.match.params.username}}&APPID=5281c5496e6b5f7ab4deeacf1cfbb409`)
      .then(response => response.json())
      .then(user => this.setState({ user }))
      //.then(() => console.log(this.state.user.main.temp))
      //.then(() => console.log(this.state.user.wind.speed))
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = nextProps.location !== this.props.location
    if (locationChanged) {
      this.fetchUserData(nextProps)
    }
  }

  render() {
    const { user } = this.state
    const kelvinTemp = this.state.user.main.temp
    const fahrenheitTemp = 9/5 * (kelvinTemp - 273) + 32
    const fahrenheitTempRounded = Math.round(fahrenheitTemp)
    return (
      <div className="weather-user">
        <h3>Temperature: {fahrenheitTempRounded}°F</h3>
        <h3>Wind Speed: {user.wind.speed}mph</h3>
      </div>
    )
  }
}

export default WeatherUser