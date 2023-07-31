import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "./Map.css";

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY_GOOGLE,
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