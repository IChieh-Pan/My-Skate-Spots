import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 52.48206, lng: 13.42484 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));



function App() {
  return <div>
    <WrappedMap googleMapURL =  />
  </div>;
}

export default App;
