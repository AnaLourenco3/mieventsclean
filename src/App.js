import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

import miLogo from "./components/logo3.png";
import "./index.css";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Diy from "./Pages/diy/Diy";

import HomePage from "./Pages/Homepage/HomePage";
import Weddings from "./Pages/Weddings/Weddings/Weddings";
import WeddingsDetails from "./Pages/Weddings/Weddings/WeddingsDetails";
import { FloatingWhatsApp } from "react-floating-whatsapp";

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
          <Route path="/category/:id" element={<Weddings />} />
          <Route path="/category-details" element={<WeddingsDetails />} />

          <Route path="/diy" element={<Diy />} />
        </Routes>
        <FloatingWhatsApp
          phoneNumber="31639112882"
          accountName="Made By Mi"
          avatar={miLogo}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
