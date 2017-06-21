import React, { Component } from 'react'


class StarWarsMovies extends Component {

  render() {
    let movieList = ''
    if(this.props.movies.length > 0) {
      this.props.movies.map( (movie, i) => {
        movieList += movie.charAt(movie.length-2)
        if (this.props.movies.length - 1 !== i) {
          movieList += ', '
        }
      })
    }
    return(
      <div>
        <h3>Movie(s): {movieList}</h3>
        <h5>New Hope is Movie 1, Empire Strikes back is Movie 2, etc...</h5>
      </div>
    )
  }
}

export default StarWarsMovies