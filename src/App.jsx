import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminPanel from "./components/Admin/admin";

import CarListing from "./components/Car/carCard";
import HomePage from "./components/HomePage/homePage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/carlists" element={<CarListing />} />
      </Routes>
    </Router>
  );
};

export default App;
