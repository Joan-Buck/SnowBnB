import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

// TO DO: center where hoveredSpot is
const center = {
  lat: 44.0682,
  lng: -114.7420,
};

const Maps = ({ apiKey, spots, hoveredSpot }) => {
  const [selectedSpot, setSelectedSpot] = useState(null);
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
            <Marker position={{ lat: Number(spot.latitude), lng: Number(spot.longitude) }}
              onClick={() => setSelectedSpot(spot)} />
          ))}
          {selectedSpot && (
            <InfoWindow
              position={{ lat: Number(selectedSpot.latitude), lng: Number(selectedSpot.longitude) }} >
              <div>
                <div>{selectedSpot.name}</div>
              </div>
            </InfoWindow>
          )}
        </ GoogleMap >
      )}
    </>
  );
};

export default Maps;
