import React from "react";
import Particles from "../components/Particles"; // Ensure correct path
import Masonry from "../components/Masonry"; // Import Masonry component

import dragon1 from "../assets/images/dragon_1.jpg";
import dragon2 from "../assets/images/dragon_2.jpg";
import dragon3 from "../assets/images/dragon_3.jpg";
import dragon4 from "../assets/images/dragon_4.jpg";
import dragon5 from "../assets/images/dragon_5.jpg";

// Sample Image Data for Masonry
const imageData = [
  { id: 1, height: 300, image: dragon1 },
  { id: 2, height: 250, image: dragon2 },
  { id: 3, height: 400, image: dragon3 },
  { id: 4, height: 350, image: dragon4 },
  { id: 5, height: 275, image: dragon5 },
];

const Gallery: React.FC = () => {
  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden" }}>
      {/* Particles Background */}
      <div style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100%", 
        height: "100vh", 
        zIndex: -1,  
        pointerEvents: "none",
        opacity: 0.8, /* Adjust for visibility */
      }}>
        <Particles />
      </div>

      {/* Masonry Grid */}
      <div style={{ padding: "20px", position: "relative", zIndex: 1 }}>
        <Masonry data={imageData} />
      </div>
    </div>
  );
};

export default Gallery;
