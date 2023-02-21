import React from "react";

import Banner from "../components/Banner";

import banner from "../assets/images/about-banner.png";
import "../styles/About.css";

export default function About() {
  return (
    <main className="About">
 <Banner img = {banner} />
 ABOUT...
    </main>
  );
}