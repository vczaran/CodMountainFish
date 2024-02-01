import React from 'react';
import bg from '../../assets/bg.jpg';
import { dataTrips } from '../../assets/dataTrip';
import BookButton from '../navbar/BookButton';
import { useNavigate } from "react-router-dom";

const Trip = () => {
    let navigate = useNavigate();


  return (


    <div className="p-8 grid gird-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">

        {dataTrips.map((trip) => (
            <div key={trip.id} className='flex flex-col border-2 rounded-xl mx-auto overflow-hidden group hover:bg-white hover:shadow-xl'> 
                {/* trip images */}
                <div className="flex-shrink-0 h-48  bg-center bg-cover bg-no-repeat" alt="card-image"

                    style={{ backgroundImage: `url(${trip.photo})` }} >  
                </div>

                {/* trip info */}
                <div className="flex flex-col flex-grow px-6 py-4 antialiased leading-snug ">
                    <div className="mb-2 text-grey-900 font-bold text-xl group-hover:text-vuejs-300">
                        {trip.title} - {trip.duration}hr
                    </div>

                    <p className="text-grey-600 flex-grow group-hover:text-vuejs-300">
                        Price: ${trip.price} <br></br>  
                        Max Capacity: {trip.capacity}
                    </p>

                    <p className="text-grey-300 overflow-ellipsis overflow-hidden flex-grow mt-2 group-hover:text-vuejs-300">
                        {trip.description}
                    </p>
               
                    <div className="flex flex-row items-center justify-evenly mt-2">
                        <span className=""> 
                            <BookButton /> 
                        </span>
                        <span className="">
                            <button 
                            onClick={() => navigate('/trip-info')}
                             className=" 
                             hover:bg-vuejs-400  
                             text-vuejs-300 hover:text-white 
                               font-bold 
                               py-2 
                               px-4 
                               rounded-md 
                               border-2"
                            > 
                                Details

                            </button> 
                        </span>
                    </div>
             </div>
            </div>
        ))}


    </div>
  );
}

export default Trip;

