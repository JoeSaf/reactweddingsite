import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const UploadButton: React.FC = () => {
    return(
        <h2>
            <Link to="#">
            <button className="upload-button">
                Upload
            </button>
            </Link>
        </h2>
    );
};

export default UploadButton;
