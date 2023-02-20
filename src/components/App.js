import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import About from "../pages/About";
import Error from "../pages/Error";

function App() {
  
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
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