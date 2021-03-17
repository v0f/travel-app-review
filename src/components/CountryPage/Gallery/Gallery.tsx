import React, { useEffect, useState } from 'react';
import CustomizedRatings from '../Rating/Rating';
import LangContext from '../../Language-context/LangContext';
import ImageGallery from 'react-image-gallery';
import dict from '../../../data/dictionary';
import IPlace from '../../types/IPlace';

import { useAuth } from '../../AuthContext/AuthContext';
import request from '../../../helpers/request';

import './Gallery.scss';
import { API_URL } from '../../constants';


interface IGallery {
  places: Array<IPlace>;
}

interface ISlide {
  original: string;
  thumbnail: string;
  description: string;
  originalTitle: string;
  rating: number;
}

const sendRating = (user: string, token: string, place: string, rating: number) => {
  request('POST', `${API_URL}/ratings/`, {user, place, rating}, token)
  .then((data) => console.log('govno', data));
}

const Gallery: React.FC<IGallery> = ({ places }) => {
  const { lang } = React.useContext(LangContext);
  const [currentSlideTitle, setSlideTitle] = useState<string>('');
  const [images, setImages] = useState<Array<ISlide>>([]);
  const [placeRating, setPlaceRating] = useState<number|null>(null); // middle rating
  const {userLogin} = useAuth();

  useEffect(() => {
    const imgs: Array<ISlide> = [];

    places.forEach((place) => {
      imgs.push({
        original: place.imageURL || '',
        thumbnail: place.imageURL || '',
        description: place.description,
        originalTitle: place.name,
        rating: place.rating,
      });
    });

    setImages(imgs);
    if (imgs && imgs.length) {
      setSlideTitle(imgs[0]?.originalTitle || '');
      setPlaceRating(imgs[0]?.rating || 0);
    }
  }, [lang, places]);

  useEffect(() => {

    const token: string = localStorage.getItem('token') || '';

    if (userLogin && token && currentSlideTitle && placeRating) {
      sendRating(userLogin, token, currentSlideTitle, placeRating);
    }
  }, [placeRating]);


  const updateNameAndRating = (id: number) => {
    setSlideTitle(images[id].originalTitle);
    setPlaceRating(images[id].rating);
  };

  const ratingChanged = (value: number | null) => {
    setPlaceRating(value);
  };

  return (
    <div className='country__places'>
      <h1 className='country__heading'>{dict.places[lang]}</h1>
      <h4 className='country__subheading'> {currentSlideTitle} </h4>

      <CustomizedRatings rating={placeRating} ratingChanged={ratingChanged} />

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
