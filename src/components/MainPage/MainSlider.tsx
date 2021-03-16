
import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';


interface ISlide {
    original: string;
}

const mainSliderImgs = [
  'v1615917014/travel-app/main/1.jpg',
  'v1615916061/travel-app/main/2.jpg',
  'v1615838372/travel-app/main/3.jpg',
  'v1615838372/travel-app/main/4.jpg',
  'v1615916869/travel-app/main/5.jpg',
  'v1615916180/travel-app/main/6.jpg',
  'v1615916147/travel-app/main/7.jpg',
  'v1615915571/travel-app/main/8.jpg',
  'v1615915402/travel-app/main/9.jpg',
  'v1615916219/travel-app/main/10.jpg',
  'v1615916115/travel-app/main/11.jpg',
  'v1615902423/travel-app/main/12.jpg',
  'v1615916013/travel-app/main/13.jpg' 
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