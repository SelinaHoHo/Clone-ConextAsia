/* eslint-disable react/prop-types */

import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import '../App.css';
export default function Listing({ data }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;
      map.setView([data.latitude, data.longitude], map.getZoom());
    }
  }, [data]);
  return (
    <>
      <div className='flex'>
        <MapContainer
          center={[data.latitude, data.longitude]}
          zoom={13}
          scrollWheelZoom={false}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> '
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {data.Workplaces.map((item) => (
            <Marker key={item.id} position={[item.latitude, item.longitude]}>
              <Popup>
                <div className='flex flex-row gap-4'>
                  <div className='w-32 h-24 overflow-hidden mb-0'>
                    <img
                      className='object-fill h-full'
                      src='https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg  '
                      alt='test'
                    />
                  </div>
                  <div className='block justify-center'>
                    <h5 className='text-[#171C32] font-semibold py-0'>
                      {item?.name}
                    </h5>
                    <p className='text-[#171C32] text-xs font-light pb-0'>
                      {item?.address}
                    </p>
                    <span className='text-[#C01313] font-bold py-[0px] '>
                      {item?.price}/day
                    </span>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
}
