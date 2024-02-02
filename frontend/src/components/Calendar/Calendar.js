import React, { useState, useEffect } from "react";
import { generateDate, months } from "../../utils/calendar";
import cn from "../../utils/cn";
import dayjs from 'dayjs';
import moment from 'moment';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";


const Calendar = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate);
    const [selectedDate, setSelectedDate] = useState(currentDate);
    const [bookings, setBookings] = useState({});
    const [currentDayBookings, setCurrentDayBookings] = useState([]);


    useEffect(() => {
        setCurrentDayBookings(bookings[selectedDate.format('YYYY-MM-DD')] || []);
    }, [bookings, selectedDate]);

    const handleDateClick = (date) => {
        setSelectedDate(date);
        // setCurrentDayBookings(bookings[date.format('YYYY-MM-DD')] || []);
    }

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch('/api/booking/all');
                const data = await response.json();
                console.log("data!!!!!", data)
                const bookingsByDate = data.Booking.Bookings.reduce((acc, booking) => {
                    const date = moment(booking.date).format('YYYY-MM-DD');
                    if (!acc[date]) {
                        acc[date] = [];
                    }
                    acc[date].push(booking);
                    return acc;
                }, {});
                setBookings(bookingsByDate);
                // setCurrentDayBookings(bookingsByDate[selectedDate.format('YYYY-MM-DD')] || []);

            } catch (error) {
                console.error('Failed to fetch bookings:', error);
            }
        };
        fetchBookings();
    }, []);



    console.log("bookings", bookings)
    console.log("currentDayBookings", currentDayBookings)
    console.log("selectedDate", selectedDate)

    const remainingSeats = () => {
        const totalSeats = 6;
        let remainingSeatsAM = totalSeats;
        let remainingSeatsPM = totalSeats;

        currentDayBookings.forEach(booking => {
            if (booking.tripType === 'Tuna') {
                remainingSeatsAM = 0;
                remainingSeatsPM = 0;
            } else if (booking.time === 'am') {
                remainingSeatsAM -= booking.partySize;
            } else if (booking.time === 'pm') {
                remainingSeatsPM -= booking.partySize;
            }
        });

        return { remainingSeatsAM, remainingSeatsPM };

    }
    console.log("remainingSeats", remainingSeats())

    const { remainingSeatsAM, remainingSeatsPM } = remainingSeats();

    const amBookings = currentDayBookings.filter(booking => booking.time === 'am');
    const pmBookings = currentDayBookings.filter(booking => booking.time === 'pm');

    const amTripType = amBookings.length > 0 ? amBookings[0].tripType : null;
    const pmTripType = pmBookings.length > 0 ? pmBookings[0].tripType : null;

    console.log("amTripType", amTripType)
    console.log("amBookings", amBookings)

    return (
        <div>

            <div className="flex justify-center gap-5 ">
                <div className="calendar-box w-[600px] h-[400px]">
                    <div className="flex gap-5 pb-2">
                        <div className="font-semibold">{months[today.month()]}, {today.year()}</div>
                        <div className="flex items-center gap-5">
                            <GrFormPrevious className="w-5 h-5 cursor-pointer" onClick={() => {
                                setToday(today.month(today.month() - 1))
                            }} />
                            <div className="cursor-pointer" onClick={() => {
                                setToday(currentDate)
                            }}>Today</div>
                            <GrFormNext className="w-5 h-5 cursor-pointer" onClick={() => {
                                console.log("next month")
                                setToday(today.month(today.month() + 1))
                            }} />

                        </div>
                    </div>

                    <div className="w-full grid grid-cols-7 text-gray-500">
                        {days.map((day, index) => {
                            return <div className="week-days text-sm h-8 grid place-content-center border" key={index}>{day}</div>
                        })}
                    </div>

                    <div className="w-full h-full grid grid-cols-7">
                        {generateDate(today.month(), today.year()).map(({ date, currentMonth, today }, index) => {
                            const dateBookings = bookings[date.format('YYYY-MM-DD')] || [];
                            return (
                                <div key={index} className="calendar-small-box h-full text-sm border hover:bg-gray-100 transition-all cursor-pointer"
                                    onClick={() => { handleDateClick(date) }}>
                                    <div
                                        className={cn(
                                            currentMonth ? "" : "text-gray-400",
                                            today ? "bg-red-600 text-white" : "",
                                            selectedDate.toDate().toDateString() === date.toDate().toDateString() ? "bg-black text-white" : "",
                                            "h-6 w-6 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                                        )}
                                    >{date.date()}
                                    </div>
                                    <div className="flex flex-col">
                                        {dateBookings.length > 0 && (
                                            dateBookings.map(booking => (
                                                <div key={booking._id}>
                                                    {booking.tripType === 'Tuna' && (
                                                        <div className="flex items-center">
                                                            <img className="object-contain h-6 w-6" src="./tuna.jpeg" alt="tuna" />
                                                            <p className="text-xs">{booking.lastName.substring(0, 8)} - full boat</p>
                                                        </div>
                                                    )}
                                                    {booking.tripType === 'Rockfish' && (
                                                        <div className="flex items-center">
                                                            <img className="object-contain h-6 w-6" src="./rockfish.png" alt="rockfish" />
                                                            <p className="text-xs">{booking.lastName.substring(0, 8)} - x{booking.partySize}</p>
                                                        </div>
                                                    )}
                                                    {booking.tripType === 'Wildlife' && (
                                                        <div className="flex items-center">
                                                            <img className="object-contain h-6 w-6" src="./whale.jpg" alt="whale" />
                                                            <p className="text-xs">{booking.lastName.substring(0, 8)} - x{booking.partySize}</p>
                                                        </div>
                                                    )}
                                                    {booking.tripType === 'Halibut' && (
                                                        <div className="flex items-center">
                                                            <img className="object-contain h-6 w-6" src="./Halibut.webp" alt="halibut" />
                                                            <p className="text-xs">{booking.lastName.substring(0, 8)} - x{booking.partySize}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="side-details-box w-[310px] h-[auto] border p-5">
                    <div className="font-semibold">
                        {selectedDate.toDate().toDateString()}
                    </div>
                    {currentDayBookings.some(booking => booking.tripType === 'Tuna') ? (
                        <>
                            <div className="border rounded-md p-2 mt-2">
                                <div className="flex items-center gap-2">
                                    <img src="./tuna.jpeg" alt="tuna" className="h-10 w-10 object-contain" />
                                    <p>Tuna Trip</p>
                                </div>

                                <div className="flex items-center gap-2 mb-2">
                                    <div className="text-xs border rounded-md px-2 py-1 inline-block ml-5">6 a.m.</div>
                                    <div className="text-xs rounded-md px-3 py-1 inline-block bg-red-500 text-white ">Full Boat</div>
                                    <p className="text-xs">(0 seats left)</p>
                                </div>
                            </div>
                        </>
                    ) : currentDayBookings.length === 0 && !selectedDate.isBefore(dayjs().startOf('day')) ? (
                        <div className="flex-col">
                            <div className="border rounded-md p-2 mt-3">
                                <div className="flex items-center gap-2">
                                    <img src="./rockfish.png" alt="rockfish" className="h-10 w-10 object-contain" />
                                    <p>Rockfish Trip</p>
                                </div>

                                <div className="flex items-center gap-2 mb-2 text-xs">
                                    <div className="border rounded-md px-2 py-1 inline-block ml-5">6 a.m.</div>
                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                    <p className="text-xs">(6 seats left!)</p>
                                </div>

                                <div className="flex items-center gap-2 text-xs">
                                    <button className="border rounded-md px-2 py-1 inline-block ml-5">2 p.m.</button>
                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                    <p className="text-xs">(6 seats left!)</p>
                                </div>
                            </div>
                            <div className="border rounded-md p-2 mt-3">
                                <div className="flex items-center gap-2">
                                    <img src="./Halibut.webp" alt="halibut" className="h-10 w-10 object-contain" />
                                    <p>Halibut Trip</p>
                                </div>

                                <div className="flex items-center gap-2 mb-2 text-xs">
                                    <div className="border rounded-md px-2 py-1 inline-block ml-5">6 a.m.</div>
                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                    <p className="text-xs">(6 seats left!)</p>
                                </div>

                                <div className="flex items-center gap-2 text-xs">
                                    <button className="border rounded-md px-2 py-1 inline-block ml-5">2 p.m.</button>
                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                    <p className="text-xs">(6 seats left!)</p>
                                </div>
                            </div>
                            <div className="border rounded-md p-2 mt-3">
                                <div className="flex items-center gap-2">
                                    <img src="./whale.jpg" alt="whale" className="h-10 w-10 object-contain" />
                                    <p>Wildlife Tour</p>
                                </div>

                                <div className="flex items-center gap-2 mb-2 text-xs">
                                    <div className="border rounded-md px-2 py-1 inline-block ml-5">6 a.m.</div>
                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                    <p className="text-xs">(6 seats left!)</p>
                                </div>

                                <div className="flex items-center gap-2 text-xs">
                                    <button className="border rounded-md px-2 py-1 inline-block ml-5">2 p.m.</button>
                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                    <p className="text-xs">(6 seats left!)</p>
                                </div>
                            </div>
                            <div className="border rounded-md p-2 mt-3">
                                <div className="flex items-center gap-2">
                                    <img src="./tuna.jpeg" alt="tuna" className="h-10 w-10 object-contain" />
                                    <p>Tuna Trip</p>
                                </div>

                                <div className="flex items-center gap-2 mb-2 text-xs">
                                    <div className="border rounded-md px-2 py-1 inline-block ml-5">6 a.m.</div>
                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                    <p className="text-xs">(6 seats left!)</p>
                                </div>
                            </div>

                        </div>
                    ) : (
                        <div className="flex-col">

                            {amTripType && !pmTripType ? (

                                <>
                                    <div className="border rounded-md p-2 mt-3">
                                        <div className="flex items-center gap-2">
                                            <img src="./rockfish.png" alt="rockfish" className="h-10 w-10 object-contain" />
                                            <p>{amTripType} Trip</p>
                                        </div>
                                        {
                                            remainingSeatsAM === 0 ? (
                                                <div className="flex items-center gap-2 mb-2">
                                    <div className="text-xs border rounded-md px-2 py-1 inline-block ml-5">6 a.m.</div>
                                    <div className="text-xs rounded-md px-3 py-1 inline-block bg-red-500 text-white ">Full Boat</div>
                                    <p className="text-xs">(0 seats left)</p>
                                </div>
                                            ) : (
                                                <div className="flex items-center gap-2 mb-2 text-xs">
                                            <div className="border rounded-md px-2 py-1 inline-block ml-5">6 a.m.</div>
                                            <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                            <p className="text-xs">({remainingSeatsAM} seats left!)</p>
                                            </div>
                                            )
                                        }

                                        <div className="flex items-center gap-2 text-xs">
                                            <button className="border rounded-md px-2 py-1 inline-block ml-5">2 p.m.</button>
                                            <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                            <p className="text-xs">(6 seats left!)</p>
                                        </div>
                                        </div>
                                        {
                                            amTripType !== "Rockfish" && (
                                                <div className="border rounded-md p-2 mt-3">
                                                    <div className="flex items-center gap-2">
                                                        <img src="./rockfish.png" alt="rockfish" className="h-10 w-10 object-contain" />
                                                        <p>Rockfish Trip</p>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-xs">
                                                        <button className="border rounded-md px-2 py-1 inline-block ml-5">2 p.m.</button>
                                                        <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                                        <p className="text-xs">(6 seats left!)</p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        {
                                            amTripType !== "Halibut" && (
                                                <div className="border rounded-md p-2 mt-3">
                                                    <div className="flex items-center gap-2">
                                                        <img src="./Halibut.webp" alt="halibut" className="h-10 w-10 object-contain" />
                                                        <p>Halibut Trip</p>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-xs">
                                                        <button className="border rounded-md px-2 py-1 inline-block ml-5">2 p.m.</button>
                                                        <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                                        <p className="text-xs">(6 seats left!)</p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                         {
                                            amTripType !== "Wildlife" && (
                                                <div className="border rounded-md p-2 mt-3">
                                                    <div className="flex items-center gap-2">
                                                        <img src="./whale.jpg" alt="whale" className="h-10 w-10 object-contain" />
                                                        <p>Wildlife Tour</p>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-xs">
                                                        <button className="border rounded-md px-2 py-1 inline-block ml-5">2 p.m.</button>
                                                        <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                                        <p className="text-xs">(6 seats left!)</p>
                                                    </div>
                                                </div>
                                            )
                                        }


                                </>
                            ) : pmTripType && !amTripType ? (
                                <>
                                    <div className="border rounded-md p-2 mt-3">
                                        <div className="flex items-center gap-2">
                                            <img src="./rockfish.png" alt="rockfish" className="h-10 w-10 object-contain" />
                                            <p>{pmTripType} Trip</p>
                                        </div>
                                        <div className="flex items-center gap-2 mb-2 text-xs">
                                            <div className="border rounded-md px-2 py-1 inline-block ml-5">2 p.m.</div>
                                            <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                            <p className="text-xs">({remainingSeatsPM} seats left!)</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs">
                                            <button className="border rounded-md px-2 py-1 inline-block ml-5">6 a.m.</button>
                                            <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                            <p className="text-xs">(6 seats left!)</p>
                                        </div>
                                        </div>
                                        {
                                            pmTripType !== "Rockfish" && (
                                                <div className="border rounded-md p-2 mt-3">
                                                    <div className="flex items-center gap-2">
                                                        <img src="./rockfish.png" alt="rockfish" className="h-10 w-10 object-contain" />
                                                        <p>Rockfish Trip</p>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-xs">
                                                        <button className="border rounded-md px-2 py-1 inline-block ml-5">6 a.m.</button>
                                                        <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                                        <p className="text-xs">(6 seats left!)</p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        {
                                            pmTripType !== "Halibut" && (
                                                <div className="border rounded-md p-2 mt-3">
                                                    <div className="flex items-center gap-2">
                                                        <img src="./Halibut.webp" alt="halibut" className="h-10 w-10 object-contain" />
                                                        <p>Halibut Trip</p>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-xs">
                                                        <button className="border rounded-md px-2 py-1 inline-block ml-5">6 a.m.</button>
                                                        <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                                        <p className="text-xs">(6 seats left!)</p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                         {
                                            pmTripType !== "Wildlife" && (
                                                <div className="border rounded-md p-2 mt-3">
                                                    <div className="flex items-center gap-2">
                                                        <img src="./whale.jpg" alt="whale" className="h-10 w-10 object-contain" />
                                                        <p>Wildlife Tour</p>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-xs">
                                                        <button className="border rounded-md px-2 py-1 inline-block ml-5">6 a.m.</button>
                                                        <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                                        <p className="text-xs">(6 seats left!)</p>
                                                    </div>
                                                </div>
                                            )
                                        }


                                </>
                            ) : amTripType && pmTripType ? (
                                <>
                                <div className="border rounded-md p-2 mt-3">
                                        <div className="flex items-center gap-2">
                                            <img src="./rockfish.png" alt="rockfish" className="h-10 w-10 object-contain" />
                                            <p>{amTripType} Trip</p>
                                        </div>
                                        <div className="flex items-center gap-2 mb-2 text-xs">
                                            <div className="border rounded-md px-2 py-1 inline-block ml-5">6 a.m.</div>
                                            <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                            <p className="text-xs">({remainingSeatsAM} seats left!)</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs">
                                            <button className="border rounded-md px-2 py-1 inline-block ml-5">2 p.m.</button>
                                            <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                            <p className="text-xs">(6 seats left!)</p>
                                        </div>
                                        </div>

                                        <div className="border rounded-md p-2 mt-3">
                                        <div className="flex items-center gap-2">
                                            <img src="./rockfish.png" alt="rockfish" className="h-10 w-10 object-contain" />
                                            <p>{pmTripType} Trip</p>
                                        </div>
                                        <div className="flex items-center gap-2 mb-2 text-xs">
                                            <div className="border rounded-md px-2 py-1 inline-block ml-5">2 p.m.</div>
                                            <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                            <p className="text-xs">({remainingSeatsPM} seats left!)</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs">
                                            <button className="border rounded-md px-2 py-1 inline-block ml-5">6 a.m.</button>
                                            <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                            <p className="text-xs">(6 seats left!)</p>
                                        </div>
                                        </div>

                                </>
                            ) : (
                                <></>
                            )}




                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Calendar;
