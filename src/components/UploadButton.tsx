// import React from "react";
// import { Link } from "react-router-dom";
// import "../App.css";

// const UploadButton: React.FC = () => {
//     return(
//         <h2>
//             <Link to="#">
//             <button className="upload-button">
//                 Upload
//             </button>
//             </Link>
//         </h2>
//     );
// };

// export default UploadButton;

import React, { useState, useRef } from "react";
import axios, { AxiosError } from 'axios';
import "../App.css";

const UploadButton: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files[0];
      if (!file.type.match('image.*|video.*')) {
        setError('Only images and videos allowed');
        return;
      }
      setSelectedFile(file);
      setError('');
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    
    const formData = new FormData();
    formData.append('media', selectedFile);

    try {
      setUploading(true);
      setError('');

      const response = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      alert('Upload successful!');
      window.location.reload();
    } catch (err) {
      console.error('Upload error:', err);
      let errorMessage = 'Upload failed';
      
      if (axios.isAxiosError(err)) {
        // Type-safe access to Axios error properties
        errorMessage = err.response?.data?.error || err.message || 'Upload failed';
      } else if (err instanceof Error) {
        errorMessage = err.message;
      } else if (typeof err === 'string') {
        errorMessage = err;
      }
      
      setError(errorMessage);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="upload-container">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*,video/*"
        style={{ display: 'none' }}
      />
      
      <button 
        className="upload-button"
        onClick={() => fileInputRef.current?.click()}
        disabled={uploading}
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>

      {selectedFile && (
        <div className="file-info">
          <p>{selectedFile.name}</p>
          <button
            className="upload-button confirm"
            onClick={handleUpload}
            disabled={uploading}
          >
            Confirm Upload
          </button>
        </div>
      )}

      {error && <p className="upload-error">{error}</p>}
    </div>
  );
};

export default UploadButton;