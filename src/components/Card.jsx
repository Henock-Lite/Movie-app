import { useState } from "react";

const Card = ({ datamovie, genre }) => {
  const Dateformater = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    return newDate;
  };

  const Numberformater = (number) => {
    let numnotation = number.toFixed(1);
    return numnotation;
  };


  return (
    <div>
      <div className="card" key={datamovie.id}>
        <img
          src={`https://image.tmdb.org/t/p/w500/.${datamovie.backdrop_path}`}
          alt={"image du film : " + datamovie.title}
        />
        <h2>{datamovie.title}</h2>
        <h5>Sortie: {Dateformater(datamovie.release_date)}</h5>
        <h4>
          {Numberformater(datamovie.vote_average)}/10 <span>🌟</span>
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
    </div>
  );
};

export default Card;
