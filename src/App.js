// App.js
import {React, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Organization from "./pages/Organization";
import Home from "./pages/Home";
import About from "./pages/About";
import Comment from "./pages/Comment";
import NotFound from "./pages/NotFound";

const RedirectToHome = () => {
  useEffect(() => {
    const delayRedirect = setTimeout(() => {
      window.location.href = `/`;
    }, 2000); // 2000 milliseconds = 2 seconds

    // Clear the timeout to avoid unnecessary redirection if the component unmounts
    return () => clearTimeout(delayRedirect);
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return <NotFound />;
}


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
        <Route path="/" element={<Home partners={organizations} />} />
        <Route path="/search" element={<Search partners={organizations} />} />
        <Route path="/about" element={<About />} />
        <Route path='/comment' element={<Comment />} />
        <Route path="/partner/:id" element={<Organization partners={organizations} />} /> 
        <Route path='*' element={<RedirectToHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
