import React from 'react';
import { Link } from 'react-router-dom';

export default function CaptainAndVessel() {
  return (
    <div className='grid grid-cols-2 gap-5 w-full mt-10'>
      <div className='bg-cyan-600 text-white space-y-4'>
        <h1 className="text-amber-500 text-xl font-bold m-5">About the Captain</h1>
        <p className='ml-5'>Captain Greg Webb brings over a decade of dedicated experience and a genuine love for fishing to Cod Mountain Fish Co. 
          His journey in the marine industry began as a deckhand on a charter boat in Santa Cruz, California, where he learned the 
          ropes and developed a deep appreciation for the ocean.</p>
        <p className='ml-5'>Throughout his career, Captain Greg's passion for fishing led him to continuously expand his knowledge and refine his skills. 
          With each trip, he gained valuable insights into the local fishing grounds and mastered various techniques to ensure a successful
          and enjoyable experience for his clients.</p>
        <p className='ml-5'>As the owner and operator of Cod Mountain Fish Co., Captain Greg remains committed to providing exceptional service and memorable 
          fishing charters. He values sustainability, ethical practices, and responsible fishing, striving to make a positive impact on the 
          industry and the local marine ecosystem.</p>
        <p className='ml-5'>When you choose to embark on a fishing adventure with Captain Greg and Cod Mountain Fish Co., you can trust that you're in the hands of a 
        captain who genuinely cares about your experience. His commitment to safety, professionalism, and making lasting memories ensures that your 
        time on the water will be filled with excitement, relaxation, and the thrill of reeling in your catch.</p>
      </div>
      <img className="bg-cyan-600" src="./Photos/cap.jpeg" alt="Captain"></img>
      <img src="./Photos/boat.png" alt="SeaMarie"></img>
      <div className='mt-10 mb-10 space-y-4'>
        <h1 className="text-sky-500 text-xl font-bold m-5">Sea Marie</h1>
        <p>Introducing the Sea Marie, the pride and joy of Cod Mountain Fish Co. This remarkable fishing vessel combines power, comfort, and functionality 
          to deliver an extraordinary fishing experience in the beautiful waters of Santa Cruz. Powered by twin Yamaha 150 horsepower engines, the Sea Marie is ready 
          to take you on thrilling fishing adventures with ease and reliability.</p>
        <p>The Sea Marie boasts an expansive deck, providing plenty of space for fishing enthusiasts to move around and cast their lines. With a well-thought-out 
          deck layout, anglers can enjoy unrestricted access to prime fishing spots, ensuring an optimal fishing experience. The deck's generous size also allows 
          for multiple anglers to fish simultaneously, making it an ideal choice for group excursions.</p>
        <p>Equipped with state-of-the-art fishing gear and tackle, the Sea Marie sets the stage for a successful day on the water. Captain Greg ensures that only 
          the finest rods, reels, and equipment are provided, ensuring that you have everything you need to reel in the catch of a lifetime. From experienced anglers 
          to beginners, the Sea Marie is well-equipped to accommodate anglers of all skill levels.</p>
        <p>Safety is a top priority aboard the Sea Marie. In addition to its powerful engines, the vessel is equipped with a comprehensive range of safety features, 
          including life jackets, first aid kits, and communication devices. Captain Greg's dedication to passenger safety ensures that you can embark on your fishing 
          journey with peace of mind, knowing that every precaution has been taken.</p>
        <Link className="bg-cyan-600 text-white active:bg-cyan-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md hover:underline outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" to="/availability">Book Now</Link>
      </div>
    </div>
  )
}
