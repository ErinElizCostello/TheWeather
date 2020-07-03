import React from 'react';
import './gallery.css';

const Gallery = () => {
  const myGallery = window.cloudinary.galleryWidget({
    container: "#my-gallery",
    cloudName: "weatherit",
    mediaAssets: [
      {
        tag: "apple",
        tag: "banana"
      }
    ]
  });
  
  myGallery.render();

  return (
    <div class="gallery" id="my-gallery" ></div>
  );
}

export default Gallery;

