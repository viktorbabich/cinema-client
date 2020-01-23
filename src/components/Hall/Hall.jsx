import React, { useState, useEffect } from "react";
import {
  useParams,
} from 'react-router-dom'

export const Hall = () => {
  const { slug } = useParams();
  const [session, onGetSession] = useState(null);
  const [reservedByUser, reserveByUser] = useState([]);

  const getSessions = () => {
    fetch(`/api/session_detail/${slug}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        onGetSession(data.session_detail[0]);
      });
  }

  useEffect(() => {
    getSessions()
  }, []);

  const reserveSeat = (seat) => {
    reserveByUser(prev => {
      const index = prev.indexOf(seat);
      if(index < 0) {
        return [seat, ...prev] 
      } else {
        return prev.filter(item => item !== seat)
      }
    })
  }

  const submitReservation = () => {
    fetch("/api/session_update/",
      {
          method: "POST",
          body: JSON.stringify({reserved: session.reservedSeats.concat(reservedByUser), id: session._id }),
          headers: {
            "Content-Type": "application/json"
          },
      })
    .then(function(res){
      reserveByUser([])
      getSessions(); 
    })
  }

  return (
    <div>

      {session && <div>
        <div>{session.hall.name}</div>

        {new Array(session.hall.seats).fill(0).map((item, i) => (
          <div key={i} onClick={() => reserveSeat(i)}>{i + " " + reservedByUser}</div>
        ))}

        <div>{session.hall.seats}</div>

        <div onClick={submitReservation}>Забронировать</div>
      </div>}
    </div>
  );
};
