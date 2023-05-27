import React from "react";
import fetch from "isomorphic-unfetch";

const ShowDetailsPage = ({ show, error }) => {
  if (error) {
    return (
      <div className="container">
        <div className="error-message">Invalid ID</div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="detail-wrapper">
        <div className="show-details">
          <img src={show.image?.medium} alt={show.name} />
          <div className="show-info">
            <h1>{show.name}</h1>
            <div>Type: {show.type}</div>
            <div>Language: {show.language}</div>
            <div>Genres: {show.genres.join(", ")}</div>
            <div>Status: {show.status}</div>
            <div>Runtime: {show.runtime} minutes</div>
            <div>
              Premiered:{" "}
              {new Date(show.premiered).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </div>
            <div>
              Ended:{" "}
              {new Date(show.ended).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </div>
            <div>Rating: {show.rating.average}</div>
            <div>Network: {show.network?.name}</div>
            <div>Country: {show.network?.country.name}</div>
            <div>Official Site: {show.network?.officialSite || "N/A"}</div>
            <div>Schedule: {show.schedule.days.join(", ")}</div>
            <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  // Check if the id is not a number
  if (isNaN(id)) {
    return {
      props: {
        error: true,
      },
    };
  }

  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  if (!show) {
    return {
      notFound: true, // Return a 404 status code if the show is not found
    };
  }

  return {
    props: {
      show,
      error: false,
    },
  };
}

export default ShowDetailsPage;
