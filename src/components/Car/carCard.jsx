import React, { useState } from "react";
import { FaCogs, FaRoad, FaUser } from "react-icons/fa";
import Navbar from "../Navbar/navbar";
import cars from "./Car";

// CarCard Component
const CarCard = ({ name, type, price, capacity, transmission, mileage, img, onBookClick }) => (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        {/* Car Image */}
        <div className="flex justify-center">
            <img
                src={img}
                alt={name}
                className="w-full h-48 object-contain rounded-xl"
            />
        </div>

        {/* Car Details */}
        <h2 className="text-xl font-semibold text-gray-800 mt-4 truncate">{name}</h2>
        <p className="text-sm text-gray-500 mb-4">{type}</p>

        {/* Additional Info */}
        <div className="flex justify-between items-center text-sm text-gray-700 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
                <FaUser className="text-gray-600" />
                <p>{capacity} People</p>
            </div>
            <div className="flex items-center gap-2">
                <FaCogs className="text-gray-600" />
                <p>{transmission}</p>
            </div>
            <div className="flex items-center gap-2">
                <FaRoad className="text-gray-600" />
                <p>{mileage} miles/day</p>
            </div>
        </div>

        {/* Price and Button */}
        <div className="mt-6 flex justify-between items-center">
            <p className="text-lg font-bold text-green-600">${price}/day</p>
            <button
                className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300"
                onClick={() => onBookClick(name, price)}
            >
                Book Now
            </button>
        </div>
    </div>
);

const CarListing = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        driverRequired: false,
    });

    // Filter cars based on search term
    const filteredCars = cars.filter(
        (car) =>
            car.name.toLowerCase().includes(searchTerm) ||
            car.type.toLowerCase().includes(searchTerm)
    );

    // Handle form data change
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // Handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted", formData);
        // Here you can handle the form submission logic (e.g., save data to backend)
        setShowBookingForm(false); // Close the form after submission
    };

    // Show booking form when 'Book Now' is clicked
    const handleBookClick = (carName, carPrice) => {
        setSelectedCar({ name: carName, price: carPrice });
        setShowBookingForm(true);
    };

    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gray-50 p-8">
                {/* Search Bar */}
                <div className="mb-8">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                        placeholder="Search for cars..."
                        className="w-full px-5 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                </div>

                {/* Car Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCars.map((car, index) => (
                        <CarCard key={index} {...car} onBookClick={handleBookClick} />
                    ))}
                </div>

                {/* Booking Form Toggle */}
                {showBookingForm && (
                    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white rounded-xl shadow-lg p-8 w-full sm:w-[700px] relative">
                            <h3 className="text-2xl font-semibold mb-4">Book {selectedCar?.name}</h3>

                            {/* Car Information Display */}
                            <div className="mb-4">
                                <p><strong>Car:</strong> {selectedCar?.name}</p>
                                <p><strong>Price:</strong> ${selectedCar?.price}/day</p>
                            </div>

                            <form onSubmit={handleFormSubmit}>
                                {/* Name */}
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    />
                                </div>

                                {/* Contact */}
                                <div className="mb-4">
                                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact</label>
                                    <input
                                        type="text"
                                        id="contact"
                                        name="contact"
                                        value={formData.contact}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    />
                                </div>

                                {/* Pick-Up Location */}
                                <div className="mb-4">
                                    <label htmlFor="pickUpLocation" className="block text-sm font-medium text-gray-700">Pick-Up Location</label>
                                    <input
                                        type="text"
                                        id="pickUpLocation"
                                        name="pickUpLocation"
                                        value={formData.pickUpLocation}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    />
                                </div>

                                {/* Start Date */}
                                <div className="mb-4">
                                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
                                    <input
                                        type="date"
                                        id="startDate"
                                        name="startDate"
                                        value={formData.startDate}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    />
                                </div>

                                {/* End Date */}
                                <div className="mb-4">
                                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
                                    <input
                                        type="date"
                                        id="endDate"
                                        name="endDate"
                                        value={formData.endDate}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    />
                                </div>

                                {/* Status */}
                                <div className="mb-4">
                                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                                    <select
                                        id="status"
                                        name="status"
                                        value={formData.status}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    >
                                        <option value="" disabled>Select status</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Confirmed">Confirmed</option>
                                        <option value="Cancelled">Cancelled</option>
                                    </select>
                                </div>

                                {/* Driver Cost Section */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Driver Price: Rs. 300/day</label>
                                    <div className="mt-2 flex items-center gap-4">
                                        {/* Text Field for Driver Days */}
                                        <input
                                            type="number"
                                            name="driverDays"
                                            value={formData.driverDays || ""}
                                            onChange={(e) => {
                                                const days = Math.max(0, parseInt(e.target.value, 10) || 0); // Ensure non-negative integers
                                                setFormData({ ...formData, driverDays: days });
                                            }}
                                            placeholder="Enter number of days"
                                            className="w-24 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        />
                                    </div>

                                    {/* Total Driver Cost */}
                                    {formData.driverDays > 0 && (
                                        <p className="mt-2 text-sm text-gray-700">
                                            Total Driver Cost: Rs. {formData.driverDays * 300}
                                        </p>
                                    )}
                                </div>



                                {/* Submit Button */}
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300"
                                    >
                                        Submit Booking
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CarListing;
