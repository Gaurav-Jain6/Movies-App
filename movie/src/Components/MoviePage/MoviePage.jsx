import React , {useEffect, useState} from 'react';
import YouTube from "react-youtube";
import "./MoviePage.css" ;
import { useLocation } from "react-router-dom";
import { API_URL, API_KEY } from "../../API/secrets";

const MoviePage =  (props) =>  {

    const [response , setdata] = useState({}) ;

    // let response 
    const location = useLocation();
    const { from } = location.state;
    console.log(from); // output: "the-page-id"
    useEffect(() => {
        fetch(`${API_URL}/movie/${from.id}/videos?api_key=${API_KEY}&language=en-US`)
        .then((data) =>{
                return data.json() ;
        })
        .then((response) => {
            // console.log(response) ;
            response = response ;
            let videoObject = response.results.filter((videoObj) => {
                if (videoObj.type == "Trailer" && videoObj.site == "YouTube") {
                  return true;
                }
                return false;
              });
            //   console.log(videoObject) ;
              setdata(videoObject[0]) ;
        })
    }) ;
    
    
    // console.log(response) ;
    let { title, tagline, vote_average, poster_path, overview } = from;
   // console.log(title + " " + tagline + " " + vote_average + " " + poster_path + " " + overview) ;
   let num = (vote_average.toFixed(1)) ;
   const opts = {
        height:"100%",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }; 
    return(

        <>
        <div className="movie-page">
             <div className="movie-page-poster">
                 <img src={poster_path} alt="" />
             </div>
             <div className="movie-page-details">
                 <div className="movie-title-info">
                     <h1>
                     {title} <br></br> {num} IMDB
                     </h1>
                     <span>{tagline}</span>
                     <p>{overview}</p>
                  </div>
                  <div className="movie-trailer">
                     <YouTube videoId={response.key} opts={opts}></YouTube>
                   </div>
             </div>
         </div>
        </>
    );
}

export default MoviePage;

