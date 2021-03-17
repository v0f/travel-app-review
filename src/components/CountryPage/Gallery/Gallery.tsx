import React, { useEffect, useState } from 'react';
import CustomizedRatings from '../Rating/Rating';
import LangContext from '../../Language-context/LangContext';
import ImageGallery from 'react-image-gallery';
import dict from '../../../data/dictionary';
import IPlace from '../../types/IPlace';
import './Gallery.scss';

interface IGallery {
  places: Array<IPlace>;
}

interface ISlide {
  original: string;
  thumbnail: string;
  description: string;
  originalTitle: string;
  placeId: string;
  rating: number;
}

const Gallery: React.FC<IGallery> = ({ places }) => {
  const { lang } = React.useContext(LangContext);
  const [currentSlideTitle, setSlideTitle] = useState<string>('');
  const [currentSlidePlaceId, setCurrentSlidePlaceId] = useState<string>('');
  const [images, setImages] = useState<Array<ISlide>>([]);

  useEffect(() => {
    const imgs: Array<ISlide> = [];

    places.forEach((place) => {
      imgs.push({
        original: place.imageURL || '',
        thumbnail: place.imageURL || '',
        description: place.description,
        originalTitle: place.name,
        placeId: place.slug,
        rating: place.rating,
      });
    });

    setImages(imgs);
    if (imgs && imgs.length) {
      setSlideTitle(imgs[0]?.originalTitle || '');
      // setPlaceRating(imgs[0]?.rating || 0);
      setCurrentSlidePlaceId(imgs[0]?.placeId || '');
    }
  }, [lang, places]);

  const updateNameAndRating = (id: number) => {
    setSlideTitle(images[id].originalTitle);
    // setPlaceRating(images[id].rating);
    setCurrentSlidePlaceId(images[id]?.placeId || '');
  };

  return (
    <div className='country__places'>
      <h1 className='country__heading'>{dict.places[lang]}</h1>
      <h4 className='country__subheading'> {currentSlideTitle} </h4>

      {/* <CustomizedRatings placeId={currentSlidePlaceId} rating={placeRating} ratingChanged={ratingChanged} /> */}
      <CustomizedRatings placeId={currentSlidePlaceId} />

      <div className="country-gallery">
        <ImageGallery
        items={images}
        showPlayButton={false}
        onSlide={updateNameAndRating}
        />
      </div>
    </div>
  );
};

export default Gallery;