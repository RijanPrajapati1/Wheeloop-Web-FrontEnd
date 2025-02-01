import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Importing the icons

const ManageCars = () => {
    const [cars, setCars] = useState([
        {
            id: 1,
            name: "Tesla Model 3",
            price: "$35,000",
            description: "Electric Sedan with Autopilot",
            image: "https://example.com/tesla_model_3.jpg"
        },
        {
            id: 2,
            name: "Ford Mustang",
            price: "$25,000",
            description: "Classic American Muscle Car",
            image: "https://example.com/ford_mustang.jpg"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [isAdding, setIsAdding] = useState(false); // Toggle state for adding car
    const [currentCar, setCurrentCar] = useState(null); // Store current car being edited/added

    // Handle save action for adding or editing
    const handleSave = () => {
        if (isAdding) {
            setCars([...cars, { ...currentCar, id: cars.length + 1 }]); // Add new car
            setIsAdding(false);
        } else if (isEditing) {
            const updatedCars = cars.map((car) =>
                car.id === currentCar.id ? currentCar : car
            );
            setCars(updatedCars);
            setIsEditing(false);
        }
        setCurrentCar(null);
    };

    // Handle search input
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filter cars based on the search term
    const filteredCars = cars.filter(
        (car) =>
            car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            car.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle delete action
    const handleDelete = (id) => {
        const updatedCars = cars.filter((car) => car.id !== id);
        setCars(updatedCars);
        console.log(`Car ID ${id} deleted.`);
    };

    // Handle edit click, set the current car to be edited
    const handleEdit = (car) => {
        setCurrentCar({ ...car });
        setIsEditing(true); // Open the edit form
    };

    // Handle add car
    const handleAddCar = () => {
        setCurrentCar({ name: "", price: "", description: "", image: "" });
        setIsAdding(true); // Open the add car form
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
                            <td className="border px-4 py-2">{car.id}</td>
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
