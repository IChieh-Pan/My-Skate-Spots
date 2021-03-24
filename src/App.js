import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const libraries = ["places"];
const containerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 52.471997,
  lng: 13.45102,
};

export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
    libraries,
  });

  if (loadError) return "Error laoding maps";
  if (!isLoaded) return "Loading map...";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      ></GoogleMap>
    </div>
  );
}
