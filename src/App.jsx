import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminPanel from "./components/Admin/admin";
import CarListing from "./components/Car/carCard";
import Contact from "./components/Contact/contact";
import HomePage from "./components/HomePage/homePage";
import Booking from "./components/booking/booking";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/carlists" element={<CarListing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
