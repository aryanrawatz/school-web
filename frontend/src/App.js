import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Gallery from "./pages/Gallery";
import Admission from "./pages/Admission";
import Contact from "./pages/Contact";

import { ThemeProvider } from "./context/ThemeContext";
import ScrollProgress from "./components/ScrollProgress";
import AnnouncementBar from "./components/AnnouncementBar";
import FloatingButtons from "./components/FloatingButtons";
import ChatBot from "./components/ChatBot";
import AdminMessages from "./pages/AdminMessages";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
      <ScrollProgress />
      <AnnouncementBar />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
         <Route path="/admin/messages" element={<AdminMessages />} />
        </Routes>

        <ScrollToTopButton />
        <FloatingButtons />
        <ChatBot />
        <Footer />

      </BrowserRouter>
    </ThemeProvider>
  
  );
}

export default App;