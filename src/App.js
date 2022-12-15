import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import styled from "styled-components";

import "./index.css";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import HomePage from "./Pages/Homepage/HomePage";

const App = () => {
  return (
    <div>
      <div>
        <Header />
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
