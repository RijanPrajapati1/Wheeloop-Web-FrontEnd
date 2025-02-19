import React, { useEffect, useState } from "react";
import Navbar from "../navBar/navbar";
import axiosInstance from "../utils/axios";

// Function to fetch booking data for a specific user
const fetchBookings = async (userId) => {
    try {
        // Use axiosInstance to fetch bookings
        const response = await axiosInstance.get(`/rental?userId=${userId}`);
        return response.data; // Assuming data is an array of bookings
    } catch (error) {
        console.error("Error fetching bookings:", error);
        return []; // Return an empty array in case of an error
    }
};

const Booking = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetching the userId from localStorage
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        if (!userId) {
            setError("User is not logged in");
            setLoading(false);
            return;
        }

        // Fetch bookings for the user once the component mounts
        const getBookings = async () => {
            setLoading(true);
            setError(null);

            const fetchedBookings = await fetchBookings(userId);
            setBookings(fetchedBookings);

            setLoading(false);
        };

        getBookings();
    }, [userId]);

    return (
        <div>
            <Navbar />
            <h1>Your Bookings</h1>

            {loading && <p>Loading your bookings...</p>}
            {error && <p>Error: {error}</p>}

            <ul>
                {bookings.length === 0 ? (
                    <p>No bookings found</p>
                ) : (
                    bookings.map((booking) => (
                        <li key={booking.id}>
                            <p>Booking ID: {booking.id}</p>
                            <p>Car: {booking.car}</p>
                            <p>Date: {booking.date}</p>
                            {/* Add other booking details as necessary */}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Booking;
