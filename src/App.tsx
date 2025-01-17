import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";

import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ flexGrow: 1 }}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
