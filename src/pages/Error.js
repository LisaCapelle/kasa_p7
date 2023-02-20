import React from "react";
import { Link } from "react-router-dom";

import "../styles/Error.css";

export default function Error() {
  return (
    <section className="Error">
      <p className="Error__code">404</p>
      <div className="Error__msg">
        <span>Oups! La page que </span>
        <span>vous demandez n'existe pas.</span>
      </div>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </section>
  );
}

