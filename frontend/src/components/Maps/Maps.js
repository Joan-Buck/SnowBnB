import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 44.0682,
  lng: -114.7420,
};

const Maps = ({ apiKey, spots }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={5}>
            {spots.map((spot) => (
               <Marker position={{lat: Number(spot.latitude), lng: Number(spot.longitude)}} />
            ))}

          </ GoogleMap >
      )}
    </>
  );
};

export default Maps;
