import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Importing icons from react-icons

const ManageUsers = () => {
    // Example user data with password instead of status
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "John Doe",
            email: "johndoe@example.com",
            phone: "123-456-7890",
            address: "123 Main St, Los Angeles, CA",
            password: "password123"
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "janesmith@example.com",
            phone: "098-765-4321",
            address: "456 Elm St, San Francisco, CA",
            password: "securepass456"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [isAdding, setIsAdding] = useState(false); // Toggle state for adding user
    const [currentUser, setCurrentUser] = useState(null); // Store current user being edited/added

    // Handle save action for adding or editing
    const handleSave = () => {
        if (isAdding) {
            setUsers([...users, { ...currentUser, id: users.length + 1 }]); // Add new user
            setIsAdding(false);
        } else if (isEditing) {
            const updatedUsers = users.map((user) =>
                user.id === currentUser.id ? currentUser : user
            );
            setUsers(updatedUsers);
            setIsEditing(false);
        }
        setCurrentUser(null);
    };

    // Handle search input
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filter users based on the search term
    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle delete action (This can be integrated with backend)
    const handleDelete = (id) => {
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
        console.log(`User ID ${id} deleted.`);
    };

    // Handle edit click, set the current user to be edited
    const handleEdit = (user) => {
        setCurrentUser({ ...user });
        setIsEditing(true); // Open the edit form
    };

    // Handle add user
    const handleAddUser = () => {
        setCurrentUser({ name: "", email: "", phone: "", address: "", password: "" });
        setIsAdding(true); // Open the add user form
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-deepPurple">Manage Users</h2>

            {/* Search Bar and Add User Button */}
            <div className="flex items-center mb-6">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search by user name or email"
                    className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                    onClick={handleAddUser}
                    className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                    Add User
                </button>
            </div>

            {/* Add/Edit User Modal/Toggle */}
            {(isAdding || isEditing) && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
                        <h3 className="text-xl font-semibold mb-4 text-primary">
                            {isAdding ? "Add User" : "Edit User"}
                        </h3>

                        <label className="block mb-2 text-sm font-medium text-gray-600">Name</label>
                        <input
                            type="text"
                            value={currentUser.name}
                            onChange={(e) =>
                                setCurrentUser({ ...currentUser, name: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                        />

                        <label className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            value={currentUser.email}
                            onChange={(e) =>
                                setCurrentUser({ ...currentUser, email: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                        />

                        <label className="block mb-2 text-sm font-medium text-gray-600">Phone</label>
                        <input
                            type="text"
                            value={currentUser.phone}
                            onChange={(e) =>
                                setCurrentUser({ ...currentUser, phone: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                        />

                        <label className="block mb-2 text-sm font-medium text-gray-600">Address</label>
                        <input
                            type="text"
                            value={currentUser.address}
                            onChange={(e) =>
                                setCurrentUser({ ...currentUser, address: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                        />

                        <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            value={currentUser.password}
                            onChange={(e) =>
                                setCurrentUser({ ...currentUser, password: e.target.value })
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
                                    setCurrentUser(null);
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
                        <th className="px-4 py-2">User ID</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Phone</th>
                        <th className="px-4 py-2">Address</th>
                        <th className="px-4 py-2">Password</th> {/* Add Password column */}
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user.id}>
                            <td className="border px-4 py-2">{user.id}</td>
                            <td className="border px-4 py-2">{user.name}</td>
                            <td className="border px-4 py-2">{user.email}</td>
                            <td className="border px-4 py-2">{user.phone}</td>
                            <td className="border px-4 py-2">{user.address}</td>
                            <td className="border px-4 py-2">{user.password}</td> {/* Display Password */}
                            <td className="border px-4 py-2">
                                <button
                                    onClick={() => handleEdit(user)}
                                    className="text-blue-500 mr-5"
                                >
                                    <FaEdit />
                                </button>
                                <button
                                    onClick={() => handleDelete(user.id)}
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

export default ManageUsers;
