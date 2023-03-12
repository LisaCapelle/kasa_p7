
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "../pages/Home";
import Detail from "../pages/Detail";
import About from "../pages/About";
import Error from "../pages/Error";

import apartmentList from '../logements.json';


export default function Routers() {
  return (
    <Routes>
    <Route path="/" element={<Home apartmentList = {apartmentList} />} />
    <Route path="/about" element={<About />} />
    <Route path="/detail/:id" element={<Detail apartmentList = {apartmentList} />} />
    <Route path="*" element={<Error />} />
    </Routes>
  )
}
