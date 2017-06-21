import React, { Component } from 'react'


class StarWarsMovies extends Component {

  render() {
    let x = ''
    if(this.props.movies.length > 0) {
      this.props.movies.map( (movie, i) => {
        x += movie.charAt(movie.length-2)
        if (this.props.movies.length - 1 !== i) {
          x += ', '
        }
      })
    }
    return(
      <div>
        <h3>Movies: {x}</h3>
        <h5>New Hope is Movie 1, Empire Strikes back is Movie 2, etc...</h5>
      </div>
    )
  }
}

export default StarWarsMovies