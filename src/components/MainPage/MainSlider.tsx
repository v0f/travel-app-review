
import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';


interface ISlide {
    original: string;
}

const MainSlider = () => {
    const [images, setImages] = useState<Array<ISlide>>([]);

    useEffect(() => {
      const imgs: Array<ISlide> = [];

      for( let i = 1; i<= 11; i += 1) {
        imgs.push({
            original: `https://res.cloudinary.com/travel-app/image/upload/v1615838588/travel-app/main/${i}.jpg`,
        })
      }
      imgs.sort(() => Math.random() - 0.5);
      setImages(imgs);
    }, [])

    return (
        <div className="main-gallery">
          <ImageGallery
          items={images}
          showPlayButton={false}
          autoPlay={true}
          showNav={false}
          showThumbnails={false}
          showFullscreenButton={false}
          />
        </div>
   );
};

export default MainSlider;