import React from 'react';

import '../styles/CollapseContent.css';

export default function CollapseContent({ content, equipments }) {
      if (equipments) {
            return (
                  <ul className="CollapseContent">
                        {equipments.map((element, index) => (
                              <li key={index}> {element}</li>
                        ))}
                  </ul>
            );
      } else {
            return <p className="CollapseContent">{content}</p>;
      }
}
