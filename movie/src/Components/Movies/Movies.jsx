import React, { Component } from 'react';
import Movie from "../Movie/Movie" ;
import "./Movies.css"
class Movies extends Component {
    state = {  } 
    render() { 
        return (
            <div className='movies'>
                {this.props.movies.map((movieObject) => {
                    // console.log(movieObject.id) ;
                    return <Movie key={movieObject.id} movie={movieObject}></Movie> ;
                })} ;
            </div>
            // <h1>Movie Component</h1>
        );
    }
}
 
export default Movies;