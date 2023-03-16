import React from 'react';

import '../styles/Banner.css';

export default function Banner(props) {
      return (
            <section className="Banner">
                  {props.page && (
                        <h1 className="Banner__title">
                              <span>Chez vous, </span>
                              <span>partout et ailleurs</span>
                        </h1>
                  )}
                  <img className="Banner__img" src={props.img} alt="" />
            </section>
      );
}
