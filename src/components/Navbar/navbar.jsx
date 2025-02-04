import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../utils/axios"; // Ensure axiosInstance is pointing to the correct backend URL

const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
    setIsSignupModalOpen(false); // Close signup modal
  };

  const toggleSignupModal = () => {
    setIsSignupModalOpen(!isSignupModalOpen);
    setIsLoginModalOpen(false); // Close login modal
  };

  // Handle login mutation
  const loginMutation = useMutation({
    mutationFn: (credentials) => {
      console.log("Sending login request", credentials); // Log request
      return axiosInstance.post("/login", credentials);
    },
    onSuccess: (data) => {
      console.log("Login Success:", data);
      toast.success("Login successful!");
    },
    onError: (error) => {
      console.log("Login Error:", error);
      toast.error("Login failed. Please check your credentials.");
    },
  });

  // Handle signup mutation
  const signupMutation = useMutation({
    mutationFn: (userData) => {
      console.log("Sending signup request", userData); // Log request
      return axiosInstance.post("/register", userData);
    },
    onSuccess: (data) => {
      console.log("Signup Success:", data);
      toast.success("Signup successful!");
    },
    onError: (error) => {
      console.log("Signup Error:", error);
      toast.error("Signup failed. Please try again.");
    },
  });

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    loginMutation.mutate({ email, password });
  };

  const handleSignup = (event) => {
    event.preventDefault();
    const fullName = event.target.fullName.value;
    const email = event.target.email.value;
    const address = event.target.address.value;
    const phoneNumber = event.target.phoneNumber.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    // You can add more validation for confirmPassword
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    // Set the default role to 'customer'
    const role = 'customer';  // Default role for new users

    signupMutation.mutate({ full_name: fullName, email, address, phone_number: phoneNumber, password });
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
          <div className="bg-white rounded-xl shadow-lg p-8 w-full sm:w-[470px] relative">
            <button
              onClick={toggleLoginModal}
              className="absolute top-4 right-4 text-black-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-3xl text-black font-bold text-center mb-4">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-black mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-black mb-2">Password</label>
                <input
                  type="password"
                  name="password"
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
              <button onClick={toggleSignupModal} className="text-primary hover:underline">
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
            <button
              onClick={toggleSignupModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-3xl text-black font-bold text-center mb-4">Sign Up</h2>
            <form onSubmit={handleSignup}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-black mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-black mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-black mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-black mb-2">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-black mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-full px-4 py-3 bg-white text-black border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-black mb-2">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
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
              <button onClick={toggleLoginModal} className="text-primary hover:underline">
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
