import React, { useState, useEffect } from "react";
import {
  useParams,
  Link
} from 'react-router-dom'

export const SessionFilteredList = () => {
  let { slug } = useParams();
  const [sessions, onGetSessions] = useState([]);

  useEffect(() => {
    fetch(`/api/film_sessions/${slug}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        onGetSessions(data.session_filtered_list);
      });
  }, []);

  return (
    <div>
      {sessions.map((session, i) => (
        <div key={i}>
          <div>{session.film.name}</div>
          <Link to={`/hall/${session._id}`}>Забронировать места</Link>
        </div>
      ))}
    </div>
  );
};
