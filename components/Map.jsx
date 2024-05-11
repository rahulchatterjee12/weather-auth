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
import { cities } from "@/constent/city";

const Map = ({ city, weatherData, setSelectedCity }) => {
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
      if (weatherData?.coord?.lon) {
        flyToMarker([weatherData.coord.lat, weatherData.coord.lon], 5);
      }
    }, [weatherData]);
  };

  return (
    <div className="flex justify-center my-5">
      {weatherData && (
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
          {weatherData?.coord?.lon && (
            <>
              <Marker
                position={[weatherData?.coord?.lat, weatherData?.coord?.lon]}
              >
                <Popup>
                  <p>{city}</p>
                </Popup>
              </Marker>

              {cities.map((city) => (
                <Marker position={[city.coords.lat, city.coords.lon]}>
                  <Popup>
                    <p onClick={() => setSelectedCity(city.name)}>
                      {city.name}
                    </p>
                  </Popup>
                </Marker>
              ))}
            </>
          )}
          <ZoomHandler />
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
