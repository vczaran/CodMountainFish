import React, { useState, useEffect } from "react";
import { generateDate, months } from "../../utils/calendar";
import cn from "../../utils/cn";
import dayjs from 'dayjs';
import moment from 'moment';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import CalendarModal from "../CalendarModal/CalendarModal";




const Calendar = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate);
    const [selectedDate, setSelectedDate] = useState(currentDate);
    const [bookings, setBookings] = useState({});
    const [currentDayBookings, setCurrentDayBookings] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [refresh, setRefresh] = useState(false);


    useEffect(() => {
        setCurrentDayBookings(bookings[selectedDate.format('YYYY-MM-DD')] || []);
    }, [bookings, selectedDate]);

    const handleDateClick = (date) => {
        setSelectedDate(date);
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
            } catch (error) {
                console.error('Failed to fetch bookings:', error);
            }
        };
        fetchBookings();
    }, [refresh]);



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
    const tripImages = {
        'Tuna': './tuna.jpeg',
        'Rockfish': './rockfish.png',
        'Wildlife': './whale.jpg',
        'Halibut': './Halibut.webp'
    };

    const openModalWithBooking = (date, time, tripType, seatsOpen) => {
        console.log("booking details~~~~~~", date, time, tripType, seatsOpen)
        const booking = {
            date: date.format('ddd MMM DD YYYY'),
            time,
            tripType,
            seatsOpen
        };
        console.log("booking details", booking)
        setIsModalOpen(true);
        setSelectedBooking(booking);
    };

    return (
        <div>
            <div className="border border-teal-500 w-[300px] ml-[85px] h-[auto] mb-5 rounded-md">
                <div className="pl-3 p-1 font-semibold bg-teal-500">Trip Types</div>
                <div className="border-t text-sm pl-3 p-1">
                    <div className="flex items-center gap-2">
                        <img src="./rockfish.png" alt="rockfish" className="h-8 w-10 object-contain" />
                        <div className="">Rockfish</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="./Halibut.webp" alt="halibut" className="h-8 w-10 object-contain" />
                        <div>Halibut</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="./tuna.jpeg" alt="tuna" className="h-8 w-10 object-contain" />
                        <div>Tuna</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="./whale.jpg" alt="whale" className="h-8 w-10 object-contain" />
                        <div>Wildlife Tour</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-5 ">
                <div className="calendar-box w-[650px] h-[auto]">
                    <div className="flex gap-5 bg-teal-500 border border-teal-500 justify-center p-1">
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
                            return <div className="week-days text-sm h-8 grid place-content-center border-[0.5px] border-teal-500 bg-slate-200" key={index}>{day}</div>
                        })}
                    </div>

                    <div className="w-full h-[auto] grid grid-cols-7">
                        {generateDate(today.month(), today.year()).map(({ date, currentMonth, today }, index) => {
                            const dateBookings = bookings[date.format('YYYY-MM-DD')] || [];
                            const amBookings = dateBookings.filter(booking => booking.time === 'am');
                            const pmBookings = dateBookings.filter(booking => booking.time === 'pm');
                            const amTripType = amBookings.length > 0 ? amBookings[0].tripType : null;
                            const pmTripType = pmBookings.length > 0 ? pmBookings[0].tripType : null;

                            const remainingSeatsAM = amBookings.reduce((total, booking) => total - booking.partySize, 6);
                            const remainingSeatsPM = pmBookings.reduce((total, booking) => total - booking.partySize, 6);

                            return (
                                <div key={index} className="calendar-small-box min-h-[60px] text-sm border-[0.5px] border-teal-500 hover:bg-gray-100 transition-all cursor-pointer"
                                    onClick={() => { handleDateClick(date) }}>
                                    <div
                                        className={cn(
                                            currentMonth ? "" : "text-gray-400",
                                            today ? "text-white bg-teal-500" : "",
                                            selectedDate.toDate().toDateString() === date.toDate().toDateString() ? "bg-black text-white" : "",
                                            "h-6 w-6 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                                        )}
                                    >{date.date()}
                                    </div>
                                    {amTripType && (
                                        <div className="pl-1 pb-1">
                                            {/* <img className="object-contain h-6 w-6" src={tripImages[amTripType]} alt={amTripType} /> */}

                                            {amTripType === 'Tuna' ? (
                                                <>
                                                    <div className="flex">
                                                        <img className="object-contain h-6 w-6" src={tripImages[amTripType]} alt={amTripType} />
                                                        <p className="ml-1 text-xs flex items-center">- 6am</p>
                                                    </div>
                                                    <div className="text-xs text-red-500">(full boat)</div>
                                                </>
                                            ) : remainingSeatsAM === 0 ? (
                                                <>
                                                    <div className="flex">
                                                        <img className="object-contain h-6 w-6" src={tripImages[amTripType]} alt={amTripType} />
                                                        <p className="ml-1 text-xs flex items-center">- 6am</p>
                                                    </div>
                                                    <div className="text-xs  text-red-500">(full boat)</div>
                                                </>

                                            ) : (
                                                <div className="flex">
                                                    <img className="object-contain h-6 w-6" src={tripImages[amTripType]} alt={amTripType} />
                                                    <p className="ml-1 text-xs flex items-center">- 6am</p>
                                                </div>
                                            )
                                            }
                                            {amBookings.map(booking => (
                                                <p className="text-xs flex" key={booking._id}>{booking.lastName.substring(0, 8)} - x{booking.partySize}</p>
                                            ))}
                                            {amTripType !== 'Tuna' && remainingSeatsPM !== 0 && remainingSeatsAM === 0 && (
                                                <div className="text-xs mt-2 text-green-500">(pm open)</div>
                                            )}
                                        </div>
                                    )}

                                    {pmTripType && (
                                        <div className="pl-1 pb-1">
                                            {remainingSeatsAM !== 0 && remainingSeatsPM === 0 && (
                                                <div className="text-xs mb-2 text-green-500">(am open)</div>
                                            )}
                                            {remainingSeatsPM === 0 ? (
                                                <>
                                                    <div className="flex">
                                                        <img className="object-contain h-6 w-6" src={tripImages[pmTripType]} alt={pmTripType} />
                                                        <p className="ml-1 text-xs flex items-center">- 2pm</p>
                                                    </div>
                                                    <div className="text-xs  text-red-500">(full boat)</div>
                                                </>

                                            ) : (
                                                <div className="flex">
                                                    <img className="object-contain h-6 w-6" src={tripImages[pmTripType]} alt={pmTripType} />
                                                    <p className="ml-1 text-xs flex items-center">- 2pm</p>
                                                </div>
                                            )
                                            }
                                            {pmBookings.map(booking => (
                                                <p className="text-xs flex" key={booking._id}>{booking.lastName.substring(0, 8)} - x{booking.partySize}</p>
                                            ))}

                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="side-details-box w-[310px] h-[auto] border  p-5 pt-2 bg-teal-500 rounded-md self-start">
                    <div className="font-semibold">
                        {selectedDate.toDate().toDateString()}
                    </div>
                    {selectedDate.isBefore(dayjs().startOf('day')) ? (
                         <div className="p-3 border text-sm text-slate-500 h-[100px] mt-0 m-[-20px] bg-white">This date is in the past, please choose a new date.</div>
                    ) : currentDayBookings.some(booking => booking.tripType === 'Tuna') ? (
                        <>
                            <div className="border rounded-md p-2 mt-2 bg-white">
                                <div className="flex items-center gap-2">
                                    <img src="./tuna.jpeg" alt="tuna" className="h-10 w-10 object-contain" />
                                    <p>Tuna Trip</p>
                                </div>

                                <div className="flex items-center gap-2 mb-2">
                                    <div className="text-xs border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">6am</div>
                                    <div className="text-xs rounded-md px-3 py-1 inline-block bg-red-500 text-white ">Full Boat</div>
                                    <p className="text-xs">(0 seats left)</p>
                                </div>
                            </div>
                        </>
                    ) : currentDayBookings.length === 0 ? (
                        <div className="flex-col">
                            <div className="border rounded-md p-2 mt-3 bg-white">
                                <div className="flex items-center gap-2">
                                    <img src="./rockfish.png" alt="rockfish" className="h-10 w-10 object-contain" />
                                    <p>Rockfish Trip</p>
                                </div>

                                <div className="flex items-center gap-2 mb-2 text-xs">
                                    <div className="border bg-slate-200 rounded-md px-2 py-1 inline-block ml-5">6am</div>
                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white " onClick={() => openModalWithBooking(selectedDate, "am", "Rockfish", 6)}>Book</button>
                                    <p className="text-xs">(6 seats left!)</p>
                                </div>

                                <div className="flex items-center gap-2 text-xs">
                                    <button className="border bg-slate-200 rounded-md px-2 py-1 inline-block ml-5">2pm</button>
                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white" onClick={() => openModalWithBooking(selectedDate, "pm", "Rockfish", 6)}>Book</button>
                                    <p className="text-xs">(6 seats left!)</p>
                                </div>
                            </div>
                            <div className="border rounded-md p-2 mt-3 bg-white">
                                <div className="flex items-center gap-2">
                                    <img src="./Halibut.webp" alt="halibut" className="h-10 w-10 object-contain" />
                                    <p>Halibut Trip</p>
                                </div>

                                <div className="flex items-center gap-2 mb-2 text-xs">
                                    <div className="border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">6am</div>
                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white" onClick={() => openModalWithBooking(selectedDate, "am", "Halibut", 6)}>Book</button>
                                    <p className="text-xs">(6 seats left!)</p>
                                </div>

                                <div className="flex items-center gap-2 text-xs">
                                    <button className="border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">2pm</button>
                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white" onClick={() => openModalWithBooking(selectedDate, "pm", "Halibut", 6)}>Book</button>
                                    <p className="text-xs">(6 seats left!)</p>
                                </div>
                            </div>
                            <div className="border rounded-md p-2 mt-3 bg-white">
                                <div className="flex items-center gap-2">
                                    <img src="./whale.jpg" alt="whale" className="h-10 w-10 object-contain" />
                                    <p>Wildlife Tour</p>
                                </div>

                                <div className="flex items-center gap-2 mb-2 text-xs">
                                    <div className="border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">6am</div>
                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white" onClick={() => openModalWithBooking(selectedDate, "am", "Wildlife", 6)}>Book</button>
                                    <p className="text-xs">(6 seats left!)</p>
                                </div>

                                <div className="flex items-center gap-2 text-xs">
                                    <button className="border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">2pm</button>
                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white" onClick={() => openModalWithBooking(selectedDate, "pm", "Wildlife", 6)}>Book</button>
                                    <p className="text-xs">(6 seats left!)</p>
                                </div>
                            </div>
                            <div className="border rounded-md p-2 mt-3 bg-white">
                                <div className="flex items-center gap-2">
                                    <img src="./tuna.jpeg" alt="tuna" className="h-10 w-10 object-contain" />
                                    <p>Tuna Trip</p>
                                </div>

                                <div className="flex items-center gap-2 mb-2 text-xs">
                                    <div className="border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">6am</div>
                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white" onClick={() => openModalWithBooking(selectedDate, "am", "Tuna", 6)}>Book</button>
                                    <p className="text-xs">(6 seats left!)</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex-col">

                            {amTripType && !pmTripType ? (

                                <>
                                    <div className="border rounded-md p-2 mt-3 bg-white">
                                        <div className="flex items-center gap-2">
                                            {amTripType === "Rockfish" ? (
                                                <img src="./rockfish.png" alt="rockfish" className="h-10 w-10 object-contain" />
                                            ) : amTripType === "Halibut" ? (
                                                <img src="./Halibut.webp" alt="halibut" className="h-10 w-10 object-contain" />
                                            ) : amTripType === "Wildlife" ? (
                                                <img src="./whale.jpg" alt="whale" className="h-10 w-10 object-contain" />
                                            ) : (
                                                <></>
                                            )
                                            }
                                            <p>{amTripType} Trip</p>
                                        </div>
                                        {
                                            remainingSeatsAM === 0 ? (
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="text-xs border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">6am</div>
                                                    <div className="text-xs rounded-md px-3 py-1 inline-block bg-red-500 text-white ">Full Boat</div>
                                                    <p className="text-xs">(0 seats left)</p>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-2 mb-2 text-xs">
                                                    <div className="border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">6am</div>
                                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                                    <p className="text-xs">({remainingSeatsAM} seats left!)</p>
                                                </div>
                                            )
                                        }

                                        <div className="flex items-center gap-2 text-xs">
                                            <button className="border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">2pm</button>
                                            <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                            <p className="text-xs">(6 seats left!)</p>
                                        </div>
                                    </div>
                                    {
                                        amTripType !== "Rockfish" && (
                                            <div className="border rounded-md p-2 mt-3 bg-white">
                                                <div className="flex items-center gap-2">
                                                    <img src="./rockfish.png" alt="rockfish" className="h-10 w-10 object-contain" />
                                                    <p>Rockfish Trip</p>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs">
                                                    <button className="border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">2pm</button>
                                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                                    <p className="text-xs">(6 seats left!)</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                    {
                                        amTripType !== "Halibut" && (
                                            <div className="border rounded-md p-2 mt-3 bg-white">
                                                <div className="flex items-center gap-2">
                                                    <img src="./Halibut.webp" alt="halibut" className="h-10 w-10 object-contain" />
                                                    <p>Halibut Trip</p>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs">
                                                    <button className="border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">2pm</button>
                                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                                    <p className="text-xs">(6 seats left!)</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                    {
                                        amTripType !== "Wildlife" && (
                                            <div className="border rounded-md p-2 mt-3 bg-white">
                                                <div className="flex items-center gap-2">
                                                    <img src="./whale.jpg" alt="whale" className="h-10 w-10 object-contain" />
                                                    <p>Wildlife Tour</p>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs">
                                                    <button className="border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">2pm</button>
                                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                                    <p className="text-xs">(6 seats left!)</p>
                                                </div>
                                            </div>
                                        )
                                    }


                                </>
                            ) : pmTripType && !amTripType ? (
                                <>
                                    <div className="border rounded-md p-2 mt-3 bg-white">
                                        <div className="flex items-center gap-2">
                                            {pmTripType === "Rockfish" ? (
                                                <img src="./rockfish.png" alt="rockfish" className="h-10 w-10 object-contain" />
                                            ) : pmTripType === "Halibut" ? (
                                                <img src="./Halibut.webp" alt="halibut" className="h-10 w-10 object-contain" />
                                            ) : pmTripType === "Wildlife" ? (
                                                <img src="./whale.jpg" alt="whale" className="h-10 w-10 object-contain" />
                                            ) : (
                                                <></>
                                            )
                                            }
                                            <p>{pmTripType} Trip</p>
                                        </div>
                                        <div className="flex items-center gap-2 mb-2 text-xs">
                                            <button className="border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">6am</button>
                                            <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                            <p className="text-xs">(6 seats left!)</p>
                                        </div>
                                        {
                                            remainingSeatsPM === 0 ? (
                                                <div className="flex items-center gap-2 mb-2 bg-white">
                                                    <div className="border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">2pm</div>
                                                    <div className="text-xs rounded-md px-3 py-1 inline-block bg-red-500 text-white ">Full Boat</div>
                                                    <p className="text-xs">(0 seats left)</p>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-2 mb-2 text-xs bg-white">
                                                    <div className="border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">2pm</div>
                                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                                    <p className="text-xs">({remainingSeatsPM} seats left!)</p>
                                                </div>
                                            )
                                        }
                                    </div>
                                    {
                                        pmTripType !== "Rockfish" && (
                                            <div className="border rounded-md p-2 mt-3 bg-white">
                                                <div className="flex items-center gap-2">
                                                    <img src="./rockfish.png" alt="rockfish" className="h-10 w-10 object-contain" />
                                                    <p>Rockfish Trip</p>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs">
                                                    <button className="border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">6am</button>
                                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                                    <p className="text-xs">(6 seats left!)</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                    {
                                        pmTripType !== "Halibut" && (
                                            <div className="border rounded-md p-2 mt-3 bg-white">
                                                <div className="flex items-center gap-2">
                                                    <img src="./Halibut.webp" alt="halibut" className="h-10 w-10 object-contain" />
                                                    <p>Halibut Trip</p>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs">
                                                    <button className="border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">6am</button>
                                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                                    <p className="text-xs">(6 seats left!)</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                    {
                                        pmTripType !== "Wildlife" && (
                                            <div className="border rounded-md p-2 mt-3 bg-white">
                                                <div className="flex items-center gap-2">
                                                    <img src="./whale.jpg" alt="whale" className="h-10 w-10 object-contain" />
                                                    <p>Wildlife Tour</p>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs">
                                                    <button className="border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">6am</button>
                                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                                    <p className="text-xs">(6 seats left!)</p>
                                                </div>
                                            </div>
                                        )
                                    }


                                </>
                            ) : amTripType && pmTripType && amTripType === pmTripType ? (
                                <>
                                    <div className="border rounded-md p-2 mt-3 bg-white">
                                        <div className="flex items-center gap-2">
                                            {pmTripType === "Rockfish" ? (
                                                <img src="./rockfish.png" alt="rockfish" className="h-10 w-10 object-contain" />
                                            ) : pmTripType === "Halibut" ? (
                                                <img src="./Halibut.webp" alt="halibut" className="h-10 w-10 object-contain" />
                                            ) : pmTripType === "Wildlife" ? (
                                                <img src="./whale.jpg" alt="whale" className="h-10 w-10 object-contain" />
                                            ) : (
                                                <></>
                                            )
                                            }
                                            <p>{amTripType} Trip</p>
                                        </div>
                                        {
                                            remainingSeatsAM === 0 ? (
                                                <div className="flex items-center gap-2 mb-2 bg-white">
                                                    <div className="text-xs border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">6am</div>
                                                    <div className="text-xs rounded-md px-3 py-1 inline-block bg-red-500 text-white ">Full Boat</div>
                                                    <p className="text-xs">(0 seats left)</p>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-2 mb-2 text-xs">
                                                    <div className="border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">6am</div>
                                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                                    <p className="text-xs">({remainingSeatsAM} seats left!)</p>
                                                </div>
                                            )
                                        }
                                        {
                                            remainingSeatsPM === 0 ? (
                                                <div className="flex items-center gap-2 mb-2 bg-white">
                                                    <div className="text-xs border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">2pm</div>
                                                    <div className="text-xs rounded-md px-3 py-1 inline-block bg-red-500 text-white ">Full Boat</div>
                                                    <p className="text-xs">(0 seats left)</p>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-2 mb-2 text-xs">
                                                    <div className="border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">2pm</div>
                                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                                    <p className="text-xs">({remainingSeatsPM} seats left!)</p>
                                                </div>
                                            )
                                        }
                                    </div>
                                </>
                            ) : amTripType && pmTripType && amTripType !== pmTripType ? (
                                <>
                                    <div className="border rounded-md p-2 mt-3 bg-white">
                                        <div className="flex items-center gap-2">
                                            {amTripType === "Rockfish" ? (
                                                <img src="./rockfish.png" alt="rockfish" className="h-10 w-10 object-contain" />
                                            ) : amTripType === "Halibut" ? (
                                                <img src="./Halibut.webp" alt="halibut" className="h-10 w-10 object-contain" />
                                            ) : amTripType === "Wildlife" ? (
                                                <img src="./whale.jpg" alt="whale" className="h-10 w-10 object-contain" />
                                            ) : (
                                                <></>
                                            )
                                            }
                                            <p>{amTripType} Trip</p>
                                        </div>
                                        {
                                            remainingSeatsAM === 0 ? (
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="text-xs border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">6am</div>
                                                    <div className="text-xs rounded-md px-3 py-1 inline-block bg-red-500 text-white ">Full Boat</div>
                                                    <p className="text-xs">(0 seats left)</p>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-2 mb-2 text-xs">
                                                    <div className="border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">6am</div>
                                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                                    <p className="text-xs">({remainingSeatsAM} seats left!)</p>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="border rounded-md p-2 mt-3 bg-white">
                                        <div className="flex items-center gap-2">
                                            {pmTripType === "Rockfish" ? (
                                                <img src="./rockfish.png" alt="rockfish" className="h-10 w-10 object-contain" />
                                            ) : pmTripType === "Halibut" ? (
                                                <img src="./Halibut.webp" alt="halibut" className="h-10 w-10 object-contain" />
                                            ) : pmTripType === "Wildlife" ? (
                                                <img src="./whale.jpg" alt="whale" className="h-10 w-10 object-contain" />
                                            ) : (
                                                <></>
                                            )
                                            }
                                            <p>{pmTripType} Trip</p>
                                        </div>
                                        {
                                            remainingSeatsPM === 0 ? (
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="text-xs border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">2pm</div>
                                                    <div className="text-xs rounded-md px-3 py-1 inline-block bg-red-500 text-white ">Full Boat</div>
                                                    <p className="text-xs">(0 seats left)</p>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-2 mb-2 text-xs">
                                                    <div className="border rounded-md px-2 py-1 inline-block ml-5 bg-slate-200">2pm</div>
                                                    <button className="rounded-md px-3 py-1 inline-block bg-amber-400 text-white ">Book</button>
                                                    <p className="text-xs">({remainingSeatsPM} seats left!)</p>
                                                </div>
                                            )
                                        }
                                    </div>
                                </>
                            )
                                : (
                                    <></>
                                )}
                        </div>
                    )}
                </div>
            </div>
            <CalendarModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                selectedBooking={selectedBooking}
                setRefresh={setRefresh} />
        </div>
    )
}

export default Calendar;
