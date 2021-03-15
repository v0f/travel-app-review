
import React, { useEffect, useState } from 'react';

import LangContext from '../../Language-context/LangContext';
import ImageGallery from 'react-image-gallery';

interface IDataPlaces{
  name: {
    [key: string]: string;
  };
  imageURL: string;
  description: {
    [key: string]: string;
  };
}

interface IGallery {
  places: Array<IDataPlaces>;
}

interface ISlide {
    original: string;
    thumbnail: string;
    description: string;
    originalTitle: string;
}

const Gallery: React.FC<IGallery> = ({ places } ) => {

    const { lang } = React.useContext(LangContext);
    const [currentSlideID, setSlideID] = useState<number>(0); //ID понадобится для рейтинга
    const [currentSlideTitle, setSlideTitle] = useState<string>('');
    const [images, setImages] = useState<Array<ISlide>>([]);

    useEffect(() => {
      const imgs: Array<ISlide> = [];
    
        places.forEach((place: IDataPlaces) => {
          imgs.push({
                original: place.imageURL,
                thumbnail: place.imageURL,
                description: place.description[lang],
                originalTitle: place.name[lang],
            })
        })

        setImages(imgs)
        setSlideTitle(imgs[0].originalTitle)

    }, [lang, places])

    const showHeading = (id: number) => {
      setSlideID(id)
      setSlideTitle(images[id].originalTitle);
    }

  return (
    <div className='country__places'>
        <h1 className='country__heading'>Places</h1>
        <h4> { currentSlideTitle} </h4> 
        <ImageGallery
        items={images}
        showPlayButton={false}
        onSlide={showHeading}
        // autoPlay={true}
        />

    </div>
  );
};

export default Gallery;