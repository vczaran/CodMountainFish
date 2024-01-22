import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Subscribe from "../SubscribeForm/Subscribe";

export default function Footer() {
    return (
        <footer className="flex justify-between bg-teal-400 absolute inset-x-0 bottom-0">
            <img className="object-contain h-20 w-20" src="./logo.png" alt="Logo"></img>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/directions">
                <img className="object-contain h-20 w-20" src="./map.png" alt="Map"></img>
            </Link>
            <Subscribe />
        </footer>
    )
}