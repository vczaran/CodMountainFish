import React from 'react'
import GoogleMapReact from 'google-map-react'
// import './map.css'
import { FaLocationDot } from "react-icons/fa6";


const LocationPin = ({ text }) => (
    <div className="pin">
      <FaLocationDot className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )



const Map = ({ location, zoomLevel }) => {
    return (
    <div className="map">
      <div className="google-map w-[500px] h-[338px] pl-[2%]">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBMbP2OQapIgzhKFdveSykkzHVmlzcsGP8" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )}

export default Map
