import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminPanel from "./components/Admin/admin";
import HomePage from "./components/HomePage/homePage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default App;
