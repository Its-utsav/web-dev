import { useEffect, useState } from 'react'
import searchicon from './assets/searchicon.svg';
import MovieCard from './components/MovieCard';
import './App.css'

function App() {

  let [movies, setMovies] = useState([]);
  let [search, setSearch] = useState("");
  // http://www.omdbapi.com/?i=tt3896198&apikey=ce18345
  // https://www.omdbapi.com/?i=tt3896198&apikey=edde7115
  const API_URL = "https://www.omdbapi.com?apikey=edde7115";
  const searchMovie = async (title) => {

    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovie('batman');
  }, []);
  
  return (
    <>
      <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
          <input type="text"
            placeholder='search for movie'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }} />
          <img src={searchicon}
            alt="search-icon"
            onClick={() => {
              searchMovie(search)
            }} />
        </div>
        {
          movies.length > 0 ? (
            <div className="container">
              {movies.map((movie,index) => (<MovieCard movie={movie} key={index} />))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies Found</h2>
            </div>
          )
        }
      </div>
    </>
  )
}

export default App
