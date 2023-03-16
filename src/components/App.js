import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Routers from './Routers';

function App() {
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
