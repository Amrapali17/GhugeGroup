import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Businesses from "./pages/Businesses";
import Leadership from "./pages/Leadership";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import BusinessDetails from "./pages/BusinessDetails";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/businesses" element={<Businesses />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/businesses/:businessId" element={<BusinessDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;