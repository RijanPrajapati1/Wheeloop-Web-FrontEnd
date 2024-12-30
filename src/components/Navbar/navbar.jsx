import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-deepPurple shadow-md">

      <div className="flex-none">
        <a className="btn btn-ghost normal-case text-2xl font-bold text-white" href="/">
          Wheeloop
        </a>
      </div>


      <div className="flex-1 flex justify-center">
        <ul className="menu menu-horizontal px-2 space-x-6">
          <li>
            <a className="text-lg font-medium text-white hover:text-primary" href="/Home">
              Home
            </a>
          </li>
          <li>
            <a className="text-lg font-medium text-white hover:text-primary" href="/Cars">
              Cars
            </a>
          </li>
          <li>
            <a className="text-lg font-medium text-white hover:text-primary" href="/Contact">
              Contact
            </a>
          </li>
          <li>
            <a className="text-lg font-medium text-white hover:text-primary" href="/About">
              About
            </a>
          </li>
          <li>
            <a className="text-lg font-medium text-white hover:text-primary" href="/Booking">
              Booking
            </a>
          </li>
        </ul>
      </div>


      <div className="flex-none flex items-center space-x-4">
        {/* Notification Icon */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
            aria-label="Notifications">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V11a6 6 0 10-12 0v3c0 .538-.214 1.055-.595 1.405L4 17h5m6 0a3 3 0 11-6 0m6 0H9" />
              </svg>
              <span className="badge badge-sm indicator-item">5</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 shadow-lg">
            <span className="text-lg font-bold p-2">Notifications</span>
            <ul>
              <li className="p-2">You have 5 unread messages</li>
              <li className="p-2">Your booking is confirmed</li>
            </ul>
          </div>
        </div>

        {/* Profile Section */}
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
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
