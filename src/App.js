import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navpar from "./Pages/Navpar";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import MovieDetails from "./Pages/MovieDetails";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [movie, setMovie] = useState([]);

  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=5aff097659075e63658daf1123e88713&language=en-US&page=1`;

  const getMovies = async () => {
    const res = await axios.get(apiUrl);
    setMovie(res.data.results);
  };
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=5aff097659075e63658daf1123e88713&language=en-US&page=${page}`
    );
    setMovie(res.data.results);
  };
  useEffect(() => {
    getMovies();
    // eslint-disable-next-line
  }, []);

  const search = async (word) => {
    if (word === "") {
      getMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=5aff097659075e63658daf1123e88713&query=${word}&language=en-US&page=1&include_adult=false`
      );
      setMovie(res.data.results);
    }
  };

  return (
    <div className="App">
      <Navpar search={search} />
      <Routes>
        <Route path="/" element={<Home movie={movie} pages={getPage} />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
