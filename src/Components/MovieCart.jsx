import React from 'react'
import MovieControls from './MovieControls'


function MovieCart({movie, type}) {
    return (
        <div>
            <div className="card" >
                    <div className="overflow"></div>
                    <div className="card__image">
                        
                        <img
                        src={ `https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={`${movie.title} Poster`}
                    />
                    </div>
                    <MovieControls movie={movie} type={type}/>
            </div>
        </div>
    )
}

export default MovieCart
