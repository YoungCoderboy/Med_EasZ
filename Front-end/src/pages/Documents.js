import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Documents() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from the server on component mount
    fetchImages();
  }, []);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select an image to upload');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      await axios.post('http://localhost:5010/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Image uploaded successfully');
      setSelectedFile(null);
      // Fetch images again to update the list
      fetchImages();
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:5010/images');
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleImageDownload = async (imageId, originalname) => {
    try {
      const response = await axios.get(`http://localhost:5010/image/${imageId}`, {
        responseType: 'blob',
      });

      // Create a Blob object from the response
      const blob = new Blob([response.data]);

      // Create an object URL for the Blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary link element to trigger the download
      const a = document.createElement('a');
      a.href = url;
      a.download = originalname; // Set the download filename
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();

      // Revoke the object URL to free up resources
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  return (
    <div className=" bg-[url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fimages%2Fcreative-education-background%2F299848927&psig=AOvVaw3wOoXDWKshqeDpH3tOBUdt&ust=1699296234670000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKD896nFrYIDFQAAAAAdAAAAABAE')]">
      <h1>Image Uploader</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
      <div className=" grid grid-cols-5 gap-4 mt-24">
        {images.map((image) => (
          <div key={image._id} className=" border-4 ">
            <img
              src={`http://localhost:5000/image/${image._id}`}
              alt={image.originalname}
              width="200"
              className='m-4 border-2 border-black w-44 h-52 '
            />
            <button
              className=" border-2 content-center ml-16"
              onClick={() => handleImageDownload(image._id, image.originalname)}
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Documents;