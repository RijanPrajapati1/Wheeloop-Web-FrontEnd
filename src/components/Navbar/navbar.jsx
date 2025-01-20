import React, { useState } from "react";

const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
    setIsSignupModalOpen(false); // Ensure signup modal is closed
  };

  const toggleSignupModal = () => {
    setIsSignupModalOpen(!isSignupModalOpen);
    setIsLoginModalOpen(false); // Ensure login modal is closed
  };

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
            <a className="text-lg font-medium text-white hover:text-primary" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="text-lg font-medium text-white hover:text-primary" href="/carlists">
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
        <button
          onClick={toggleLoginModal}
          className="btn bg-primary hover:bg-primary/80 text-white px-5 py-2 text-lg font-semibold rounded-lg shadow-md transition duration-300"
        >
          Login
        </button>

      </div>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full sm:w-[470px]  relative">
            {/* Close Button */}
            <button
              onClick={toggleLoginModal}
              className="absolute top-4 right-4 text-black-500 hover:text-gray-700"
            >
              &times;
            </button>

            {/* Modal Content */}
            <h2 className="text-3xl text-black font-bold text-center mb-4">Login</h2>
            <p className="text-sm text-black text-center mb-6">
              Enter your credentials to access your account
            </p>

            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-black mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-deepPurple text-white py-2 rounded-lg hover:bg-deepPurple/90 transition duration-300"
              >
                Login
              </button>
            </form>

            <p className="text-sm text-black text-center mt-4">
              Don’t have an account?{" "}
              <button
                onClick={toggleSignupModal}
                className="text-primary hover:underline"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {isSignupModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full sm:w-[600px] relative">
            {/* Close Button */}
            <button
              onClick={toggleSignupModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>

            {/* Modal Content */}
            <h2 className="text-3xl text-black font-bold text-center mb-4">Sign Up</h2>
            <p className="text-sm text-black text-center mb-6">
              Create an account to start using Wheeloop
            </p>

            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-black mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-black mb-2">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-black mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-black mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-primary"

                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-black mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-deepPurple text-white py-2 rounded-lg hover:bg-deepPurple/90 transition duration-300"
              >
                Sign Up
              </button>
            </form>

            <p className="text-sm text-black text-center mt-4">
              Already have an account?{" "}
              <button
                onClick={toggleLoginModal}
                className="text-primary hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
