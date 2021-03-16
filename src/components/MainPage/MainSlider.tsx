
import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';


interface ISlide {
    original: string;
}

const mainSliderImgs = [
  'v1615924026/travel-app/main/1.jpg',
  'v1615922485/travel-app/main/2.jpg',
  'v1615922715/travel-app/main/3.jpg',
  'v1615922661/travel-app/main/4.jpg',
  'v1615922551/travel-app/main/5.jpg',
  'v1615916180/travel-app/main/6.jpg',
  'v1615916147/travel-app/main/7.jpg',
  'v1615915571/travel-app/main/8.jpg',
  'v1615915402/travel-app/main/9.jpg',
  'v1615916115/travel-app/main/11.jpg',
  'v1615902423/travel-app/main/12.jpg',
  'v1615916013/travel-app/main/13.jpg',
  'v1615924127/travel-app/main/14.jpg',
  'v1615924182/travel-app/main/15.jpg',
  'v1615923978/travel-app/main/16.jpg',
  'v1615923924/travel-app/main/17.jpg',
  'v1615923870/travel-app/main/18.jpg',
  'v1615923829/travel-app/main/19.jpg',
]

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