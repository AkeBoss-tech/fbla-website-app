import React, { useEffect } from "react";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function NotFound() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Navbar />
      <div class="container mt-4">
        <h1>404 - Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <p>Redirecting to home in 2 seconds.</p>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
