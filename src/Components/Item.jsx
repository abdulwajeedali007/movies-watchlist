import React from "react";
import Movie from "./Movie";

export default function Item(props) {
  const results = props.data;

  return (
    <div className="item__main">
      {results.length > 0 ? (
        <div>
          {results.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div className="data__loading">Type movie name in search....</div>
      )}
    </div>
  );
}
