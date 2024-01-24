import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex flex-col items-center">
      <img src="./placeholder.jpg" alt="boaty boat"></img>
      <h1 className="text-center text-teal-600 text-2xl font-bold mt-10 mb-10">Cod Mountain Fish Co.</h1>
      <p className="w-1/2 text-center mb-3">Welcome to Cod Mountain Fish Co., where every fishing trip is tailored to your preferences and skill level. 
        Our dedicated crew is here to ensure that your time on the water is not only productive but also enjoyable 
        and filled with excitement.</p>
      <Link className="bg-cyan-600 text-white active:bg-cyan-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" to="/availability">Book Now</Link>
    </div>
  )
}
