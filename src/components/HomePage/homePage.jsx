import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Navbar from "../Navbar/navbar";

const HomePage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div>
            <Navbar />
            {/* Home Section */}
            <section
                id="home"
                className="w-full min-h-screen bg-white flex items-center justify-center"
            >
                <div className="w-full px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Text Section */}
                    <div className="space-y-6 w-full lg:w-1/2" data-aos="fade-right">
                        <p className="text-primary text-3xl font-serif">Effortless</p>
                        <h1 className="text-6xl lg:text-7xl font-bold font-serif">WHEELOOP</h1>
                        <h2 className="text-3xl lg:text-4xl font-semibold">Rent. Ride. Repeat.</h2>
                        <p className="text-lg lg:text-xl">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-3 px-8 text-black text-xl">
                            Get Started
                        </button>
                    </div>

                    {/* Image Section */}
                    <div
                        className="flex justify-center items-center w-full lg:w-1/2"
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                    >
                        <img
                            src="src/assets/images/banner-car.png"
                            alt="Car Banner"
                            className="w-[90%] lg:w-[95%] max-h-[700px] object-contain drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
                        />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section
                id="about"
                className="w-full min-h-screen bg-gradient-to-r from-blue-100 to-white flex items-center justify-center"
            >
                <div className="w-full max-w-5xl px-6 text-center space-y-6">
                    <h2 className="text-5xl font-semibold text-primary">About Us</h2>
                    <p className="text-xl lg:text-2xl text-gray-700">
                        At Wheeloop, we provide you with seamless and reliable car rental services for all
                        your travel needs. Whether it's a weekend getaway or a business trip, we’ve got you
                        covered.
                    </p>
                    <button className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-3 px-8 text-black text-xl">
                        Learn More About Us
                    </button>
                </div>
            </section>

            {/* Recommendation Section */}
            <section
                id="recommendation"
                className="w-full min-h-screen bg-gradient-to-t from-gray-100 to-white flex items-center justify-center"
            >
                <div className="w-full max-w-6xl px-6 space-y-6" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-center text-primary">
                        Recommendations
                    </h2>
                    <p className="text-lg text-center text-gray-700">
                        Based on your preferences, we recommend vehicles that suit your journey,
                        budget, and style.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        <li className="p-4 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all">
                            <h3 className="text-xl font-semibold text-primary">Compact Car</h3>
                            <p>Perfect for city drives and short commutes.</p>
                        </li>
                        <li className="p-4 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all">
                            <h3 className="text-xl font-semibold text-primary">SUV</h3>
                            <p>Ideal for family trips and off-road adventures.</p>
                        </li>
                        <li className="p-4 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all">
                            <h3 className="text-xl font-semibold text-primary">Luxury</h3>
                            <p>For those who love style and comfort.</p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="w-full min-h-screen bg-gradient-to-b from-gray-200 to-white flex items-center justify-center"
            >
                <div className="w-full max-w-3xl px-6 space-y-6" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-center text-primary">Contact Us</h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-primary hover:bg-primary/80 transition duration-500 text-white py-3 px-6 rounded-lg w-full"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
