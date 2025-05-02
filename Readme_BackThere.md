### **Database Schema Update**:
```sql
CREATE TABLE media (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      filename TEXT NOT NULL,
      originalname TEXT NOT NULL,
      mimetype TEXT NOT NULL,
      size INTEGER NOT NULL,
      uploadDate TEXT DEFAULT CURRENT_TIMESTAMP
    )  
```
### Backend Setup

```sh
### Navigate to the server directory: 
cd src/server

### Install dependencies:
npm install express multer sqlite3 cors
 
### Start the server:
node server.js

### Frontend Setup   
npm start
```    
## File Structure
```sh
memoir-gallery/
├── src/
│   ├── components/
│   │   ├── Masonry.tsx      # Masonry layout component
│   │   ├── Particles.tsx    # Particle effect background
│   │   └── UploadButton.tsx # File upload component
│   ├── pages/
│   │   ├── Content.tsx      # Main page layout
│   │   └── Gallery.tsx      # Gallery display page
│   └── server/
│       ├── server.js        # Backend server
│       └── uploads/         # Media storage directory
├── public/
└── README.md
```
## API Endpoints

### Upload Media
```json
POST /api/upload
    - Accepts: multipart/form-data with media field
    - Returns: Media metadata with generated URL
    - File restrictions:
        - Types: JPEG, PNG, GIF, MP4, WebM
        - Max size: 100MB

### Get Media List
GET /api/media
  - Returns: Array of all media items with metadata

mkdir -p src/server/uploads

### Access Uploaded Media
- Media files are served from `/uploads/{filename}`
```    

## Development Scripts
```sh
| Command          | Description                            |
| ---------------- | -------------------------------------- |
| `npm start`      | Start frontend development server      |
| `npm run build`  | Create production build                |
| `node server.js` | Start backend server (from src/server) |
```