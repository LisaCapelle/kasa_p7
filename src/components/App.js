import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import About from "../pages/About";
import Error from "../pages/Error";

function App() {

  const [apartmentList, setApartmentList] = useState([])

  useEffect(()=>{

    fetch('http://localhost:3000/logements.json')
    .then(response => response.json())
    .then(data => setApartmentList(data))
    .catch(error => console.log(error))

  },[])

  
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home apartmentList = {apartmentList}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<Error />} />
  
          </Routes>
          <Footer />   
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;