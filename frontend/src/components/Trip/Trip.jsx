import React from 'react';
import bg from '../../assets/bg.jpg';
import { dataTrips } from '../../assets/dataTrip';
import BookButton from '../navbar/BookButton';

const Trip = () => {
  return (


    <div className="rounded overflow-hidden shadow-lg flex flex-row items-center justify-center p-6 space-x-4">

        {dataTrips.map((trip, index) => (
            <div key={index} className='border-2 rounded-md '> 
                <div className="rounded-md h-48 w-full bg-center bg-cover bg-no-repeat" 
                    style={{ backgroundImage: `url(${bg})` }} >  
                </div>
                <div className="px-6 py-4 group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent">
                    <div className="mb-2 text-indigo-600 group-hover:text-gray-900 font-bold text-xl">
                        {trip.title}
                    </div>

                    <p className="text-indigo-600 group-hover:text-gray-900 ...">
                    {trip.description}
                    </p>
               
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> 
                            <BookButton /> 
                        </span>

                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Details</button> 
                        </span>
                    </div>
             </div>
            </div>
        ))}


    </div>
  );
}

export default Trip;

