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
import { FloatingWhatsApp } from "react-floating-whatsapp";
import CategoryBlogList from "./Pages/Categories/CategoryBlogList";
import CategoryBlogDetails from "./Pages/Categories/CategoryBlogDetails";

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
          <Route path="/category/:id" element={<CategoryBlogList />} />
          <Route path="/blog/:id" element={<CategoryBlogDetails />} />
          <Route path="/diy/:id" element={<Diy />} />
        </Routes>
        <FloatingWhatsApp
          phoneNumber="351964345526"
          accountName="Made By Mi"
          avatar={miLogo}
          allowClickAway={true}
          chatMessage="Olá, como posso ajudar?"
          statusMessage=""
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
