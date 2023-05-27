import React from 'react';
import fetch from 'isomorphic-unfetch';

const ShowPage = ({ shows }) => (
    <div className="container">
    <div className="text-center">
      <h1>TV Shows</h1>
    </div>
    <ul>
      {shows.map((show) => (
        <li key={show.id}>
          <div>
            <img src={show.image?.medium} alt={show.name} />
          </div>
          <div>
            <a href={`/tv-shows/details/${show.id}`}>
              <h2>{show.name}</h2>
            </a>
            <p>Language: {show.language}</p>
            <p>Genres: {show.genres.join(", ")}</p>
            <p>Runtime: {show.runtime} minutes</p>
            <p>
              Premiered:{" "}
              {new Date(show.premiered).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
            <p>Rating: {show.rating.average}</p>
            <p>
              Country:{" "}
              {show.network ? show.network.country.name : "Unknown"}
            </p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${slug}`);
  const data = await res.json();

  if (!data || data.length === 0) {
    return {
      notFound: true // Return a 404 status code if the show is not found
    };
  }

  const shows = data.slice(0, 20).map(result => result.show); // Retrieve only the first 10 shows

  return {
    props: {
      shows
    }
  };
}

export default ShowPage;
