import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Header/Navbar/index.jsx";
import AboutMe from "./components/pages/AboutMe/index.jsx";

const App = () => {
  console.log(<AboutMe />);
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
