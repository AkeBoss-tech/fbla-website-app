// App.js
import {React, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Organization from "./pages/Organization";
import Home from "./pages/Home";

const App = () => {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await fetch("/data.json"); // Assuming organizations.json is in the public folder
        const data = await response.json();
        setOrganizations(data);
      } catch (error) {
        console.error("Error fetching organizations:", error);
      }
    };

    fetchOrganizations();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search partners={organizations} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/partner/:id" element={<Organization partners={organizations} />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
