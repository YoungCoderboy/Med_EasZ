// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5010;

app.use(cors());

mongoose.connect('mongodb+srv://researchgrps123:iOTo6YEo9TAPLMRg@cluster0.ierihyj.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log("mongodb connected");
})
.catch(()=>{
  console.log('failed');
});

const ImageSchema = new mongoose.Schema({
  data: Buffer,
  contentType: String,
});
const Image = mongoose.model('Image', ImageSchema);

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const image = new Image({
      data: req.file.buffer,
      contentType: req.file.mimetype,
    });
    await image.save();
    console.log("saves",image)
    res.json({ message: 'Image uploaded successfully' });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ message: 'Error uploading image' });
  }
});

app.get('/images', async (req, res) => {
  try {
    const images = await Image.find({}, { data: 0 });
    res.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ message: 'Error fetching images' });
  }
});

app.get('/image/:id', async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }

    res.setHeader('Content-Type', image.contentType); // Set the Content-Type header based on the image's format
    res.send(image.data);
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).json({ message: 'Error fetching image' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
