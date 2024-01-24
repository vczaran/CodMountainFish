import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <img src="./placeholder.jpg" alt="boaty boat"></img>
      <h1 className="text-center text-teal-600 text-2xl font-bold mt-10 mb-10">Cod Mountain Fish Co.</h1>
      <p className="ml-5 mr-5 text-center">Welcome to Cod Mountain Fish Co., where every fishing trip is tailored to your preferences and skill level. 
        Our dedicated crew is here to ensure that your time on the water is not only productive but also enjoyable 
        and filled with excitement.</p>
      <Link className="text-center align-middle" to="/availability">Book Now</Link>
    </>
  )
}
