// MapComponent.jsx
import React from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import "leaflet/dist/leaflet.css";
import { Marker, Popup } from "react-leaflet";

const MapComponent = () => {
  return (
    <MapContainer
      className="mapDetailPage"
      center={[16.056468, 108.237428]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> '
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[16.056468, 108.237428]}>
        <Popup>
          <div className="flex flex-row gap-4">
            <div className="w-32 h-24 overflow-hidden mb-0">
              <img
                className="object-fill h-full"
                src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg  "
                alt="test"
              />
            </div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
