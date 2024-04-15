import React from "react";
import Loader from "./components/Loader";
import Index from "./Index";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Service from "./Service";
import Blog from "./Blog";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <div>
        <Loader />
      </div>
    </>
  );
}

export default App;
