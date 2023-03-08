import React from "react";

import '../styles/Hashtags.css';

export default function Hashtags({ tags }) {
    console.log(tags);

    return (
    <ul className="Hashtags">
        {tags.map((city, index) => <li key = {index}>{city}</li>)}
    </ul>
  );
}