import axios from "axios";
import React, { useEffect, useState } from "react";

const Card = () => {
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
    <div className="parent-card">
      {movie.map((datamovie) => (
        <div className="card" key={datamovie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/.${datamovie.backdrop_path}`}
            alt={"image du film : "+ datamovie.original_title}
          />
          <h2>{datamovie.original_title}</h2>
          <h5>sortie: {datamovie.release_date}</h5>
          <h4>
            {datamovie.vote_average}/10 <span>🌟</span>
          </h4>

          <ul>
            {datamovie.genre_ids.map((id) => (
              <li key={id}>{genre[id]}</li>
            ))}
          </ul>

          <h3>Synopsie</h3>
          <p>
            {datamovie.overview.length > 0
              ? datamovie.overview
              : "Pas d'informations disponible"}
          </p>
          <div>
            <button className="btn">Ajouter aux coups de coeur</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
