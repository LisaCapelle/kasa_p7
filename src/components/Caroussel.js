import React from "react";
import {useState} from "react";
import '../styles/Caroussel.css'

export default function Caroussel({pictures}) {
  const [currentPage, setCurrentPage] = useState(1)

  
  return (
    <section className="Caroussel">
      <div className="Caroussel__img-wrap">
        IMAGE
      </div>
   
   
      <div className="Caroussel__pages">
        
        
      </div>
    </section>
  );
}