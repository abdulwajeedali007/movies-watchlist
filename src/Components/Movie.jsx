import React,{useContext} from 'react'

import {GlobalContext} from '../Context/GlobalContext'
function Movie({movie}) {
    
    // context
    const {addMovietowatchlist, watchlist, watched , addFromwatchlistTowatch} = useContext(GlobalContext);
    const exitsInwatchlist = watchlist.find(watchmovie => watchmovie.id === movie.id)
    const exitsInwatched = watched.find(watchmovie => watchmovie.id === movie.id)

    const disableMovie = exitsInwatchlist ? true : exitsInwatched? true : false;
    
    const watcheddisable = exitsInwatched ? true : false;
    
    
    return (
        <div>
            <div className="item__container" >
                            
                <div className="item__image">
            <img
                src={ `https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`${movie.title} Poster`}
            />
            </div>
                <div className="item__content">
                <p className="item__title">{movie.title}</p>
                <p className="item__date"> Year - {movie.release_date ? movie.release_date.substring(0,4): movie.release_date} <span className="popularity">Popularity {movie.popularity}</span></p>

                <br/>
                <div className="Btn">
                <button type="button" className="watchlist" disabled={disableMovie} onClick={()=> addMovietowatchlist(movie)}>Watch List</button>
                <button className="watched" disabled={watcheddisable} onClick={()=> addFromwatchlistTowatch(movie)}>Watched</button>
                </div>
            </div>
            </div> 
        </div>
    )
}

export default Movie
