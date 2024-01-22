import React from "react";
import { Link, useLocation } from "react-router-dom";
import { capitalizeLink } from "../../utils/utilFunctions";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    const location = useLocation().pathname;
    const links = [
        "about",
        "contact"
    ];

    return (
        <footer className="">
            hello from footer
            <img src="./logo.png" alt="Logo"></img>
        </footer>
    )
}