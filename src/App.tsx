import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./pages/Content";  // Home Page
import Gallery from "./pages/Gallery";  // Gallery
import Banner from "./components/Banner"; // Ensure Banner is imported
import Particles from "./components/Particles";
import GalleryListings from "./pages/GalleryListings";//gallery listings page

import "./styles/style.css";  

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page with Banner and Particles */}
        <Route 
          path="/" 
          element={
            <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
              <div style={{ 
                position: "absolute", 
                top: 0, 
                left: 0, 
                width: "100%", 
                height: "100vh", 
                zIndex: -1 
              }}>
                <Particles />
              </div>
              <Banner /> {/* Add Banner component here */}
              <Content />
            </div>
          } 
        />

        {/* Gallery Page with ONLY Particles */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="gallerylistings" element={<GalleryListings />} />
      </Routes>
    </Router>
  );
};

export default App;
