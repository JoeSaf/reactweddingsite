import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const GalleryButton: React.FC = () => {
  return (
    <h2>
      {/* Make it a button but wrapped inside a Link to keep routing */}
      <Link to="/gallery">
        <button className="gallery-button">
          Gallery
        </button>
      </Link>
    </h2>
  );
};

export default GalleryButton;
