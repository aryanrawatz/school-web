import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Admission from "../pages/Admission";
import Gallery from "../pages/Gallery";
import Academics from "../pages/Academics";
import AdminMessages from "../pages/AdminMessages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admission" element={<Admission />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/admin-messages" element={<AdminMessages />} />
    </Routes>
  );
}

export default AppRoutes;