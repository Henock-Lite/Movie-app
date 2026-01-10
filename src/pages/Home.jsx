import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import Card from "../components/Card";

const Home = () => {
  const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const [movie, setMovie] = useState([]);
  const [genre, setGenre] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=code&language=fr-FR`
      )
      .then((res) => setMovie(res.data.results))
      .catch((err) => console.error(err));
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=fr-FR`
      )
      .then((res) => {
        const map = {};
        res.data.genres.forEach((g) => {
          map[g.id] = g.name;
        });
        setGenre(map);
      });
  }, []);
  return (
    <div>
      <Header />
      <Form/>
      <div className="parent-card">
        {movie.map((datamovie) => (
          <Card key={datamovie.id} datamovie={datamovie} genre={genre} />
        ))}
      </div>
    </div>
  );
};

export default Home;
