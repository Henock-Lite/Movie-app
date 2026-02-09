import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Card from "../components/Card";

const Userlist = () => {
  const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const [listData, setListData] = useState([]);

  useEffect(() => {
    
    let storedIds = window.localStorage.getItem("datamovie")
      ? JSON.parse(window.localStorage.getItem("datamovie"))
      : [];

    const requests = storedIds.map((id) =>
      axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=fr-FR`,
      ),
    );

    Promise.all(requests)
      .then((responses) => {
        const movies = responses.map((res) => res.data);

        setListData(movies);
      })
      .catch((error) => console.error("Erreur lors du chargement :", error));
  }, []);
  return (
    <div className="user-list-page">
      <Header />
      <h2>
        coups de coeur<span>💖</span>
      </h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((datamovie) => <Card datamovie={datamovie}  key={datamovie.id}/>)
        ) : (
          <h2>Aucun coup de coeur pour le moment</h2>
        )}
      </div>
    </div>
  );
};

export default Userlist;
