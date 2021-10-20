import React from "react";
import "./map.styles.scss";

const Map = ({ lat, long }) => {
  // const center = {
  //   lat: lat,
  //   lng: long,
  // };

  return (
    <div className="map__container">
      {/* <LoadScript googleMapsApiKey={`${process.env.GOOGLE_MAPS_API_KEY}`}>
        <GoogleMap mapContainerClassName="map" center={center} zoom={15}>
            
          <Marker position={center} />
          <></>
        </GoogleMap>
      </LoadScript> */}
      <iframe width="600" height="450" style={{ border: 0 }} loading="lazy" allowFullScreen className="map"
            src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJMb4UHQ2nvUcRQq34LHm0Qm4&key=${process.env.GOOGLE_MAPS_IFRAME_API_KEY}`}></iframe>
    </div>
  );
};

export default Map;
