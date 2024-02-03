import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex flex-col items-center">
      <img className="w-full h-[400px]" src="./Photos/cover-boat.jpg" alt="boat"></img>
      <h1 className="text-center text-teal-600 text-2xl font-bold mt-10 mb-10">Cod Mountain Fish Co.</h1>
      <p className="w-1/2 text-center mb-3">Welcome to Cod Mountain Fish Co., where every fishing trip is tailored to your preferences and skill level. 
        Our dedicated crew is here to ensure that your time on the water is not only productive but also enjoyable 
        and filled with excitement.</p>
      <Link className="bg-cyan-600 text-white active:bg-cyan-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md hover:underline outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" to="/availability">Book Now</Link>
      <div className="bg-cyan-600 grid grid-cols-2 gap-2 w-full mt-10 text-white">
        <img src="./Photos/fam.jpeg" alt="family"></img>
        <div className="m-10 space-y-4">
          <h1 className="text-amber-500 text-xl font-bold m-5">About Us</h1>
          <p>We are a premier charter fishing company located in Santa Cruz, California, offering unforgettable guided fishing tours of the beautiful Monterey Bay. 
          Founded by Greg Webb, a dedicated fisherman and seasoned captain, Cod Mountain Fish Co. is committed to providing an exceptional fishing experience for anglers 
          of all skill levels.</p>
          <p>At Cod Mountain Fish Co., we prioritize sustainability, ethical fishing practices, and responsible charter boat operations. We firmly believe that protecting our 
          local waters and the fish species we target is of utmost importance. Through our daily operations, we strive to set an example of responsible practices and educate 
          our customers about the significance of sustainable fishing. We are proud to play a role in preserving our precious marine ecosystem for future generations.</p>
          <p>What sets Cod Mountain Fish Co. apart is our unwavering commitment to delivering a personalized fishing experience. Whether you're a novice angler looking to 
          learn the ropes or a seasoned pro seeking an exciting challenge, our team will cater to your specific needs and desires. Step aboard our 2006 Parker 2520 XLD, 
          equipped with top-of-the-line tackle and gear from industry-leading brands. Enjoy the comfort of our heated cabin and have control over the music that sets the 
          tone for your day of fishing. We provide ample cold storage for your drinks and food, as well as sufficient space to hold your well-earned catch.</p>
          <p>Thank you for considering Cod Mountain Fish Co. for your next fishing excursion. We invite you to join us on an unforgettable journey into the abundant waters of the 
            Monterey Bay. Let's make a memory, pull on some fish, and have a good time doing it!</p>
        </div>
        <div className="m-10 space-y-4">
          <h1 className="text-amber-500 text-xl m-5 font-bold">Trip Types</h1>
          <p> We offer a range of exciting trips tailored to different fishing preferences. Below are the trip types we offer, along with the details and rates. AM trips leave at 6am, PM trips at 3pm:</p>
          <h3 className="underline">Rockfish Trip (AM or PM):</h3>
          <ul className="list-disc ml-5">
            <li>Targeting the best-available rockfish species, our expertise ensures you fish in the most productive areas, 
              including deepwater rock fishing zones.</li>
            <li>Duration: Up to 6 hours.</li>
            <li>Price: $300 per person.</li>
          </ul>
          <h3 className="underline">Halibut Trip (AM or PM):</h3>
          <ul className="list-disc ml-5">
            <li>Our focused approach in the coastal waters maximizes your chances of catching halibut, a highly sought-after species.</li>
            <li>Duration: Up to 6 hours.</li>
            <li>Price: $300 per person.</li>
          </ul>
          <h3 className="underline">Tuna Charter (Seasonal,  All Day):</h3>
          <ul className="list-disc ml-5">
            <li>A specialized full-day trip to prime tuna fishing locations during peak season. Our knowledge guides us to the ideal spots for tuna fishing.</li>
            <li>Duration: Up to 12 hours.</li>
            <li>Price: $2500 for the boat, accommodating any party size up to 6 guests.</li>
          </ul>
          <h3 className="underline">Wildlife Tour (AM or PM):</h3>
          <ul className="list-disc ml-5">
            <li>An tour along the Santa Cruz coastline, offering views of diverse marine life in their natural setting.</li>
            <li>Duration: 4 hours.</li>
            <li>Price: $250 per person.</li>
          </ul>
          <Link className=" bg-amber-600 text-white active:bg-amber-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md hover:underline outline-none focus:outline-none ease-linear transition-all duration-150" to="/availability">Book Now</Link>
        </div>
        <img src="./Photos/trip.png" alt="boat"></img>
        <p className="m-10">Please note that all our rates are subject to change, and availability may vary based on the season and demand. We strive to provide exceptional
           service and ensure an unforgettable fishing experience for every charter.</p>
        <p className="m-10">For more information or to make a booking, please visit our <Link className="underline" to="/availability">Booking</Link> page or contact our team directly. We are here to assist you and answer any questions you may have.
        Important Note: It's essential to regularly check our website and communicate with us for the most up-to-date pricing, trip availability, and any special offers or promotions that may be available.</p>
      </div>
    </div>
  )
}
