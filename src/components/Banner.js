import React from "react";

import '../styles/Banner.css';

export default function Banner(props) {
// console.log(props);

  return (
    <section className="Banner">
    
      {props.page && <h1 className="Banner__title">chez vous, partout et ailleurs</h1>}
      <img className="Banner__img" src={props.img} alt="" />
    </section>
  );
}
