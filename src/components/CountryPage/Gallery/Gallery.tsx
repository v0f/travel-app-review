
import React, { useEffect, useState } from 'react';
import CustomizedRatings from '../Rating/Rating'
import LangContext from '../../Language-context/LangContext';
import ImageGallery from 'react-image-gallery';
import dict from '../../../data/dictionary';
import IPlace from '../../types/IPlace';

// interface IDataPlaces{
//   name: {
//     [key: string]: string;
//   };
//   imageURL: string;
//   description: {
//     [key: string]: string;
//   };
//   rating: number;
// }

interface IGallery {
  places: Array<IPlace>;
}

interface ISlide {
    original: string;
    thumbnail: string;
    description: string;
    originalTitle: string;
    rating: number
}

const Gallery: React.FC<IGallery> = ({ places } ) => {

    const { lang } = React.useContext(LangContext);
    const [currentSlideTitle, setSlideTitle] = useState<string>('');
    const [images, setImages] = useState<Array<ISlide>>([]);
    const [placeRating, setPlaceRating] = useState<number>(2.5); // middle rating

    useEffect(() => {
      const imgs: Array<ISlide> = [];

        places.forEach((place) => {
          imgs.push({
                original: place.imageURL || '',
                thumbnail: place.imageURL || '',
                description: place.description,
                originalTitle: place.name,
                rating: place.rating
            })
        })

        setImages(imgs)
        setSlideTitle(imgs[0]?.originalTitle || '')
        setPlaceRating(imgs[0]?.rating || 0)

    }, [lang, places])

    const updateNameAndRating = (id: number) => {
      setSlideTitle(images[id].originalTitle);
      setPlaceRating(images[id].rating)
    }

    const ratingChanged = (value: number) => { setPlaceRating(value) };

    return (
      <div className='country__places'>
          <h1 className='country__heading'>{dict.places[lang]}</h1>
          <h4 className='country__subheading'> { currentSlideTitle} </h4>

          <CustomizedRatings
          rating={placeRating}
          ratingChanged={ratingChanged}
          />

          <ImageGallery
          items={images}
          showPlayButton={false}
          onSlide={updateNameAndRating}
          />
      </div>
   );
};

export default Gallery;