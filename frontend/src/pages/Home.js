import React from "react";
import bg from "../assets/bg.jpg";

export default function Home() {
  return (
    <div className="h-96  bg-green-600 home">
    <div className="h-96 bgContainer"   >
      <div class="h-96 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bg})` }} >  </div>
    </div>


    <div className="h-40 w-90 missionContainer">
      <div className="h-20 textContainer">
        <article class="h-30 w-100 prose">
          <h1> Welcome to Cod Mountain Fish Co.! </h1>
          <p>We are a premier charter fishing company located in Santa Cruz, California, offering unforgettable guided fishing tours of the beautiful Monterey Bay. Founded by Greg Webb, a dedicated fisherman and seasoned captain, Cod Mountain Fish Co. is committed to providing an exceptional fishing experience for anglers of all skill levels. 
          </p>
        </article>
      </div>


      <div className="h-20 w-10 border-3 border-purple-300 buttonContainer">
        <button className="h5 w-5 border-3 border-red-600 bg-white-600"></button>

      </div>


    </div>




  </div>




  )
}
