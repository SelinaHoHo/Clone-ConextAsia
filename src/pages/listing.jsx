import { useState } from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
// import '../App.css'
import '../App.css'
import "leaflet/dist/leaflet.css";
import { Marker, Popup } from 'react-leaflet'
export default function Listing() {
    const position = [16.052674, 108.223867]
    const markers = [
        {
            geocode: [16.055478, 108.217172],
            name: "DNC Da Nang Cowoking Space",
            address: "31 tran phu, hai chau, da nang",
            price: "100.000vnd",
            popUp: "Hello, I am pop up 1"
        },
        {
            geocode: [16.056468, 108.237428],
            name: "St Coworking",
            address: "31 tran phu, hai chau ward, da nang",
            price: "100.000vnd",
            popUp: "Hello, I am pop up 2"
        },
        {
            geocode: [16.044508, 108.221721],
            name: "Beans workspace",
            address: "31 tran phu, hai chau, da nang",
            price: "100.000vnd",
            popUp: "Hello, I am pop up 3"
        }
    ];
    return (
        <>
            <div className='flex'>
                <div className='w-1/3'>
                </div>
                <div className='w-2/3'>
                    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> '
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {markers?.map((item) => (
                            <Marker position={item?.geocode}>
                                <Popup>
                                    <div className='flex flex-row gap-4'>
                                        <div className='w-32 h-24 overflow-hidden mb-0'>
                                            <img className='object-fill h-full' src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg  " alt="test" />
                                        </div>
                                        <div className='block justify-center'>
                                            <h5 className='text-[#171C32] font-semibold py-0'>{item?.name}</h5>
                                            <p className='text-[#171C32] text-xs font-light pb-0'>{item?.address}</p>
                                            <span className='text-[#C01313] font-bold py-[0px] '>{item?.price}/day</span>
                                        </div>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>
        </>
    )
}


//     import { useState } from 'react'
// import { MapContainer } from 'react-leaflet/MapContainer'
// import { TileLayer } from 'react-leaflet/TileLayer'
// import { useMap } from 'react-leaflet/hooks'
// import './App.css'
// import "leaflet/dist/leaflet.css";
// import { Marker, Popup } from 'react-leaflet'
// function App() {
//   const [count, setCount] = useState(0)
//   const position = [16.052674, 108.223867]
//   const markers = [
//     {
//       geocode: [16.055478, 108.217172],
//       name: "DNC Da Nang Cowoking Space",
//       address: "31 tran phu, hai chau, da nang",
//       price: "100.000vnd",
//       popUp: "Hello, I am pop up 1"
//     },
//     {
//       geocode: [16.056468, 108.237428],
//       name: "St Coworking",
//       address: "31 tran phu, hai chau ward, da nang",
//       price: "100.000vnd",
//       popUp: "Hello, I am pop up 2"
//     },
//     {
//       geocode: [16.044508, 108.221721],
//       name: "Beans workspace",
//       address: "31 tran phu, hai chau, da nang",
//       price: "100.000vnd",
//       popUp: "Hello, I am pop up 3"
//     }
//   ];
//   return (
//     <>
//       <div className='flex'>
//         <div className='w-1/3'>
//         </div>
//         <div className='w-2/3'>
//           <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
//             <TileLayer
//               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> '
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             {markers?.map((item) => (
//               <Marker position={item?.geocode}>
//                 <Popup>
//                   <div className='flex flex-row gap-4'>
//                     <div className='w-32 h-24 overflow-hidden mb-0'>
//                       <img className='object-fill h-full' src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg  " alt="test" />
//                     </div>
//                     <div className='block justify-center'>
//                       <h5 className='text-[#171C32] font-semibold py-0'>{item?.name}</h5>
//                       <p className='text-[#171C32] text-xs font-light pb-0'>{item?.address}</p>
//                       <span className='text-[#C01313] font-bold py-[0px] '>{item?.price}/day</span>
//                     </div>
//                   </div>
//                 </Popup>
//               </Marker>
//             ))}
//           </MapContainer>
//         </div>
//       </div>
//     </>
//   )
// }