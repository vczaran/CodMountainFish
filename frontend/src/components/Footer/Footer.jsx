import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Subscribe from "../SubscribeForm/Subscribe";
// import Map from "../Map/Map";

export default function Footer() {
  // const location = {
  //   address: 'Cod Mountain Fish Co.',
  //   lat: 36.96578633181195,
  //   lng: -122.00103392460099,
  // }

    return (
        <footer className="flex justify-evenly bg-teal-400 inset-x-0 bottom-0">
            <img className="object-contain mt-5 h-20 w-20" src="./logo.png" alt="Logo"></img>
            <Link className="hover:underline" to="/about">About Us</Link>
            <Link className="hover:underline" to="/contact">Contact Us</Link>
            <Link className="hover:underline" to="/faq">FAQs</Link>
            <Link className="hover:underline" to="/trip-info">
            {/* <Map location={location} zoomLevel={17}/> */}
            <img className="w-[250px] h-[150px]" src="./map.png" alt="map"></img>
            </Link>
            <Subscribe />
            <a
            href="https://www.facebook.com/Codmountain"
            className="text-lg mt-5"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/codmountainfishco"
            className="text-lg mt-5"
          >
            <FaInstagram />
          </a>
        </footer>
    )
}
