import React, { useState } from "react";
import { FaCogs, FaRoad, FaStar, FaUser } from "react-icons/fa";
import Navbar from "../Navbar/navbar";
import cars from "./Car";

const CarCard = ({ car, onCardClick }) => (
    <div
        className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        onClick={() => onCardClick(car)}
    >
        <div className="flex justify-center">
            <img src={car.img} alt={car.name} className="w-full h-48 object-contain rounded-xl" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mt-4 truncate">{car.name}</h2>
        <p className="text-sm text-gray-500 mb-4">{car.type}</p>
        <div className="flex justify-between items-center text-sm text-gray-700 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
                <FaUser className="text-gray-600" />
                <p>{car.capacity} People</p>
            </div>
            <div className="flex items-center gap-2">
                <FaCogs className="text-gray-600" />
                <p>{car.transmission}</p>
            </div>
            <div className="flex items-center gap-2">
                <FaRoad className="text-gray-600" />
                <p>{car.mileage} miles/day</p>
            </div>
        </div>
        <div className="mt-6 flex justify-between items-center">
            <p className="text-lg font-bold text-green-600">${car.price}/day</p>
            <button
                className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300"
                onClick={(e) => {
                    e.stopPropagation(); // Prevent card click event
                    onCardClick(car); // Open the car details modal
                }}
            >
                View Details
            </button>
        </div>
    </div>
);

const CarListing = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCar, setSelectedCar] = useState(null);
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        pickUpLocation: "",
        startDate: "",
        endDate: "",
        status: "",
        driverDays: 0,
    });

    const filteredCars = cars.filter(
        (car) =>
            car.name.toLowerCase().includes(searchTerm) ||
            car.type.toLowerCase().includes(searchTerm)
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log("Form submitted", formData);
        // Reset form after submission
        setFormData({
            name: "",
            contact: "",
            pickUpLocation: "",
            startDate: "",
            endDate: "",
            status: "",
            driverDays: 0,
        });
        setShowBookingForm(false);
        setSelectedCar(null);
    };

    const handleBookClick = () => {
        setShowBookingForm(true);
    };

    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gray-50 p-8">
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
                        <CarCard key={index} car={car} onCardClick={setSelectedCar} />
                    ))}
                </div>

                {/* Car Details and Book Now Modal */}
                {selectedCar && (
                    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white rounded-xl shadow-lg p-8 w-full sm:w-[700px] relative">
                            <button
                                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                                onClick={() => setSelectedCar(null)}
                            >
                                ✖
                            </button>
                            <h3 className="text-2xl font-semibold mb-4">{selectedCar.name}</h3>
                            <div className="flex overflow-x-auto gap-2 mb-4">
                                <img
                                    src={selectedCar.img}
                                    alt={selectedCar.name}
                                    className="w-40 h-24 rounded-lg object-cover"
                                />
                            </div>
                            <p className="text-gray-700 mb-2"><strong>Type:</strong> {selectedCar.type}</p>
                            <p className="text-gray-700 mb-2"><strong>Capacity:</strong> {selectedCar.capacity} People</p>
                            <p className="text-gray-700 mb-2"><strong>Transmission:</strong> {selectedCar.transmission}</p>
                            <p className="text-gray-700 mb-2"><strong>Mileage:</strong> {selectedCar.mileage} miles/day</p>
                            <p className="text-gray-700 mb-2"><strong>Price:</strong> ${selectedCar.price}/day</p>
                            <div className="flex items-center mb-4">
                                <FaStar className="text-yellow-500" />
                                <span className="ml-2 text-gray-800 font-semibold">{selectedCar.rating} / 5</span>
                            </div>
                            <p className="text-gray-600 mb-6">{selectedCar.description}</p>
                            <div className="flex justify-end">
                                <button
                                    className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300"
                                    onClick={handleBookClick}
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Booking Form Modal */}
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

                                {/* Driver Cost Section */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Driver Price: Rs. 300/day, Enter the number of days you want driver for</label>
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

                                {/* Submit */}
                                <div className="mt-4 flex justify-between">
                                    <button
                                        type="submit"
                                        className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700"
                                    >
                                        Confirm Booking
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-gray-300 text-black px-5 py-2 rounded-full hover:bg-gray-400"
                                        onClick={() => setShowBookingForm(false)}
                                    >
                                        Cancel
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
