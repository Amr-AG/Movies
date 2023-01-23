/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import "./movieDetails.css";
import Container from "react-bootstrap/esm/Container";

export default function MovieDetails() {
  const params = useParams();
  const [details, setDetails] = useState([]);
  const apiUrl = `https://api.themoviedb.org/3/movie/${params.id}?api_key=5aff097659075e63658daf1123e88713&language=en-US&page=1`;
  const apiImages = "https://image.tmdb.org/t/p/";
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  return (
    <div>
      <Container className="movie-details-container" key={details.id}>
        <div className="detailsCard">
          <img
            style={{ width: "65%" }}
            src={
              details.poster_path
                ? `${apiImages}w300${details.poster_path}`
                : null
            }
            alt={details.name}
          />
        </div>
        <div className="detailsBody">
          <span style={{ color: "#fff" }}>
            {details.adult === true ? (
              <span className="adultTrue">18+</span>
            ) : null}
          </span>
          <span className="detailsContent">
            <span>Movie Name : </span>
            <p>{details.title}</p>
          </span>
          <span className="detailsContent">
            <span>Movie Story </span>
            <p>{details.overview}</p>
          </span>
          <span className="detailsContent">
            <span>Movie Rate : </span>
            <p>{details.vote_average}</p>
            <AiTwotoneStar style={{ color: "#f5aa00", fontSize: "20px" }} />
          </span>
          <span className="detailsContent">
            <span> Release Date : </span>
            <p>{details.release_date}</p>
          </span>
        </div>
      </Container>
    </div>
  );
}
