import React from "react";
import { Link, useLocation } from "react-router-dom";
import { capitalizeLink } from "../../utils/utilFunctions";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Navigation() {
  const location = useLocation().pathname;
  const links = [
    "about",
    "availability",
    "trip-info",
    "fish-report",
    "captain-and-vessel",
    "recipes",
    "contact",
  ];
  console.log(location);
  return (
    <nav className="flex justify-between mt-3 mx-10 items-center">
      <Link className="" to={"/"}>
        <img className="object-contain h-20 w-20" src="./logo.png" alt="Logo"></img>
      </Link>
      <div className="flex gap-10 items-center">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link}
            className={`${location === "/" + link ? "underline" : "hover:underline"}`}
          >
            {capitalizeLink(link)}
          </Link>
        ))}
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/Codmountain"
            className="text-4xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/codmountainfishco"
            className="text-4xl"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
}
