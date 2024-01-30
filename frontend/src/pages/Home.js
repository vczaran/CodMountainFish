import React from "react";
import bg from "../assets/bg.jpg";
import fishing from "../assets/fishing.jpg"
import BookButton from "../components/navbar/BookButton";

export default function Home() {







  return (
    <div className="flex flex-col h-full w-full home">
      {/* Top Background picture - might consider change to carousel */}
      <div className="relative flex flex-col h-72 bgContainer"   >
        <div class="h-full w-full bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bg})` }} >  
        </div>
        
        <div className="absolute bottom-20 left-0 right-0"> 
          <BookButton />
        </div>
      </div>
      {/* Mission statement section - need to fix the width of inner text */}
      <div className="flex flex-col items-center justify-center h-30 w-full bg-vuejs-300 missionContainer border-4 border-red-400">
        <div className="flex flex-col items-center justify-center h-26 w-full border-4 border-orange-300" >
          <article class="flex flex-col h-30 w-full items-center border-4 border-pink-500 prose">
            <p class="font-bold text-2xl text-yellow-500"> Cod Mountain Fish Co.! </p>
            <p class="text-white mb-2">Welcome to Cod Mountain Fish Co., where every fishing trip is tailored to your preferences and skill level. 
            Our dedicated crew is here to ensure that your time on the water is not only productive but also enjoyable and filled with excitement.
            </p>

          </article>  
          <BookButton />
        </div>
      </div>

      {/* Trip Tiles - need to add link to trip pages & booking page  */}
      <div className="h-96 flex flex-row items-center justify-evenly border-4 border-blue-500 trips"> 

        {/* placeholder - will need function to populate info below */}
        <div className="flex flex-col h-90 w-96 trip border-4 border-yellow-500">
          <div class="h-90 bg-green-300 group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent">
            <div class="rounded-md h-36 w-full bg-center bg-cover bg-no-repeat" 
               style={{ backgroundImage: `url(${bg})` }} >  
            </div>
            <div className="flex flex-col border-2 rounded-md ">
              <article className="flex flex-col items-center porse">
                <h2 className="text-indigo-600 group-hover:text-gray-900 font-bold text-xl">Longrange(Lingcod) - 6hr</h2>
                <p className="text-indigo-600 group-hover:text-gray-900 ...">$350.00/person </p>
                <p className="text-indigo-500 group-hover:text-gray-500 ...">This charter takes you to the productive waters near Ano Nuevo and Pigeon Point, located north of Santa Cruz. </p>
              </article>
              <div className="flex flex-row items-start justify-evenly h-10">
                <BookButton />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Details</button> 
              </div>
            </div> 
          </div>
        </div>


        <div className="flex flex-col h-80 w-96 trip border-4 border-yellow-500">
          <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent">
            <div class="rounded-md h-36 w-full bg-center bg-cover bg-no-repeat" 
               style={{ backgroundImage: `url(${bg})` }} >  
            </div>
            <div className="flex flex-col border-2 rounded-md ">
              <article className="flex flex-col items-center porse">
                <h2 className="text-indigo-600 group-hover:text-gray-900 font-bold text-xl">Longrange(Lingcod) - 6hr</h2>
                <p className="text-indigo-600 group-hover:text-gray-900 ...">$350.00/person </p>
                <p className="text-indigo-500 group-hover:text-gray-500 ...">This charter takes you to the productive waters near Ano Nuevo and Pigeon Point, located north of Santa Cruz. </p>
              </article>
              <div className="flex flex-row items-start justify-evenly h-10">
                <BookButton />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Details</button> 
              </div>
            </div> 
          </div>
        </div>


      </div>


      {/* About sections - need to add video, link to about page, fix text width */}
      <div className="h-90 w-full  flex flex-col justify-center items-center about" > 
        <div className="h-52 w-full  bg-vuejs-300 flex flex-row items-center space-x-2 about-general">
          <div className="h-48 w-96 bg-purple-200 vidoe" >
          <div class="rounded-md h-48 w-96 bg-center bg-cover bg-no-repeat " 
               style={{ backgroundImage: `url(${bg})` }} >  
            </div>

          </div>

          <div className="h-48 w-full ml-10">
            <h1 className="text-amber-500 text-xl font-bold mb-5">About US</h1>
              <p className="h-auto w-auto text">   
                At Cod Mountain Fish Co., we prioritize sustainability, ethical fishing practices, and responsible charter boat operations. 
                We firmly believe that protecting our local waters and the fish species we target is of utmost importance. Through our daily operations, we strive to set an example of responsible 
                practices and educate our customers about the significance of sustainable fishing. We are proud to play a role in preserving our precious marine ecosystem for future generations.
              </p>
              <p className="font-bold underline  mt-2"> Read More</p>

          </div>
        </div>

        <div className="h-52 w-full   flex flex-row items-center space-x-2 about-captain">
          <div className="h-48 w-100">
            <h1 className="text-amber-500 text-xl font-bold mb-5">The Captain </h1>
              <p className="h-auto w-auto text">   Introducing the Sea Marie, the pride and joy of Cod Mountain Fish Co. This remarkable fishing vessel combines power, comfort, and functionality 
              to deliver an extraordinary fishing experience in the beautiful waters of Santa Cruz. Powered by twin Yamaha 150hp engines, the Sea Marie is ready to take you on thrilling fishing 
              adventures with ease and reliability.
              </p>
              <p className="font-bold underline  mt-2"> Read More</p>

          </div>

          <div className="h-48 w-96 bg-purple-200 vidoe" >
          <div class="rounded-md h-48 w-96 bg-center bg-cover bg-no-repeat " 
               style={{ backgroundImage: `url(${bg})` }} >  
            </div>

          </div>


        </div>

        <div className="h-52 w-full  bg-vuejs-300 flex flex-row items-center space-x-2 about-general">
          <div className="h-48 w-96 bg-purple-200 vidoe" >
          <div class="rounded-md h-48 w-96 bg-center bg-cover bg-no-repeat " 
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
        <div class="h-full w-full bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${fishing})` }} >  
        </div>
      </div>


      {/* customer review */}
      <div>
        <h1 className="font-bold text-2xl m-5"> Hear from our awesome users! </h1>


      </div>

      <div class="flex flex-row items-center justify-between space-x-2 max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg my-5 ">
        <div class="p-5 border-2">
            <div class="font-bold text-xl mb-2" id="name">Shali P.</div>
            <div class="rating mb-4 text-yellow-400" id="rating">★★★★★</div>
            <p class="text-gray-600 text-sm" id="description">Nostrud aute id elit proident veniam ex. Elit enim laborum enim velit laborum anim. Occaecat do non velit sint elit mollit. </p>
        </div>



       
    </div>




    </div>




  )
}
