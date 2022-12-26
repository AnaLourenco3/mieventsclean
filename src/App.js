import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

import "./index.css";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Diy from "./Pages/diy/Diy";
import Events from "./Pages/Events/Events";
import HomePage from "./Pages/Homepage/HomePage";
import Weddings from "./Pages/Weddings/Weddings/Weddings";
import WeddingsDetails from "./Pages/Weddings/Weddings/WeddingsDetails";

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
          <Route path="/weddings" element={<Weddings />} />
          <Route path="/weddings/:id" element={<WeddingsDetails />} />
          <Route path="/events" element={<Events />} />
          <Route path="/diy" element={<Diy />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
