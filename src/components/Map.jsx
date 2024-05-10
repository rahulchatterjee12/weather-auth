"use client";

import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";

const Map = ({ city, weatherData, airQualityData }) => {
  const ZoomHandler = () => {
    const map = useMap();

    const flyToMarker = (coordinates, zoom) => {
      if (coordinates) {
        map.flyTo(coordinates, zoom, {
          animate: true,
          duration: 1.5,
        });
      }
    };
    useMapEvents({
      zoomend: () => {},
    });

    useEffect(() => {
      if (weatherData.coord.lon) {
        flyToMarker([weatherData.coord.lat, weatherData.coord.lon], 11);
      }
    }, [weatherData]);
  };

  return (
    <div className="flex justify-center my-5">
      <MapContainer
        center={[43.6426, -79.3871]}
        zoom={11}
        style={{
          height: "80vh",
          width: "80vw",
          borderRadius: "10px",
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {[weatherData.coord.lon, weatherData.coord.lat] && (
          <Marker position={[weatherData.coord.lat, weatherData.coord.lon]}>
            <Popup>{city}</Popup>
          </Marker>
        )}
        <ZoomHandler />
      </MapContainer>
    </div>
  );
};

export default Map;
