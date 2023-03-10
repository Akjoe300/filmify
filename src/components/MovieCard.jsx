const MovieCard = ( {movie1} ) => {
  return(
    <div className="container">
      <div className="movie">
        <div>
          <p>{movie1.Year}</p>
        </div>

        <div>
          <img
            src={movie1.Poster !== 'N/A' ? movie1.Poster : './ps5.jpg'}   //'https://via.placeholder.com/400'
            alt={movie1.Title}
            height='30px'
            width='30px'
          />
        </div>
        <div>
          <span>{movie1.Type}</span>
          <h3>{movie1.Title}</h3>
        </div>

      </div>
    </div>    
  )
}

export default MovieCard;
