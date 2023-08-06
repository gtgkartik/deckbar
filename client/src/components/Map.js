import { useMemo } from "react";
import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "./Map.css";
import axios from 'axios';

const backendUrl = 'http://localhost:5000'
export default function Map() {
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState(null);

  useEffect(() => {
    // Fetch the Google Maps API key from the backend
    axios.get("http://localhost:5000/api/reviews")
      .then((response) => {
        setGoogleMapsApiKey(response.data.apiKey);
      })
      .catch((error) => {
        console.error('Error fetching Google Maps API key:', error);
      });
  }, []);


  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapsApiKey,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <IsMap />;

}

function IsMap() {
  const center = useMemo(() => ({ lat: 1.312340, lng: 103.862808 }), []);

  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="w-full h-[300px] ">
      <MarkerF position={center} />
    </GoogleMap>
  );
}