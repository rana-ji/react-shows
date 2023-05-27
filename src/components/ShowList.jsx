import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ShowList() {
  const { keyword } = useParams();
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${keyword}`)
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [keyword]);

  return (
    <div className="container">
      <div className="text-center">
        <h1>TV Shows - {keyword}</h1>
      </div>
      <ul>
        {shows.slice(0, 20).map((show) => (
          <li key={show.show.id}>
            <div>
              <img src={show.show.image?.medium} alt={show.show.name} />
            </div>
            <div>
              <Link to={`/tv-shows/details/${show.show.id}`}>
                <h2>{show.show.name}</h2>
              </Link>
              <p>Language: {show.show.language}</p>
              <p>Genres: {show.show.genres.join(", ")}</p>
              <p>Runtime: {show.show.runtime} minutes</p>
              <p>
                Premiered:{" "}
                {new Date(show.show.premiered).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <p>Rating: {show.show.rating.average}</p>
              <p>
                Country:{" "}
                {show.show.network ? show.show.network.country.name : "Unknown"}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowList;
