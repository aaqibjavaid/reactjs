import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { MovieForm } from "./components/MovieForm";
import { SearchBar } from "./components/SearchBar";
import { MovieList } from './components/MovieList'
function App() {
  const [movies, setMovies] = useState([])
  const movieHandler=movie=>{
   setMovies([...movies, movie])
  }
  return (
    <>
      <div className="App">
        <Header />
        <div style={{ display: "flex" }}>
          <MovieForm movieHandler={movieHandler}/>
          <SearchBar />
          <div style={{marginTop:150, marginLeft:-280}}>
          <MovieList movies={movies} />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
