import React from "react";
import { Link } from "react-router-dom";
import GalleryButton from "../components/GalleryButton";

const Content: React.FC = () => {
  return (
    <div className="content">
      {/* Making the <h1> clickable */}
      <h1 data-content="UPLOAD">
        <Link to="/gallery" className="upload-link" role="button" aria-label="Go to gallery">
          UPLOAD
        </Link>
      </h1>

      <div className="author">
        <h2>Gallery</h2>
        <p><b>Wed Memories</b></p>
        <p>Share your memory with us</p>
        <p>Copyright@NeJo_2025</p>

        {/* Gallery Button inside the author section */}
        <GalleryButton />
      </div>

      <div className="model"></div>
    </div>
  );
};

export default Content;
