import React from "react";
import { useNavigate } from "react-router-dom";

import '../styles/Card.css';

export default function Card(apartment) {
 
  const navigate = useNavigate();
  const checkDetail = (id) => {
    navigate(`/detail/${id}`);
  }

  return (
    <article className="Card" onClick = {id => checkDetail(apartment.id) }>
      <img className="Card__img" src={apartment.cover} alt="appearance of the apartment" />
      <h2 className="Card__title" >{apartment.title}</h2>
    </article>
  );
}