import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiTwotoneStar } from "react-icons/ai";
import "./Home.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Pageintaion from "./Pageintaion";

export default function Home({ movie, pages }) {
  const apiImages = "https://image.tmdb.org/t/p/";

  return (
    <div>
      <Container style={{ paddingTop: "80px", minHeight: "100vh" }}>
        <Row
          md={4}
          style={{ justifyContent: "center", width: "100%", margin: "0 auto" }}
        >
          {movie.map((movie) => (
            <Col key={movie.id} style={{ flex: "none" }} className="mx-0 my-4">
              <Card
                className="movieCard"
                style={{
                  border: "none",
                  background: "none",
                }}
              >
                <Card.Img
                  style={{ maxHeight: "375px" }}
                  src={
                    movie.poster_path
                      ? `${apiImages}w300${movie.poster_path}`
                      : null
                  }
                  alt={movie.title}
                />
                <Card.Body className="cardBody">
                  <Card.Title>
                    {movie.adult === true ? (
                      <span
                        style={{
                          position: "absolute",
                          left: "0",
                          top: "0",
                          width: "fit-content ",
                          height: "fit-content",
                          padding: "8px 5px",
                          margin: "8px 5px",
                          fontSize: "20px",
                          background: "#f72d2dcc",
                          borderRadius: "50%",
                        }}
                      >
                        18+
                      </span>
                    ) : null}
                  </Card.Title>
                  <Card.Title>Name : {movie.title}</Card.Title>
                  <Card.Title>
                    Rate : {movie.vote_average}{" "}
                    <AiTwotoneStar
                      style={{ color: "#f5aa00", fontSize: "20px" }}
                    />
                  </Card.Title>
                  <Card.Title className="dateBar">
                    Release Date : {movie.release_date}
                  </Card.Title>
                </Card.Body>
              </Card>
              <Link to={`/movie/${movie.id}`}>
                <Button
                  style={{
                    width: "fit-content ",
                    height: "fit-content",
                    fontSize: "15px",
                    background: "#2a44d4",
                    color: "#fff",
                    margin: "10px auto",
                  }}
                  size="sm"
                >
                  Film Details
                </Button>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      <Pageintaion page={pages} />
    </div>
  );
}
