import React, { Component } from 'react' ; // imrc
import Header from "./Components/Header/Header.jsx" ;
import Movies from './Components/Movies/Movies.jsx';
import axios from "axios" ;
import { API_KEY , API_URL , IMAGE_URL } from "./API/secrets.js"

class App extends Component { // cc  
  state = {   
    moviesData:[],
    currentMovie: "avengers",
   } ;
  
  async componentDidMount()
  {
    // API call
    // params => api key , page , query
    // https://api.themoviedb.org/3/search/movie?api_key=bdd243ea847239dc0799805e63e189f0&query=avengers&page=1&include_adult=false
  
    let data = await axios.get(API_URL + "/search/movie" , {
      params: {api_key : API_KEY , page: 1 , query: this.state.currentMovie},
    }) ;
    
    // console.log(data) ;
    let moviesData = data.data.results ;
    console.log(moviesData) ;
    this.setState({
      moviesData:moviesData
    })
  
  
  }

  render() { 
    return <div className="App"> 
      <Header></Header>
      <Movies movies={this.state.moviesData}></Movies>   
    </div> ; 
  }
}
 
export default App;


