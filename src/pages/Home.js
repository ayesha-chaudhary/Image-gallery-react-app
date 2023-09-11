import React, { useState } from 'react';

const ImageGallery = () => {
 
  const imageUrls = [
    "https://picsum.photos/id/237/300/300",
    "https://picsum.photos/seed/picsum/300/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/id/100/300/300",
    "https://picsum.photos/id/101/300/300",
    "https://picsum.photos/id/102/300/300",
    "https://picsum.photos/id/103/300/300",
    "https://picsum.photos/id/104/300/300",
    "https://picsum.photos/id/106/300/300",
    "https://picsum.photos/id/107/300/300",
    "https://picsum.photos/id/108/300/300",
    "https://picsum.photos/id/109/300/300",
    
  ];

  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  let touchStartX = null;

  
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  
  const handleTouchEnd = (e) => {
    if (touchStartX === null) {
      return;
    }

    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 30 && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else if (deltaX < -30 && currentImageIndex < imageUrls.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }

    touchStartX = null;
  };

  return (
    <div className='w-[100%] h-[100vh] flex justify-center items-center'>
    <div className="image-gallery">
      <h1 className='text-center'>Image Gallery</h1>
      <div
        className="image-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img src={imageUrls[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      </div>

      <div className="navigation-buttons">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          onClick={() => setCurrentImageIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : prevIndex)}
          disabled={currentImageIndex === 0}
        >
          Previous
        </button>
        <span className="image-count px-1">
          Image  {currentImageIndex + 1} of {imageUrls.length}
        </span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-9 my-9 font-semibold py-2 px-4 rounded"
          onClick={() => setCurrentImageIndex((prevIndex) => prevIndex < imageUrls.length - 1 ? prevIndex + 1 : prevIndex)}
          disabled={currentImageIndex === imageUrls.length - 1}
        >
          Next
        </button>
      </div>
    </div>
    </div>
  );
};

export default ImageGallery;
