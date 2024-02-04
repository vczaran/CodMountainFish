import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function CalendarModal({ isModalOpen, setIsModalOpen, selectedBooking }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [people, setPeople] = useState(0);

    const tripPrices = {
        "Rockfish": "$300",
        "Halibut": "$300",
        "Tuna": "$2500",
        "Wildlife": "$250",
    }

    if (!isModalOpen) return null;
    console.log("selected booking!!!", selectedBooking)

    const handleSubmit = (event) => {
        event.preventDefault();

        // const bookingData = {
        //     firstName,
        //     lastName,
        //     phoneNumber,
        //     email,
        //     date: selectedBooking.date,
        //     time: selectedBooking.time,
        //     tripType: selectedBooking.tripType,
        //     seatsOpen: selectedBooking.seatsOpen
        // };

        // fetch('/api/bookings', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(bookingData),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Success:', data);
        //     // Close the modal and clear the form
        //     setIsModalOpen(false);
        //     setFirstName("");
        //     setLastName("");
        //     setPhoneNumber("");
        //     setEmail("");
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        // });
    };

    return (
        <div className="fixed top-0 left-0 flex items-center justify-center h-screen w-screen bg-opacity-50 bg-slate-900 ">
            <div className="border mx-40 bg-white h-[auto] w-[100%] flex flex-col justify-center p-10 rounded-md">
                <div className="flex justify-end">
                    <button className="w-5 flex justify-center " onClick={() => setIsModalOpen(false)}><IoMdClose className="text-xl" /></button>
                </div>
                <div className="flex justify-center gap-10 bg-blue-400 mt-5">
                    <img src="./rockfish-guys.jpeg" alt="rockfish-guys" className="bg-blue-500 h-[200px] w-[150px] object-contain" />

                    <div>
                        <div className="pb-10">You are booking a {selectedBooking.tripType} Trip for {selectedBooking.date} at {selectedBooking.time}.</div>
                        <div className="border flex">
                            <select className="w-9">
                                {[...Array(6)].map((_, i) =>
                                    <option key={i} value={i + 1}>{i + 1}</option>
                                )}
                            </select> People
                        <div>{tripPrices[selectedBooking.tripType]}</div>
                        </div>
                    </div>

                </div>

                {/* <form className="max-w-sm mx-auto flex flex-col" onSubmit={handleSubmit}>
    <div className="mb-5">
        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
        <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required />
    </div>
    <div className="mb-5">
        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
        <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required />
    </div>
    <div className="mb-5">
        <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
        <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number" required />
    </div>
    <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
    </div>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form> */}

            </div>
        </div>
    );
}
