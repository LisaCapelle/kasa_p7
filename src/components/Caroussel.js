import React from "react";
import {useState} from "react";
import '../styles/Caroussel.css'

export default function Caroussel({pictures}) {
  const [currentPage, setCurrentPage] = useState(1)

  
  const previousSlide = () => {
 
    if(currentPage === 1 ) {
      setCurrentPage(pictures.length)
    }else{
      setCurrentPage(currentPage - 1)
    }
    
  }

  const nextSlide = () => {
    if(currentPage > pictures.length - 1) {
      setCurrentPage(1)
    }else{
      setCurrentPage(currentPage+1)
    }
    
  }

  return (
    <section className="Caroussel">
      <div className="Caroussel__img-wrap">
        {<img  className="Caroussel__img" src={pictures[currentPage-1]} alt="caroussel" />}
      </div>
      
      <i className="fa-solid fa-chevron-left Carousel__chevron-left" onClick = {previousSlide}></i>
      <i className="fa-solid fa-chevron-right Carousel__chevron-right" onClick = {nextSlide}></i>
   
      <div className="Caroussel__pages">
        <span className="Caroussel__current">{currentPage}</span>/<span className="Caroussel__total">{pictures.length}</span>
      </div>
    </section>
  );
}