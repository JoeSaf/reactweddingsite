import React from "react";
import Particles from "../components/Particles"; // Ensure correct path

const Gallery: React.FC = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      {/* Particles as background */}
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
    </div>
  );
};

export default Gallery;
