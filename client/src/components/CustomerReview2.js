import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBymYyfULhvaoYk7dKCxepRpgRybPxfcEg",
  });
  

  if (!isLoaded) return <div>Loading...</div>;
  return <div>workinh</div>;
}

