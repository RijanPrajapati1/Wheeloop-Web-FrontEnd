import { useState } from "react";
import ManageBookings from "../Admin/manageBooking.jsx";
import ManageCars from "../Admin/manageCar.jsx";
import ManageUsers from "../Admin/manageUser.jsx";

const AdminPanel = () => {
    const [activeSection, setActiveSection] = useState("dashboard");

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Navbar */}
            <div className="bg-deepPurple text-white p-4 shadow-md flex justify-between items-center">
                <h1 className="text-3xl font-semibold">WHEELOOP</h1>
                <div className="flex items-center space-x-4">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:shadow-md">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="User Avatar"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-lg z-[1] mt-3 w-52 p-3 shadow-lg">
                            <li><a>Profile</a></li>
                            <li><a>Settings</a></li>
                            <li><a onClick={() => console.log("Logging out")}>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-1">
                {/* Sidebar */}
                <div className="w-64 bg-white text-deepPurple flex flex-col shadow-xl p-6 border border-gray-300 rounded-lg">
                    <nav className="flex-1">
                        <ul className="space-y-6">
                            <div className="p-4 text-xl font-bold border-b border-deep-purple-700">Admin Menu</div>
                            <li>
                                <button
                                    onClick={() => setActiveSection("dashboard")}
                                    className={`block py-2 px-4 rounded-md transition-all duration-300 ${activeSection === "dashboard" ? "bg-blue-500 text-white" : "hover:bg-deepPurple hover:text-white"}`}
                                >
                                    Dashboard
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setActiveSection("users")}
                                    className={`block py-2 px-4 rounded-md transition-all duration-300 ${activeSection === "users" ? "bg-blue-500 text-white" : "hover:bg-deepPurple hover:text-white"}`}
                                >
                                    Manage Users
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setActiveSection("cars")}
                                    className={`block py-2 px-4 rounded-md transition-all duration-300 ${activeSection === "cars" ? "bg-blue-500 text-white" : "hover:bg-deepPurple hover:text-white"}`}
                                >
                                    Manage Cars
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setActiveSection("bookings")}
                                    className={`block py-2 px-4 rounded-md transition-all duration-300 ${activeSection === "bookings" ? "bg-blue-500 text-white" : "hover:bg-deepPurple hover:text-white"}`}
                                >
                                    Manage Bookings
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <div className="mt-6">
                        <button onClick={() => console.log("Logging out")} className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-md">Logout</button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-8">
                    {activeSection === "users" && <ManageUsers />}
                    {activeSection === "cars" && <ManageCars />}
                    {activeSection === "bookings" && <ManageBookings />}
                    {activeSection === "dashboard" && <h1 className="text-4xl font-bold text-deepPurple">Welcome to the Admin Panel</h1>}
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
