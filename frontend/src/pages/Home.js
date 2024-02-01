import React from "react";
import bg from "../assets/bg.jpg";
import fishing from "../assets/fishing.jpg"
import BookButton from "../components/navbar/BookButton";
import Review from "../components/Review/Review.jsx";
import Trip from "../components/Trip/Trip.jsx";

export default function Home() {







  return (
    <div className="flex flex-col h-full w-full home">
      {/* Top Background picture - might consider change to carousel */}


      <div className="relative flex flex-grow flex-col h-72 bgContainer"   >
        <div className="h-full w-full bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bg})` }} >  
        </div>
        
        {/* <div className="absolute bottom-20 left-0 right-0"> 
        </div> */}
      </div>

      {/* Mission statement section - need to fix the width of inner text */}
      <div className="flex flex-grow h-30 w-full bg-vuejs-300 missionContainer">
        <div className="p-8 flex flex-col flex-grow items-center justify-center h-26 mx-auto">   
          <article className="flex flex-col h-30 w-11/12 md:w-3/4 lg:w-1/2 items-center p-1">
            <h1 className="font-bold text-2xl text-yellow-500">Cod Mountain Fish Co.!</h1>
            <p className="text-white overflow-ellipsis overflow-hidden flex-grow m-4">
              Welcome to Cod Mountain Fish Co., where every fishing trip is tailored to your preferences and skill level. Our dedicated crew is here to ensure that 
              your time on the water is not only productive but also enjoyable and filled with excitement.Welcome to Cod Mountain Fish Co., where every fishing trip is tailored to your preferences and skill level. Our dedicated crew is here to ensure that 
              your time on the water is not only productive but also enjoyable and filled with excitement. 
            </p>
          </article>  

          <BookButton />
        </div>

      </div>


      {/* Trip Card - need to link */}
      <div>
        <Trip />       
      </div>

      {/* About sections - need to add video, link to about page, fix text width */}
      <div className="h-90 w-full flex flex-col justify-center items-center about" > 
        <div className="h-52 w-full p-24 bg-vuejs-300 flex flex-row items-center space-x-4 about-general">
          <div className="h-48 w-96 bg-purple-200 vidoe" >
          <div className="rounded-md h-48 w-96 bg-center bg-cover bg-no-repeat " 
               style={{ backgroundImage: `url(${bg})` }} >  
            </div>

          </div>

          <div className="h-48 w-full">
            <h1 className="text-amber-500 text-xl font-bold mb-5 ">About US</h1>
              <p className="h-auto w-auto text">   
                At Cod Mountain Fish Co., we prioritize sustainability, ethical fishing practices, and responsible charter boat operations. 
                We firmly believe that protecting our local waters and the fish species we target is of utmost importance. Through our daily operations, we strive to set an example of responsible 
                practices and educate our customers about the significance of sustainable fishing. We are proud to play a role in preserving our precious marine ecosystem for future generations.
              </p>
              <p className="font-bold underline  mt-2"> Read More</p>

          </div>
        </div>

        <div className="h-52 w-full p-24  flex flex-row items-center space-x-4 about-captain">
          <div className="h-48 w-100">
            <h1 className="text-amber-500 text-xl font-bold mb-5">The Captain </h1>
              <p className="h-auto w-auto text">   Introducing the Sea Marie, the pride and joy of Cod Mountain Fish Co. This remarkable fishing vessel combines power, comfort, and functionality 
              to deliver an extraordinary fishing experience in the beautiful waters of Santa Cruz. Powered by twin Yamaha 150hp engines, the Sea Marie is ready to take you on thrilling fishing 
              adventures with ease and reliability.
              </p>
              <p className="font-bold underline  mt-2"> Read More</p>

          </div>

          <div className="h-48 w-96 bg-purple-200 vidoe" >
          <div className="rounded-md h-48 w-96 bg-center bg-cover bg-no-repeat " 
               style={{ backgroundImage: `url(${bg})` }} >  
            </div>

          </div>


        </div>

        <div className="h-52 w-full p-24 bg-vuejs-300 flex flex-row items-center space-x-4 about-general">
          <div className="h-48 w-96 bg-purple-200 vidoe" >
          <div className="rounded-md h-48 w-96 bg-center bg-cover bg-no-repeat " 
               style={{ backgroundImage: `url(${bg})` }} >  
            </div>

          </div>

          <div className="h-48 w-100">
            <h1 className="text-amber-500 text-xl font-bold mb-5">The Boat</h1>
              <p className="h-auto w-auto text">   
                At Cod Mountain Fish Co., we prioritize sustainability, ethical fishing practices, and responsible charter boat operations. 
                We firmly believe that protecting our local waters and the fish species we target is of utmost importance. Through our daily operations, we strive to set an example of responsible 
                practices and educate our customers about the significance of sustainable fishing. We are proud to play a role in preserving our precious marine ecosystem for future generations.
              </p>
              <p className="font-bold underline  mt-2"> Read More</p>

          </div>
        </div>


      </div>

      {/* bottom bg */}

      <div className="flex flex-col h-80 bgContainer"   >
        <div className="h-full w-full bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${fishing})` }} >  
        </div>
      </div>


      {/* customer review */}
      <div>
        <h1 className="font-bold text-2xl p-2"> Hear from our awesome users! </h1>

      </div>

      <div className="p-4 ">
        <Review />

      </div>







    </div>




  )
}
