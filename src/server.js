const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const PORT = 5000;

// Initialize SQLite database
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to SQLite database');
    initializeDatabase();
  }
});

function initializeDatabase() {
   
    // Then create the table without token column
    db.run(`
      CREATE TABLE IF NOT EXISTS media (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        filename TEXT NOT NULL,
        originalname TEXT NOT NULL,
        mimetype TEXT NOT NULL,
        size INTEGER NOT NULL,
        uploadDate TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `, (createErr) => {
      if (createErr) {
        console.error('Error creating table:', createErr);
      }
    });
}

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

// File upload configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = './uploads';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'media-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'video/webm'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only images and videos are allowed.'), false);
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 100 * 1024 * 1024 // 100MB limit
  }
});

// Routes
app.post('/api/upload', upload.single('media'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  
  const { filename, originalname, mimetype, size } = req.file;
  
  db.run(
    'INSERT INTO media (filename, originalname, mimetype, size) VALUES (?, ?, ?, ?)',
    [filename, originalname, mimetype, size],
    function(err) {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      
      res.json({ 
        id: this.lastID,
        filename,
        originalname,
        mimetype,
        size,
        url: `/uploads/${filename}`
      });
    }
  );
});

app.get('/api/media', (req, res) => {
  db.all('SELECT id, filename, originalname, mimetype, size, uploadDate FROM media', [], (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }
    
    const media = rows.map(row => ({
      ...row,
      url: `/uploads/${row.filename}`
    }));
    
    res.json(media);
  });
});

// Static files (for serving uploaded media)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});