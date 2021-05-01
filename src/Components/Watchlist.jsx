import React,{useContext} from 'react'
import '../Style/Watchlist.scss'
import {GlobalContext} from '../Context/GlobalContext'
import MovieCart from './MovieCart'

function Watchlist() {
    const {watchlist} = useContext(GlobalContext)
    return (
        <div>
            <div className="watchlist__container">
                <div className="image__wrappers">
                   <div className="image__wrapper">
                      <img src="./images/starwars.jpg" alt="starwars"/>
                      <h2 className="movie__title">Start Wars</h2>
                   </div>
                   <div className="image__wrapper">
                      <img src="./images/spiderman.jpg" alt="spiderman"/>
                      <h2 className="movie__title">Spider Man</h2>
                   </div>
                   <div className="image__wrapper">
                      <img src="./images/Joker.jpg" alt="joker"/>
                      <h2 className="movie__title">Joker</h2>
                   </div>
                </div>
                <div className="details__of__movies">
                   <div className="heading">
                       <h1>Your watchlist movies</h1>
                   </div>
                   <div className="total__watchlist_items">
                      <h2>Total watchlist movies - <span className="badge">{watchlist.length}</span></h2>
                   </div>
                </div>
                <div >
                    {watchlist.length > 0 ? (
                    <div className="card__wrapper">
                        {watchlist.map(movie=> (
                            <MovieCart movie={movie} type="watchlist" key={movie.id}/>
                        ))}
                    </div>
                    ): (<div className="notify">The watchlist is empty you need to add from movie list</div>)}
                </div>
            </div>
        </div>
    )
}

export default Watchlist
