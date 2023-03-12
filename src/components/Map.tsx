import { FC } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map: FC = () => {
  const center = {
    lat: 35.681236,
    lng: 139.767125,
  };

  const marker = {
    lat: 35.681236,
    lng: 139.767125,
  };

  const GOOGLE_MAPS_API_KEY: string = import.meta.env.GOOGLE_MAPS_API_KEY;

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={{ height: '100vh', width: '100%' }}
        center={center}
        zoom={13}
      >
        {<Marker position={marker} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
