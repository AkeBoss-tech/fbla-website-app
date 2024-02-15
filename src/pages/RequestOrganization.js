import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function RequestOrganization() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    phone: '',
    website: '',
    about: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2 className="mb-4">Request Organization</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Organization Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <input
              type="text"
              className="form-control"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="website" className="form-label">
              Website
            </label>
            <input
              type="url"
              className="form-control"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="about" className="form-label">
              About
            </label>
            <textarea
              className="form-control"
              id="about"
              name="about"
              rows="4"
              value={formData.about}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default RequestOrganization;
