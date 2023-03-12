import { BrowserRouter } from "react-router-dom";
// import { useEffect, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Routers from "./Routers";

function App() {

  // console.log(apartmentList);
  
    return (
      <div className="App">
        
        <BrowserRouter>
          <Header />
          <Routers />
          <Footer />   
        </BrowserRouter>
        
      </div>
    );
  }
  
  export default App;