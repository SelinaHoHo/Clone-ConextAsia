import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import "leaflet/dist/leaflet.css";
import { Marker, Popup } from "react-leaflet";

const MapComponent = (data) => {
  return (
    <MapContainer
      className="mapDetailPage"
      center={[data?.data?.latitude, data?.data?.longitude]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> '
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[data?.data?.latitude, data?.data?.longitude]}>
        <Popup>
          <div className="flex flex-row gap-4">
            <div className="overflow-hidden mb-0">
              <h1>{data?.data?.address}</h1>
            </div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
