import { useState, useEffect } from "react";
import './App.css';
import MovieCard from "./components/MovieCard";
import SearchIcon from './search.svg'
// import ps5 from './ps5'

const API_URL = 'http://www.omdbapi.com?apikey=13b7db6f';

const App = () => {

  const [movies, setMovies]= useState([]);
  const [searchMovie, setSearchMovie] = useState('');

  const searchMovies = async(title) => {
    //call API
    const response = await fetch(`${API_URL}&s=${title}`)
    // get data
    const data = await response.json();

    setMovies(data.Search)
  }

  // const movie1 = {
  //   "Title": 'Amazing-Spiderman Syndrome',
  //   'Year': '2012',
  //   'imdbID': 'tt2586634',
  //   'Type': 'movie',
  //   'Poster': './ps5.jpg'
  // }

  useEffect(() => {
    searchMovies('')
  }, [])
  return(
    <div className="app">
      <h1>Filmify</h1>

      <div className="search">
        <input 
          placeholder="Search Movies"
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
        />

        <img 
          src={SearchIcon}
          height='42px'
          width='42px'
          alt="Search"
          title="Search"
          onClick={() => searchMovies(searchMovie)}

        />
      </div>

      {
        movies?.length > 0
        ?(
            <div className="container">
              {movies.map((movie1) => (
                <MovieCard movie1={movie1} />
              ))}
            </div>
        )
          :
          (<div className="empty"><h2>No Movies Found!</h2></div>)
      }

    </div>
  )
}



















// const App = () => {

//   const [countee, setCountee] = useState(0);

//   useEffect(() => {
//     alert("Incremented to " + countee)
//   }, [countee]);


//   return (
//     <div className='App'>
//       <button onClick={() => setCountee((prevCount) => prevCount - 1)}>-</button>
//       <h3>{countee}</h3>
//       <button onClick={() => setCountee((prevCount) => prevCount + 1)}>+</button>
//     </div>
//   )
// }


export default App;