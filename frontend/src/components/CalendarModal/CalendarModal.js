import React, { useState } from "react";

export default function CalendarModal({ isModalOpen, setIsModalOpen, selectedBooking }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    if (!isModalOpen) return null;
    console.log("selected booking!!!", selectedBooking)

    const handleSubmit = (event) => {
        event.preventDefault();

        const bookingData = {
            firstName,
            lastName,
            phoneNumber,
            email,
            date: selectedBooking.date,
            time: selectedBooking.time,
            tripType: selectedBooking.tripType,
            seatsOpen: selectedBooking.seatsOpen
        };

        fetch('/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Close the modal and clear the form
            setIsModalOpen(false);
            setFirstName("");
            setLastName("");
            setPhoneNumber("");
            setEmail("");
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="fixed top-0 left-0 flex items-center justify-center h-screen w-screen">
        <div className="border bg-blue-300 h-[500px] w-[600px] flex flex-col items-center justify-center space-y-4">
            <div>You are booking a {selectedBooking.tripType} Trip for {selectedBooking.date} at {selectedBooking.time}.</div>
            <form className="flex flex-col space-y-4 w-[300px]" onSubmit={handleSubmit}>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
                <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <button type="submit">Submit</button>
            </form>
            <button className="border" onClick={() => setIsModalOpen(false)}>Close</button>
        </div>
    </div>
  );
}
