import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";

const Userlist = () => {
  const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const [listData, setListData] = useState([]);

  useEffect(() => {
 let storedIds = window.localStorage.getItem("datamovie")
    ? JSON.parse(window.localStorage.getItem("datamovie"))
    : [];
    setListData([]); //Vider la liste avant de la remplir pour éviter les doublons

  storedIds.forEach((id) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=fr-FR`)
      .then((res) => {
        // On ajoute chaque film un par un dans notre State en gardant le precedant 
        setListData((prevList) => [...prevList, res.data]);
        console.log(res);        
      });
  });
  }, []);
  return (
    <div className="user-list-page">
      <Header />
      <h2>
        coups de coeur<span>💖</span>
      </h2>
      <div className="result"></div>
    </div>
  );
};

export default Userlist;
