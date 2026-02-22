import React from "react";
import ImageGallery from "react-image-gallery";

const MyGallery = ({
  images,
  showThumbnails,
  startIndex,
  showFullscreenButton,
}) => {
  let imagesGallery = [];

  images.forEach((element) => {
    imagesGallery.push({ original: element, thumbnail: element });
  });

  return (
    <ImageGallery
      items={imagesGallery}
      startIndex={startIndex}
      showPlayButton={false}
      showFullscreenButton={showFullscreenButton}
      showNav={true}
      showThumbnails={showThumbnails}
      thumbnailPosition="bottom" // top | left | right
      slideInterval={3000}
      autoPlay={false}
      showBullets={true}
      renderLeftNav={(onClick, disabled) => (
        <button
          onClick={onClick}
          disabled={disabled}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white text-2xl font-bold px-2 py-1 lg:h-[120px] lg:w-[50px] h-[60px] w-[35px] rounded-md z-50"
        >
          ❮
        </button>
      )}
      renderRightNav={(onClick, disabled) => (
        <button
          onClick={onClick}
          disabled={disabled}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white text-2xl font-bold px-2 py-1 lg:h-[120px] lg:w-[50px] h-[60px] w-[35px] rounded-md z-50"
        >
          ❯
        </button>
      )}
    />
  );
};

export default MyGallery;
