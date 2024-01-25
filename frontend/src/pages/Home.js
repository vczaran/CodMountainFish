import React from "react";
import bg from "../assets/bg.jpg";
import BookButton from "../components/navbar/BookButton";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full home space-y-0">
      <div className="relative flex flex-col h-96 bgContainer"   >
        <div class="h-full w-full bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bg})` }} >  
        </div>
        
        <div className="absolute bottom-30 left-0 right-0"> 
          <BookButton />
        </div>
      </div>


      <div className="flex flex-col items-center justify-center h-42 w-100 bg-vuejs-400 missionContainer">
        <div className="flex flex-col items-center justify-center space-y-2 " >
          {/* <article class="h-30 w-100 prose"> */}
            <p class="font-bold text-2xl text-white"> Cod Mountain Fish Co.! </p>
            <p class="text-white">Welcome to Cod Mountain Fish Co., where every fishing trip is tailored to your preferences and skill level. 
            Our dedicated crew is here to ensure that your time on the water is not only productive but also enjoyable and filled with excitement.
            </p>

          {/* </article> */}  
          <BookButton />
        </div>
      </div>

      <div> 
        <p> Trip Types </p>


      </div>



      <div> About US (Short)

      </div>

      <div> About Captain (Short)

      </div>

      <div> About Boat (Short)

      </div>

      <div> Customer Reviews (Short)

      </div>

    </div>




  )
}
