import React, { useEffect } from 'react';


interface IGallery{
  places: object[];
}

const Gallery: React.FC<IGallery> = ({ places } ) => {

    useEffect(() => {
        console.log(places)
    }, [places])

  return (
    <div className='country__places'>
        <h1 className='country__heading'>Places</h1>
        <p className='country__article'>Галерея достопримечательностей</p>
        <>
        {
        
         places.map(place => {
             //@ts-ignore
             return <h1> {place.name['en']}</h1>
         })   

        }
        </>
  </div>
  );
};

export default Gallery;