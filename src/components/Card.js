import React from "react";
// import { useNavigate } from "react-router-dom";

import '../styles/Card.css';

export default function Card(apartment) {
 
  return (
    <article className="Card">
      <img className="Card__img" src={apartment.cover} alt="appearance of the apartment" />
      <h2 className="Card__title" >{apartment.title}</h2>
    </article>
  );
}