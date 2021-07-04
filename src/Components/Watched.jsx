import React, { useContext } from "react";
import "../Style/Watchlist.scss";
import { GlobalContext } from "../Context/GlobalContext";
import MovieCart from "./MovieCart";
import agneepath from "../Images/agneepath.jpg";
import baaghi from "../Images/baaghi.jpg";
import thevillain from "../Images/thevillain.jpg";

function Watched() {
  const { watched } = useContext(GlobalContext);
  return (
    <div>
      <div className="watchlist__container">
        <div className="image__wrappers">
          <div className="image__wrapper">
            <img src={agneepath} alt="starwars" />
            <h2 className="movie__title">Agneepath</h2>
          </div>
          <div className="image__wrapper">
            <img src={baaghi} alt="spiderman" />
            <h2 className="movie__title">Baaghi</h2>
          </div>
          <div className="image__wrapper">
            <img src={thevillain} alt="joker" />
            <h2 className="movie__title">The Villain</h2>
          </div>
        </div>
        <div className="details__of__movies">
          <div className="heading">
            <h1>Your watchlist movies</h1>
          </div>
          <div className="total__watchlist_items">
            <h2>
              Total watchlist movies -{" "}
              <span className="badge">{watched.length}</span>
            </h2>
          </div>
        </div>
        <div>
          {watched.length > 0 ? (
            <div className="card__wrapper">
              {watched.map((movie) => (
                <MovieCart movie={movie} type="watched" key={movie.id} />
              ))}
            </div>
          ) : (
            <div className="notify">
              The watched is empty you need to add from movie list
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Watched;
