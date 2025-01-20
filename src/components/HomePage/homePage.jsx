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
            <div className="w-full min-h-screen bg-white flex items-center justify-center">
                <div className="w-full px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Text Section */}
                    <div
                        className="space-y-6 w-full lg:w-1/2"
                        data-aos="fade-right"
                    >
                        <p className="text-primary text-3xl font-serif">
                            Effortless
                        </p>
                        <h1 className="text-6xl lg:text-7xl font-bold font-serif">
                            WHEELOOP
                        </h1>
                        <h2 className="text-3xl lg:text-4xl font-semibold">
                            Rent. Ride. Repeat.
                        </h2>
                        <p className="text-lg lg:text-xl">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                            et a id nisi.
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
            </div>
        </div>
    );
};

export default HomePage;
