import React from 'react';
import bg from "../../assets/bg.jpg";


const About = () => {



  return (
    <div class="relative flex bg-clip-border rounded-xl text-gray-700 shadow-md w-full max-w-100 flex-row mx-auto bg-vuejs-200">
        <div
            class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
            src={bg}
            alt="card-image" class="object-cover w-full h-full" />
        </div>

        <div class="p-6">
            <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            About us
            </h4>
            <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            At Cod Mountain Fish Co., we prioritize sustainability, ethical fishing practices, and responsible charter boat operations. We firmly believe that protecting our local waters and 
            the fish species we target is of utmost importance. Through our daily operations, we strive to set an example of responsible practices and educate our customers about the significance 
            of sustainable fishing. We are proud to play a role in preserving our precious marine ecosystem for future generations.
            </p>

            <a href="/about" class="inline-block"><button
                class="flex items-center gap-2 hover:px-2 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button">
                Read More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor"
                stroke-width="2" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                </svg></button></a>
        </div>
    </div>  
  )
}

export default About;