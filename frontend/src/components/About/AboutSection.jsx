import React from 'react';
import bg from "../../assets/bg.jpg";
import captain from "../../assets/captain.jpeg";



const About = () => {

  const settings = {
    // accessibility: true,
    // arrows: true,
    // dots: true, 
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // pauseOnHover: true,
    cssEase: "linear",
  }


  return (
    <>
      {/* About us */}
      <div className="relative flex text-gray-700 justify-center flex-row mx-auto bg-vuejs-300">
          <div
              className="relative w-2/5 lg:w-3/12 m-4 overflow-hidden text-gray-700 bg-white rounded-lg shrink-0">
              <img
              src={bg}
              alt="card-image" className="object-cover w-full h-full rounded-md" />
          </div>

          <div className="p-4 w-3/5 lg:w-8/12">
            
              <h3 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-yellow-500">
              About us
              </h3>
              <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-white">
              At Cod Mountain Fish Co., we prioritize sustainability, ethical fishing practices, and responsible charter boat operations. We firmly believe that protecting our local waters and 
              the fish species we target is of utmost importance. Through our daily operations, we strive to set an example of responsible practices and educate our customers about the significance 
              of sustainable fishing. We are proud to play a role in preserving our precious marine ecosystem for future generations.
              </p>

              <a href="/about" className="inline-block"><button
                  className="flex items-center gap-2 hover:px-2 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                  type="button">
                  Read More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor"
                  strokeWidth="2" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                  </svg></button></a>
          </div>
      </div> 

      {/* About Captain */}
      <div className="relative flex text-gray-700 justify-center flex-row mx-auto bg-white">
          <div className="p-4 w-3/5 lg:w-8/12">
            
              <h3 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-yellow-500">
              About Captain
              </h3>
              <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-grey-700">
              Captain Greg Webb brings over a decade of dedicated experience and a genuine love for fishing to Cod Mountain Fish Co. His journey in the marine industry began as a deckhand on a charter 
              boat in Santa Cruz, California, where he learned the ropes and developed a deep appreciation for the ocean.<br></br>Throughout his career, Captain Greg's passion for fishing led him to continuously 
              expand his knowledge and refine his skills. With each trip, he gained valuable insights into the local fishing grounds and mastered various techniques to ensure a successful and enjoyable 
              experience for his clients.

              </p>

              <a href="/about" className="inline-block"><button
                  className="flex items-center gap-2 hover:px-2 py-3 font-sans text-xs font-bold text-center text-grey-700 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                  type="button">
                  Read More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor"
                  strokeWidth="2" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                  </svg></button></a>
          </div>
          <div
              className="relative h-64 w-2/5 lg:w-3/12 m-4 overflow-hidden text-gray-700 bg-white rounded-lg shrink-0">
              <img
              src={captain}
              alt="card-image" className="object-contain h-full w-full rounded-md" />
          </div>


      </div>  

      {/* About Boat */}
      <div className="relative flex text-gray-700 justify-center flex-row mx-auto bg-vuejs-300">
          <div
              className="relative w-2/5 lg:w-3/12 m-4 overflow-hidden text-gray-700 bg-white rounded-lg shrink-0">
              <img
              src={bg}
              alt="card-image" className="object-cover w-full h-full rounded-md" />
          </div>

          <div className="p-4 w-3/5 lg:w-8/12">
            
              <h3 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-yellow-500">
              About Boat
              </h3>
              <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-white">
              "Introducing the Sea Marie, the pride and joy of Cod Mountain Fish Co. This remarkable fishing vessel combines power, comfort, and functionality to deliver an 
              extraordinary fishing experience in the beautiful waters of Santa Cruz. Powered by twin Yamaha 150hp engines, the Sea Marie is ready to take you on thrilling fishing adventures with 
              ease and reliability."

              </p>

              <a href="/about" className="inline-block"><button
                  className="flex items-center gap-2 hover:px-2 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                  type="button">
                  Read More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor"
                  strokeWidth="2" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                  </svg></button></a>
          </div>
      </div> 


    

  
    </>

  )
}

export default About;