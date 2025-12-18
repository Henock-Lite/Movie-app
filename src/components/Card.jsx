import axios from "axios";
import React, { useEffect, useState } from "react";

const Card = () => {
  const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=code&language=fr-FR`
      )
      .then((res) => setMovie(res.data.results))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="parent-card">
      {movie.map((datamovie) => (
        <div className="card" key={datamovie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/.${datamovie.backdrop_path}`}
            alt={datamovie.original_title}
          />
          <h2>{datamovie.original_title}</h2>
          <h5>sortie: {datamovie.release_date}</h5>
          <h4></h4>
          <ul>
            <li></li>
          </ul>
        </div>
      ))}
      {/* <div className="card">
        <img src="" alt="" />
        <h2>titre</h2>
        <h5>sortie</h5>
        <h4>
          6<span>🌟</span>
        </h4>
        <ul>
          <li>action</li>
        </ul>

        <h3>synopsie</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
          incidunt, corporis ipsum impedit alias quidem repellendus distinctio
          ea sapiente illum atque nemo? Debitis excepturi suscipit reprehenderit
          voluptates nihil nam perspiciatis.
        </p>

        <button className="btn">ajouter fav</button>
      </div> */}
    </div>
  );
};

export default Card;
