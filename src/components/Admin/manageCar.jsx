import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Importing the icons
import axiosInstance from "../utils/axios"; // Axios instance

const ManageCars = () => {
    const [cars, setCars] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [currentCar, setCurrentCar] = useState(null);

    // Fetch all cars on component mount
    useEffect(() => {
        axiosInstance
            .get("/car")
            .then((response) => {
                setCars(response.data);
            })
            .catch((error) => {
                console.error("Error fetching cars:", error);
            });
    }, []);

    const handleSave = () => {
        if (isAdding) {
            // Add car request
            axiosInstance
                .post("/car", currentCar)
                .then((response) => {
                    setCars([...cars, response.data]);
                    setIsAdding(false);
                    setCurrentCar(null);
                })
                .catch((error) => {
                    console.error("Error adding car:", error);
                });
        } else if (isEditing) {
            // Update car request
            axiosInstance
                .put(`/car/${currentCar.id}`, currentCar)
                .then((response) => {
                    const updatedCars = cars.map((car) =>
                        car.id === currentCar.id ? response.data : car
                    );
                    setCars(updatedCars);
                    setIsEditing(false);
                    setCurrentCar(null);
                })
                .catch((error) => {
                    console.error("Error updating car:", error);
                });
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredCars = cars.filter(
        (car) =>
            car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            car.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = (id) => {
        axiosInstance
            .delete(`/car/${id}`)
            .then(() => {
                const updatedCars = cars.filter((car) => car.id !== id);
                setCars(updatedCars);
            })
            .catch((error) => {
                console.error("Error deleting car:", error);
            });
    };

    const handleEdit = (car) => {
        setCurrentCar({ ...car });
        setIsEditing(true);
    };

    const handleAddCar = () => {
        setCurrentCar({ name: "", price: "", description: "", image: "" });
        setIsAdding(true);
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-deepPurple">Manage Cars</h2>

            {/* Search Bar and Add Car Button */}
            <div className="flex items-center mb-6">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search by car name or description"
                    className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                    onClick={handleAddCar}
                    className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                    Add Car
                </button>
            </div>

            {/* Add/Edit Car Modal/Toggle */}
            {(isAdding || isEditing) && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
                        <h3 className="text-xl font-semibold mb-4 text-primary">
                            {isAdding ? "Add Car" : "Edit Car"}
                        </h3>

                        <label className="block mb-2 text-sm font-medium text-gray-600">Car Name</label>
                        <input
                            type="text"
                            value={currentCar.name}
                            onChange={(e) =>
                                setCurrentCar({ ...currentCar, name: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                        />

                        <label className="block mb-2 text-sm font-medium text-gray-600">Price</label>
                        <input
                            type="text"
                            value={currentCar.price}
                            onChange={(e) =>
                                setCurrentCar({ ...currentCar, price: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                        />

                        <label className="block mb-2 text-sm font-medium text-gray-600">Description</label>
                        <input
                            type="text"
                            value={currentCar.description}
                            onChange={(e) =>
                                setCurrentCar({ ...currentCar, description: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                        />

                        <label className="block mb-2 text-sm font-medium text-gray-600">Image URL</label>
                        <input
                            type="text"
                            value={currentCar.image}
                            onChange={(e) =>
                                setCurrentCar({ ...currentCar, image: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                        />

                        <div className="mt-6">
                            <button
                                onClick={handleSave}
                                className="w-full px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
                            >
                                Save Changes
                            </button>
                            <button
                                onClick={() => {
                                    setIsAdding(false);
                                    setIsEditing(false);
                                    setCurrentCar(null);
                                }} // Close the modal
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
                        <th className="px-4 py-2">Car ID</th>
                        <th className="px-4 py-2">Car Name</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Description</th>
                        <th className="px-4 py-2">Image</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCars.map((car) => (
                        <tr key={car.id}>
                            <td className="border px-4 py-2">{car._id}</td>
                            <td className="border px-4 py-2">{car.name}</td>
                            <td className="border px-4 py-2">{car.price}</td>
                            <td className="border px-4 py-2">{car.description}</td>
                            <td className="border px-4 py-2">
                                <img src={car.image} alt={car.name} className="w-20 h-20 object-cover" />
                            </td>
                            <td className="border px-4 py-2">
                                <button
                                    onClick={() => handleEdit(car)}
                                    className="bg-blue-500 text-white p-2 rounded mr-2 hover:bg-blue-600"
                                >
                                    <FaEdit /> {/* Edit icon */}
                                </button>
                                <button
                                    onClick={() => handleDelete(car.id)}
                                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                                >
                                    <FaTrashAlt /> {/* Delete icon */}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageCars;
