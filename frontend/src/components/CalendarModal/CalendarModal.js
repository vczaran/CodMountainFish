import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { GoArrowLeft } from "react-icons/go";

export default function CalendarModal({ isModalOpen, setIsModalOpen, selectedBooking }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [partySize, setPartySize] = useState(0);
    const [fullBoat, setFullBoat] = useState(false);
    const [selectedSeats, setSelectedSeats] = useState(0);

    console.log("party size", partySize)

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isModalOpen]);

    const tripPrices = {
        "Rockfish": 300,
        "Halibut": 300,
        "Tuna": 2500,
        "Wildlife": 250,
    }

    const fullBoatPrice = selectedBooking ? tripPrices[selectedBooking.tripType] * 6 : 0;

    if (!isModalOpen) return null;
    console.log("selected booking!!!", selectedBooking)
    console.log("full boat? ", fullBoat)

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
        <div className="fixed top-0 left-0 flex items-start justify-center h-screen w-screen bg-opacity-50 bg-slate-900 overflow-y-auto">
        <div className="border mx-40 my-[20px] bg-white h-[auto] w-[100%] flex flex-col py-5 rounded-md">
                <div className="flex justify-between px-5">
                    <button className="w-auto flex justify-center text-sm" onClick={() => setIsModalOpen(false)}><GoArrowLeft className="text-xl pr-2 w-auto" />Go back to calendar</button>
                    <button className="w-5 flex justify-center " onClick={() => setIsModalOpen(false)}><IoMdClose className="text-xl" /></button>
                </div>

                <div className="flex justify-center gap-5 mt-5 mb-5 py-10 border-y-[1px] border-slate-200">
                    <img src="./rockfish-guys.jpeg" alt="rockfish-guys" className="h-[200px] w-[150px] object-contain" />

                    <div className="flex-col">
                        <div className="text-gray-500 text-sm pt-[20px]">You're booking:</div>
                        <div className="text-lg font-semibold text-teal-500">{selectedBooking.tripType} Trip </div>
                        <div className="text-sm pb-[20px]">{selectedBooking.date} @ {selectedBooking.time}</div>

                        <div className="flex gap-6">
                            <div className="border border-slate-300 flex w-[250px] justify-between rounded-sm">
                                <div className="flex">
                                    <select
                                        className={`px-2 w-auto ${fullBoat ? 'bg-slate-200' : 'bg-teal-500'}`}
                                        value={fullBoat ? 0 : selectedSeats}
                                        onChange={(e) => setSelectedSeats(e.target.value)}
                                        disabled={fullBoat} // Disable the select element if fullBoat is true
                                    >
                                        <option value={0}>0</option> {/* Add an option with the value of 0 */}
                                        {[...Array(selectedBooking.seatsOpen)].map((_, i) =>
                                            <option key={i} value={i + 1}>{i + 1}</option>
                                        )}
                                    </select>
                                    <div className="pl-2 py-[2px] border-l-[1px] border-slate-300">
                                        <div className="">People</div>
                                        <div className="text-xs">(${tripPrices[selectedBooking.tripType]} per person)</div>
                                    </div>
                                </div>
                                <div className="pr-[15px] py-[2px]">
                                    {fullBoat ? '$0' : `$${tripPrices[selectedBooking.tripType] * (selectedSeats ? Number(selectedSeats) : 1)}`}
                                </div>
                            </div>
                            {
                                selectedBooking.seatsOpen === 6 && (
                                    <div className="border border-slate-300 flex w-[250px] justify-between rounded-sm px-[15px] py-[2px]">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id="fullBoat"
                                                name="boatOption"
                                                checked={fullBoat}
                                                onChange={(e) => {
                                                    setFullBoat(e.target.checked);
                                                    if (e.target.checked) {
                                                        setSelectedSeats(0); // Set selectedSeats to 0 when the checkbox is checked
                                                    }
                                                }}
                                                className="form-checkbox rounded-full text-blue-500"
                                            />
                                            <div>
                                                <label htmlFor="fullBoat" className="ml-2">Private Charter</label>
                                                <div className="text-xs pl-2">(up to 6 people)</div>
                                            </div>
                                        </div>
                                        <div>${fullBoatPrice}</div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

                {
                    fullBoat || selectedSeats > 0 ? (
                        <div className="py-[10px]">
                            <form className="pb-[10px] max-w-sm mx-auto flex flex-col" onSubmit={handleSubmit}>
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
                                <button type="submit" className="text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                            </form>
                        </div>
                    ) : (
                        <></>
                    )
                }
            </div>
        </div>
    );
}
