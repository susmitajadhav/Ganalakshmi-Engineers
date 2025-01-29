import React from 'react';
import './Gallery.css'; // optional for styling
import Header from './Header';
import Footer from './Footer';

const Gallery = () => {
  const images = [
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0v15p7ir2dHmNithECf37L0Sts-ppCN8YA&s', name: 'Image 1' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0v15p7ir2dHmNithECf37L0Sts-ppCN8YA&s', name: 'Image 2' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0v15p7ir2dHmNithECf37L0Sts-ppCN8YA&s', name: 'Image 3' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0v15p7ir2dHmNithECf37L0Sts-ppCN8YA&s', name: 'Image 4' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0v15p7ir2dHmNithECf37L0Sts-ppCN8YA&s', name: 'Image 5' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0v15p7ir2dHmNithECf37L0Sts-ppCN8YA&s', name: 'Image 6' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0v15p7ir2dHmNithECf37L0Sts-ppCN8YA&s', name: 'Image 7' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0v15p7ir2dHmNithECf37L0Sts-ppCN8YA&s', name: 'Image 8' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0v15p7ir2dHmNithECf37L0Sts-ppCN8YA&s', name: 'Image 9' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0v15p7ir2dHmNithECf37L0Sts-ppCN8YA&s', name: 'Image 10' },
  ]; // Add your image file names or URLs with names

  return (
    <div>
        <Header/>
    <div className="top">
    <h1>Gallery</h1>
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img
            src={image.src}
            alt={`Gallery item ${index + 1}`}
            className="gallery-image"
          />
          <div className="image-name">{image.name}</div>
        </div>
      ))}
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Gallery;
