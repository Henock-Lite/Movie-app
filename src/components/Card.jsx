import { useEffect, useState } from "react";

const Card = ({ datamovie, genre }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedData = window.localStorage.getItem("datamovie")
      ? JSON.parse(window.localStorage.getItem("datamovie"))
      : [];

    if (storedData.includes(datamovie.id)) {
      setIsFavorite(true);
    }
  }, [datamovie.id]);

  const addstorage = () => {
    let storedData = window.localStorage.getItem("datamovie")
      ? JSON.parse(window.localStorage.getItem("datamovie"))
      : [];

    if (!storedData.includes(datamovie.id)) {
      storedData.push(datamovie.id);
      window.localStorage.setItem("datamovie", JSON.stringify(storedData));
      setIsFavorite(true);
      alert("Film ajouté aux coups de coeur 💖  ");
    } else {
      alert("Ce film est déjà dans vos coups de coeur 🌟");
    }
  };

  const deletestorage = () => {
    if (
      window.confirm(
        "Voulez-vous vraiment supprimer ce film de vos coups de cœur ?",
      )
    ) {
      let storedData = JSON.parse(localStorage.getItem("datamovie"));
      let newData = storedData.filter((id) => id != datamovie.id);
      window.localStorage.setItem("datamovie", JSON.stringify(newData));
      window.location.reload();
    }
  };

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
          src={
            datamovie.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${datamovie.backdrop_path}`
              : null
          }
          alt={"image du film : " + datamovie.title}
        />
        <h2>{datamovie.title}</h2>
        <h5>
          Sortie:{" "}
          {datamovie.release_date ? Dateformater(datamovie.release_date) : null}
        </h5>
        <h4>
          {Numberformater(datamovie.vote_average)}/10 <span>🌟</span>
        </h4>

        <ul>
          {datamovie.genre_ids
            ? datamovie.genre_ids.map((id) => <li key={id}>{genre[id]}</li>)
            : datamovie.genres &&
              datamovie.genres.map((g) => <li key={g.id}>{g.name}</li>)}
        </ul>
        <h3>Synopsie</h3>
        <p>
          {datamovie.overview.length > 0
            ? datamovie.overview
            : "Pas d'informations disponible"}
        </p>

        {datamovie.genre_ids ? (
          <div>
            <button className="btn" onClick={addstorage}>
              Ajouter aux coups de coeur
            </button>
          </div>
        ) : (
          <div>
            <button className="btn" onClick={deletestorage}>
              supprimer de la liste
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
