import React from "react";
import bg from "../assets/bg.jpg";
import BookButton from "../components/navbar/BookButton";

export default function Home() {







  return (
    <div className="flex flex-col h-full w-full home">
      <div className="relative flex flex-col h-72 bgContainer"   >
        <div class="h-full w-full bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bg})` }} >  
        </div>
        
        <div className="absolute bottom-20 left-0 right-0"> 
          <BookButton />
        </div>
      </div>
      
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
                <button className="rounded-md h-8 w-20 bg-yellow-600 text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50"> Details</button> 
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
                <button className="rounded-md h-8 w-20 bg-yellow-600 text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50"> Details</button> 
              </div>
            </div> 
          </div>
        </div>


      </div>


      <div className="h-60 w-full bg-vuejs-200 flex justify-center items-center about" > 
        <div className="h-52 w-full  bg-blue-200 flex flex-row items-center space-x-2 about-general">
          <div className="h-48 w-96 bg-purple-200 vidoe" >
          <div class="rounded-md h-48 w-96 bg-center bg-cover bg-no-repeat" 
               style={{ backgroundImage: `url(${bg})` }} >  
            </div>

          </div>

          <div className="h-48 w-100">
              <p className="h-auto w-auto  bg-yellow-300 text">   
                At Cod Mountain Fish Co., we prioritize sustainability, ethical fishing practices, and responsible charter boat operations. 
                We firmly believe that protecting our local waters and the fish species we target is of utmost importance. Through our daily operations, we strive to set an example of responsible 
                practices and educate our customers about the significance of sustainable fishing. We are proud to play a role in preserving our precious marine ecosystem for future generations.
              </p>
              <p className="font-bold mt-2"> Read More</p>

          </div>




        </div>

      </div>








      <div className="h-40 bg-red-200 " > Customer Reviews

      </div>

    </div>




  )
}
