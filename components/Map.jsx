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

import * as L from "leaflet";

import { cities } from "@/constent/city";
import { fetchLocationWeather } from "@/helper/weather/api";

const MapWeather = ({ bigCity, setSelectedCity }) => {
  const [icon, setIcon] = useState(null);
  useEffect(() => {
    fetchLocationWeather(bigCity.name)
      .then((res) => {
        var temp = new L.Icon({
          iconUrl: res.iconUrl,
          iconSize: [25, 25],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
        });
        setIcon(temp);
      })
      .catch((err) => {});
  }, []);

  if (!icon) return <></>;

  return (
    <Marker position={[bigCity.coords.lat, bigCity.coords.lon]} icon={icon}>
      <Popup>
        <p onClick={() => setSelectedCity({ name: bigCity.name })}>
          {bigCity.name}
        </p>
      </Popup>
    </Marker>
  );
};

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
        flyToMarker([weatherData.coord.lat, weatherData.coord.lon], 10);
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
                  <p>{city.name}</p>
                </Popup>
              </Marker>

              {cities.map((bigCity, i) => (
                <div key={i}>
                  {bigCity.name !== city.name && (
                    <MapWeather
                      bigCity={bigCity}
                      setSelectedCity={setSelectedCity}
                    />
                  )}
                </div>
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
