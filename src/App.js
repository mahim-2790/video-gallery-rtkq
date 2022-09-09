import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navigation";
import Edit from "./components/pages/Edit";
import Home from "./components/pages/Home";
import Video from "./components/pages/Video";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<Video />} />
        <Route path="/videos/edit/:videoId" element={<Edit />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
