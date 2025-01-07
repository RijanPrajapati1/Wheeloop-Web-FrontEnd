import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

// Registering chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminPanel = () => {
    // Mock onClick handlers
    const navigateTo = (section) => {
        console.log(`Navigating to ${section}`);
        // Add navigation logic here
    };

    // Static data for charts (For now)
    const chartData = {
        labels: ["Users", "Cars", "Bookings"],
        datasets: [
            {
                label: "Number of Entries",
                data: [120, 50, 80], // Static numbers for now
                backgroundColor: "rgba(54, 162, 235, 0.2)", // Blue
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Analytics Overview",
            },
        },
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Navbar */}
            <div className="bg-deepPurple text-white p-4 shadow-md flex justify-between items-center">
                <h1 className="text-3xl font-semibold">WHEELOOP</h1>
                {/* Profile Section on the left */}
                <div className="flex items-center space-x-4">
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar hover:shadow-md">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="User Avatar"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-lg z-[1] mt-3 w-52 p-3 shadow-lg">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge badge-primary">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <a
                                    onClick={() => {
                                        // Your logout functionality here
                                        console.log("Logging out...");
                                    }}
                                >
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-1">
                {/* Sidebar */}
                <div className="w-64 bg-white text-deepPurple flex flex-col shadow-xl p-6 border border-gray-300 rounded-lg">
                    <nav className="flex-1">
                        <ul className="space-y-6">
                            <div className="p-4 text-xl font-bold border-b border-deep-purple-700">
                                Admin Menu
                            </div>
                            <li>
                                <button
                                    onClick={() => navigateTo("dashboard")}
                                    className="block py-2 px-4 rounded-md hover:bg-deepPurple hover:text-white transition-all duration-300 transform hover:scale-105"
                                >
                                    Dashboard
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => navigateTo("users")}
                                    className="block py-2 px-4 rounded-md hover:bg-deepPurple hover:text-white transition-all duration-300 transform hover:scale-105"
                                >
                                    Manage Users
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => navigateTo("cars")}
                                    className="block py-2 px-4 rounded-md hover:bg-deepPurple hover:text-white transition-all duration-300 transform hover:scale-105"
                                >
                                    Manage Cars
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => navigateTo("bookings")}
                                    className="block py-2 px-4 rounded-md hover:bg-deepPurple hover:text-white transition-all duration-300 transform hover:scale-105"
                                >
                                    Manage Bookings
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => navigateTo("newadmin")}
                                    className="block py-2 px-4 rounded-md hover:bg-deepPurple hover:text-white transition-all duration-300 transform hover:scale-105"
                                >
                                    Manage Admin
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <div className="mt-6">
                        <button
                            onClick={() => console.log("Logging out")}
                            className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-md transition-all duration-300 transform hover:scale-105"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-8 bg-gray-50">
                    <h1 className="text-4xl font-bold mb-8 text-deepPurple">Welcome to the Admin Panel</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Analytics Chart */}
                        <div className="bg-white shadow-lg rounded-xl p-6 transform transition-all hover:scale-105">
                            <h2 className="text-xl font-semibold mb-4 text-deepPurple">Analytics Overview</h2>
                            <Bar data={chartData} options={chartOptions} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
