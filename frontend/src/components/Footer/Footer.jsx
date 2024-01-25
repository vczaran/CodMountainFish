import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Subscribe from "../SubscribeForm/Subscribe";

export default function Footer() {
    return (
        <footer className="flex justify-evenly bg-teal-400 inset-x-0 bottom-0">
            <img className="object-contain h-20 w-20" src="./logo.png" alt="Logo"></img>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/trip-info">
                <img className="object-contain h-20 w-20" src="./map.png" alt="Map"></img>
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