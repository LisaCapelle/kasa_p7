import React from 'react';

import '../styles/Stars.css';

export default function Stars({ rating }) {
      const lis = [1, 2, 3, 4, 5];

      return (
            <ul className="Rating">
                  {lis.map((el, index) =>
                        el <= rating ? (
                              <li key={index}>
                                    <i className="fa-solid fa-star "></i>
                              </li>
                        ) : (
                              <li key={index} className="Stars-grey">
                                    <i className="fa-solid fa-star"></i>
                              </li>
                        )
                  )}
            </ul>
      );
}
