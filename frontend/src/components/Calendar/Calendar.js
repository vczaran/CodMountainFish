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

    const remainingSeats = () => {
        const totalSeats = 6;
        let remainingSeatsAM = totalSeats;
        let remainingSeatsPM = totalSeats;

        currentDayBookings.forEach(booking => {
            if (booking.tripType === 'tuna') {
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

    return (
        <div>

            <div className="flex justify-center gap-5 items-center">
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
                                                    {booking.tripType === 'tuna' && (
                                                        <div className="flex items-center">
                                                            <img className="object-contain h-6 w-6" src="./tuna.jpeg" alt="tuna" />
                                                            <p className="text-xs">{booking.lastName.substring(0, 8)} - full boat</p>
                                                        </div>
                                                    )}
                                                    {booking.tripType === 'rockfish' && (
                                                        <div className="flex items-center">
                                                            <img className="object-contain h-6 w-6" src="./rockfish.png" alt="rockfish" />
                                                            <p className="text-xs">{booking.lastName.substring(0, 8)} - x{booking.partySize}</p>
                                                        </div>
                                                    )}
                                                    {booking.tripType === 'wildlife' && (
                                                        <div className="flex items-center">
                                                            <img className="object-contain h-6 w-6" src="./whale.jpeg" alt="whale" />
                                                            <p className="text-xs">{booking.lastName.substring(0, 8)} - x{booking.partySize}</p>
                                                        </div>
                                                    )}
                                                    {booking.tripType === 'halibut' && (
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

                {/* <div className="side-details-box w-[300px] h-[400px] border p-5 mt-[110px]">
                    <div className="font-semibold">
                        {selectedDate.toDate().toDateString()}
                    </div>
                    <p>Other info trip info????</p>
                </div> */}
                <div className="side-details-box w-[310px] h-[400px] border p-5 mt-[110px]">
                    <div className="font-semibold">
                        {selectedDate.toDate().toDateString()}
                    </div>
                    {currentDayBookings.some(booking => booking.tripType === 'tuna') ? (
                        <>
                            <div className="flex">
                            <img src="./tuna.jpeg" alt="tuna" className="h-10 w-10 object-contain"/>
                            <p>Tuna Trip</p>
                            </div>
                            <div className="flex">
                            <button className="bg-gray-200 rounded-full px-2 py-1 inline-block">6 a.m.</button>
                            <p>(0 seats available)</p>
                            </div>
                            <div className="bg-gray-200 rounded-full px-2 py-1 inline-block">full boat</div>
                        </>
                    ) : currentDayBookings.length === 0 ? (
                        <>
                        <div className="border rounded-md p-2">
                            <div className="flex items-center gap-2">
                            <img src="./rockfish.png" alt="rockfish" className="h-10 w-10 object-contain"/>
                            <p>Rockfish Trip</p>
                            </div>

                            <div className="flex items-center gap-2 mb-1">
                            <div className="border rounded-md px-2 py-1 inline-block ml-5">6 a.m.</div>
                            <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                            <p className="text-xs">(6 seats left!)</p>
                            </div>

                            <div className="flex items-center gap-2">
                            <button className="border rounded-md px-2 py-1 inline-block ml-5">2 p.m.</button>
                            <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                            <p className="text-xs">(6 seats left!)</p>
                            </div>
                        </div>
                            <img src="./halibut.jpeg" alt="halibut" />
                            <p>Halibut Trip</p>
                            {/* Add similar buttons and text for the Halibut and Wildlife trips */}
                        </>
                    ) : (
                        <></>
                        // Add your condition and rendering for a trip with a morning charter here
                    )}
                </div>
            </div>
        </div>
    )
}

export default Calendar;
