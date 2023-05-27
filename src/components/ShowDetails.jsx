import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ShowDetails() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isNaN(id)) {
      navigate("/error");
      return;
    }

    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data))
      .catch((error) => console.log(error));
  }, [id, navigate]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div class="detail-wrapper">
        <div className="show-details">
          <img src={show.image?.medium} alt={show.name} />
          <div className="show-info">
            <h1>{show.name}</h1>
            <p>Type: {show.type}</p>
            <p>Language: {show.language}</p>
            <p>Genres: {show.genres.join(", ")}</p>
            <p>Status: {show.status}</p>
            <p>Runtime: {show.runtime} minutes</p>
            <p>
              Premiered:{" "}
              {new Date(show.premiered).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
            <p>
              Ended:{" "}
              {new Date(show.ended).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
            <p>Rating: {show.rating.average}</p>
            <p>Network: {show.network?.name}</p>
            <p>Country: {show.network?.country.name}</p>
            <p>Official Site: {show.network?.officialSite || "N/A"}</p>
            <p>Schedule: {show.schedule.days.join(", ")}</p>
            <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDetails;
