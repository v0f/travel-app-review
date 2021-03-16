
import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import mainSliderImgs from '../../data/images';


interface ISlide {
    original: string;
}


const MainSlider = () => {
    const [images, setImages] = useState<Array<ISlide>>([]);

    useEffect(() => {
      const imgs: Array<ISlide> = [];

      mainSliderImgs.forEach( img => {
        imgs.push({
            original: `https://res.cloudinary.com/travel-app/image/upload/${img}`,
        })
      })
      
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