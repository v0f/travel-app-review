
import React, { useEffect } from 'react';

import LangContext from '../Language-context/LangContext';
import ImageGallery from 'react-image-gallery';

interface IGallery{
  places: any; // TO DO
}

interface IPlace{
    original: string;
    thumbnail: string;
    description: string;
    originalTitle: string;
  }

const Gallery: React.FC<IGallery> = ({ places } ) => {
    const images: Array<IPlace> = [];
    const { lang } = React.useContext(LangContext);

    useEffect(() => {
        places.forEach((place: any)=> {
            images.push({
                original: place.imageURL,
                thumbnail: place.imageURL,
                description: place.description[lang],
                originalTitle: place.name[lang]

            })
        })
    }, [places, lang])

  return (
    <div className='country__places'>
        <h1 className='country__heading'>Places</h1>
        <ImageGallery
        items={images}
        showPlayButton={false}
        // autoPlay={true}
    />;
  </div>
  );
};

export default Gallery;