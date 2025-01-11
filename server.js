const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { ImageAnnotatorClient } = require('@google-cloud/vision');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Set up the Vision client with API key
const client = new ImageAnnotatorClient({
  credentials: {
    apiKey: process.env.GOOGLE_API_KEY, // Use the API key stored in environment variable
  },
});

app.post('/upload', upload.single('image'), (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).send({ message: 'No file uploaded' });
      }
  
      // Call Google Vision API
      const imageUrl = req.file.path;
  
      // Process the image with Google Vision API...
      // Response back with processed data
  
      res.status(200).send({ message: 'Image uploaded and processed successfully', data: processedData });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send({ message: 'Internal Server Error', error: err.message });
    }
  });
  

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
