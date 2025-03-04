import React from "react";
//import { Link } from "react-router-dom";
import GalleryButton from "../components/GalleryButton";
import UploadButton  from "../components/UploadButton";


const Content: React.FC = () => {
  return (
    <div className="content">
      {/* Making the <h1> clickable */}
      <h1 data-content="MEMOIR">
          MEMOIR
      </h1>

      <div className="author">
        <h2>Gallery</h2>
        <p><b>Photo Memories</b></p>
        <p>Share your photo memory</p>
        <p>Copyright@NeJo_2025</p>

        {/* Buttons inside the author section */}
        <UploadButton />
        <GalleryButton />
      </div>

      <div className="model"></div>
    </div>
  );
};

export default Content;
