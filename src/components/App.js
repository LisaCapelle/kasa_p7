import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import About from "../pages/About";
import Error from "../pages/Error";

import apartmentList from '../logements.json';
// console.log(apartmentList);

function App() {

  // console.log(apartmentList);
  
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            {/* // */}
            <Route path="/" element={<Home apartmentList = {apartmentList} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail apartmentList = {apartmentList} />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />   
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;