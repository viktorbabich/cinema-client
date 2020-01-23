import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const List = () => {
  const [films, onGetFilms] = useState([]);

  useEffect(() => {
    fetch("/api/films")
      .then(res => {
        return res.json();
      })
      .then(data => {
        onGetFilms(data.film_list);
      });
  }, []);

  return (
    <div>
      {films.map((film, i) => (
        <div key={i}>
          <Link to={`/sessions/${film._id}`}>{film.name}</Link>
        </div>
      ))}
    </div>
  );
};
