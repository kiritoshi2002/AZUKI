/* The INSPIRATION https://acasadoporco.com.br/  */

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Azuki from "./components/Azuki";
import Restaurant from "./components/Restaurant";
import Chefs from "./components/Chefs";
import Philosophy from "./components/philosophy";
import Menu from "./components/Menu";
import Service from "./components/service";
import Communication from "./components/Communication";
import Work from "./components/Work";
import MainHome from "./components/Main";
import ScrollToTop from "./components/Scroll";



function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Azuki as the layout for all routes */}
        <Route path="/" element={<Azuki />}>
          {/* Define the paths for each component */}
          <Route index element={<MainHome />} /> {/* This will load the home page as default */}
          <Route path="/restaurant" element={<Restaurant/>} />
          <Route path="/chefs" element={<Chefs />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/service" element={<Service />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/work-with-us" element={<Work/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
