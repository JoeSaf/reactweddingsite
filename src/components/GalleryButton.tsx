import React from "react";
import "../App.css"

interface GalleryButtonProps {
  onClick?: () => void; // Make onClick optional
}

const GalleryButton: React.FC<GalleryButtonProps> = ({ onClick }) => {
  return (
    <h2>
      <button onClick={onClick}>Gallery</button>
    </h2>
  );
};

export default GalleryButton;
