import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Importing icons from react-icons

const ManageBookings = () => {
    // Example booking data with a default status
    const [bookings, setBookings] = useState([
        {
            id: 1,
            user: "John Doe",
            car: "Tesla Model 3",
            pickUpLocation: "Los Angeles, CA",
            startDate: "2025-02-01",
            endDate: "2025-02-07",
            driver: "2 days",
            status: "Confirmed"
        },
        {
            id: 2,
            user: "Jane Smith",
            car: "BMW X5",
            pickUpLocation: "San Francisco, CA",
            startDate: "2025-03-01",
            endDate: "2025-03-07",
            driver: "1 week",
            status: "Pending"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [isEditing, setIsEditing] = useState(false); // Toggle state for editing
    const [currentBooking, setCurrentBooking] = useState(null); // Store current booking being edited

    // Handle status change
    const handleStatusChange = (id, newStatus) => {
        const updatedBookings = bookings.map((booking) =>
            booking.id === id ? { ...booking, status: newStatus } : booking
        );
        setBookings(updatedBookings);
    };

    // Save action (this can be integrated with a backend to persist changes)
    const handleSave = () => {
        if (currentBooking) {
            const updatedBookings = bookings.map((booking) =>
                booking.id === currentBooking.id ? currentBooking : booking
            );
            setBookings(updatedBookings);
            setIsEditing(false); // Close the edit form
            setCurrentBooking(null); // Clear the current booking being edited
        }
    };

    // Handle search input
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filter bookings based on the search term
    const filteredBookings = bookings.filter(
        (booking) =>
            booking.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.car.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle delete action (This can be integrated with backend)
    const handleDelete = (id) => {
        const updatedBookings = bookings.filter((booking) => booking.id !== id);
        setBookings(updatedBookings);
        console.log(`Booking ID ${id} deleted.`);
    };

    // Handle edit click, set the current booking to be edited
    const handleEdit = (booking) => {
        setCurrentBooking({ ...booking });
        setIsEditing(true); // Open the edit form
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-deepPurple">Manage Bookings</h2>

            {/* Search Bar */}
            <div className="mb-6">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search by user or car"
                    className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>

            {/* Edit Booking Modal/Toggle */}
            {isEditing && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
                        <h3 className="text-xl font-semibold mb-4 text-primary">Edit Booking</h3>

                        <label className="block mb-2 text-sm font-medium text-gray-600">User</label>
                        <input
                            type="text"
                            value={currentBooking.user}
                            onChange={(e) =>
                                setCurrentBooking({ ...currentBooking, user: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                        />

                        <label className="block mb-2 text-sm font-medium text-gray-600">Car</label>
                        <input
                            type="text"
                            value={currentBooking.car}
                            onChange={(e) =>
                                setCurrentBooking({ ...currentBooking, car: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                        />

                        <label className="block mb-2 text-sm font-medium text-gray-600">Pick-Up Location</label>
                        <input
                            type="text"
                            value={currentBooking.pickUpLocation}
                            onChange={(e) =>
                                setCurrentBooking({
                                    ...currentBooking,
                                    pickUpLocation: e.target.value
                                })
                            }
                            className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                        />

                        <label className="block mb-2 text-sm font-medium text-gray-600">Start Date</label>
                        <input
                            type="date"
                            value={currentBooking.startDate}
                            onChange={(e) =>
                                setCurrentBooking({ ...currentBooking, startDate: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                        />

                        <label className="block mb-2 text-sm font-medium text-gray-600">End Date</label>
                        <input
                            type="date"
                            value={currentBooking.endDate}
                            onChange={(e) =>
                                setCurrentBooking({ ...currentBooking, endDate: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                        />

                        <label className="block mb-2 text-sm font-medium text-gray-600">Status</label>
                        <select
                            value={currentBooking.status}
                            onChange={(e) =>
                                setCurrentBooking({ ...currentBooking, status: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                        >
                            <option value="Pending">Pending</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Rejected">Rejected</option>
                        </select>

                        <div className="mt-6">
                            <button
                                onClick={handleSave}
                                className="w-full px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
                            >
                                Save Changes
                            </button>
                            <button
                                onClick={() => setIsEditing(false)} // Close the modal
                                className="w-full px-4 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <table className="table-auto w-full border mt-6">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2">Booking ID</th>
                        <th className="px-4 py-2">User</th>
                        <th className="px-4 py-2">Car</th>
                        <th className="px-4 py-2">Pick-Up Location</th>
                        <th className="px-4 py-2">Start Date</th>
                        <th className="px-4 py-2">End Date</th>
                        <th className="px-4 py-2">Driver</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBookings.map((booking) => (
                        <tr key={booking.id}>
                            <td className="border px-4 py-2">{booking.id}</td>
                            <td className="border px-4 py-2">{booking.user}</td>
                            <td className="border px-4 py-2">{booking.car}</td>
                            <td className="border px-4 py-2">{booking.pickUpLocation}</td>
                            <td className="border px-4 py-2">{booking.startDate}</td>
                            <td className="border px-4 py-2">{booking.endDate}</td>
                            <td className="border px-4 py-2">{booking.driver}</td>
                            <td className="border px-4 py-2">{booking.status}</td>
                            <td className="border px-4 py-2">
                                <button
                                    onClick={() => handleEdit(booking)}
                                    className="text-blue-500 mr-5"
                                >
                                    <FaEdit />
                                </button>
                                <button
                                    onClick={() => handleDelete(booking.id)}
                                    className="text-red-500"
                                >
                                    <FaTrashAlt />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageBookings;
