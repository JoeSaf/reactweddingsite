import React from "react";
import Banner from "./components/Banner";
import GalleryButton from "./components/GalleryButton";
import Particles from "./components/Particles";

import "./styles/style.css";  

// Function to handle click
const handleGalleryClick = () => {
  console.log("Gallery button clicked!");
};

const App: React.FC = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      {/* Make Particles the background */}
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

      {/* Main content */}
      <Banner />
      <GalleryButton onClick={handleGalleryClick} />
    </div>
  );
};

export default App;
