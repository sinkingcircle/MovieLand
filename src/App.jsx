import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import search from "./search.svg";
import MovieCard from "./MovieCard";


//API KEY: b9aef7d

const API_URL = "http://www.omdbapi.com?apikey=b9aef7d";


const movie1 = {
  
    "Title": "Fighting, Flying and Driving: The Stunts of Spiderman 3",
    "Year": "2007",
    "imdbID": "tt1132238",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg"

}




const App = () => {

  const[movies, setMovies] = useState([]);
  const[searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    searchMovies("dexter");
  
  
  } , []
  );
  


  const searchMovies = async (title) => {

      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      setMovies(data.Search);
  }







  return(
    <div className="app">

      <h1>MovieLand</h1>

      <div className="search">

        <input
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 


          />

          <img  
            src={search}
            alt = "search"
            onClick={() => searchMovies(searchTerm)}
            />


      </div>


      {
        movies?. length> 0
        ? (
          <div className="container">
          {movies.map((movie) => (
            <MovieCard movie = {movie}/>
          ))}
          
  
        </div>
        ):
        (
          <div className="empty"><h2>No movies found</h2></div>
        )

      }

      

    </div>
  ) ;
};

export default App;