import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex justify-between bg-teal-400 absolute inset-x-0 bottom-0 h16">
            <img className="object-contain h-20 w-20" src="./logo.png" alt="Logo"></img>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/directions">
                <img className="object-contain h-20 w-20" src="./map.png" alt="Map"></img>
            </Link>
            <div>
                <h3>Subscribe to our newsletter</h3>
                <h4>For announcements and exclusive deals</h4>
                <input type="email"></input>
            </div>

        </footer>
    )
}