import React from "react";
import bg from "../assets/bg.jpg";
import BookButton from "../components/navbar/BookButton";

export default function Home() {







  return (
    <div className="flex flex-col h-full w-full home space-y-0 ">
      <div className="relative flex flex-col h-96 bgContainer"   >
        <div class="h-full w-full bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bg})` }} >  
        </div>
        
        <div className="absolute bottom-30 left-0 right-0"> 
          <BookButton />
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center h-30 w-100 bg-vuejs-300 missionContainer">
        <div className="flex flex-col items-center justify-center space-y-2 " >
          <article class="w-100 prose">
            <p class="font-bold text-2xl text-yellow-500"> Cod Mountain Fish Co.! </p>
            <p class="text-white">Welcome to Cod Mountain Fish Co., where every fishing trip is tailored to your preferences and skill level. 
            Our dedicated crew is here to ensure that your time on the water is not only productive but also enjoyable and filled with excitement.
            </p>

          </article>  
          <BookButton />
        </div>
      </div>

      <div className="h-80 flex flex-row items-center justify-around trips"> 

        {/* placeholder - will need function to populate info below */}
        <div className="flex flex-col h-80 w-96 trip mt-4">
          <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent">
            <div class="rounded-md h-full w-full bg-center bg-cover bg-no-repeat" 
               style={{ backgroundImage: `url(${bg})` }} >  
            </div>
            <div className="flex flex-col border-2 rounded-md ">
              <article className="porse">
                <h2 className="text-indigo-600 group-hover:text-gray-900 font-bold text-xl">Longrange(Lingcod)</h2>
                <p className="text-indigo-600 group-hover:text-gray-900 ...">6 hours @ $350.00 </p>
                <p className="text-indigo-500 group-hover:text-gray-500 ...">This charter takes you to the productive waters near Ano Nuevo and Pigeon Point, located north of Santa Cruz. </p>
              </article>
              <div className="flex flex-row items-start justify-evenly h-14">
                <BookButton />
                <button className="rounded-md h-10 w-20 bg-yellow-600 text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50"> Details</button> 
              </div>
            </div> 
          </div>
        </div>



      </div>



      <div> About US (Short)

      </div>

      <div> About Captain (Short)

      </div>

      <div> About Boat (Short)

      </div>

      <div> Customer Reviews

      </div>

    </div>




  )
}
