import axios from "axios";
import Header from "../components/Header";
import Form from "../components/Form";
import Card from "../components/Card";
import { useEffect, useState } from "react";

const Home = () => {
  const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const [movie, setMovie] = useState([]);
  const [genre, setGenre] = useState({});
  const [query, setQuery] = useState("code");
  
 

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query}e&language=fr-FR`,
      )
      .then((res) => {
        setMovie(res.data.results);
      })
      .catch((err) => console.error(err));
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=fr-FR`,
      )
      .then((res) => {
        const map = {};
        res.data.genres.forEach((g) => {
          map[g.id] = g.name;
        });
        setGenre(map);
      });
  }, [query]);

  const queryfunction = (valueofquery) => {
    setQuery(valueofquery);
  };
  return (
    <div>
      <Header />
      <Form queryfunction={queryfunction} movie={movie} setMovie={setMovie} />
      <div className="parent-card">
        {movie.map((datamovie) => (
          <Card key={datamovie.id} datamovie={datamovie} genre={genre} />
        ))}
      </div>
    </div>
  );
};

export default Home;
