import React from "react";
import { useEffect } from "react";
import "./App.css";
import search from "./search.svg";


//API KEY: b9aef7d

const API_URL = "http://www.omdbapi.com?apikey=b9aef7d";

const App = () => {

  const searchMovies = async (title) => {

      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      console.log(data.Search);
  }




useEffect(() => {
  searchMovies("Spiderman");


} , []
);


  return(
    <div className="app">

      <h1>MovieLand</h1>

      <div className="search">

        <input
          placeholder="Search for a movie"
          value="Superman"
          onChange={() => {}}


          />

          <img  
            src={search}
            alt = "search"
            />


      </div>

    </div>
  ) 
}

export default App;