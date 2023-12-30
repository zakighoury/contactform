import React, { useState } from 'react';
import "./Contact_Form.css";
const Contact_App = ({ addContact }) => {
  const [formData, setFormData] = useState({
    id: Date.now(),
    name: '',
    contactNumber: '',
    email: '',
    gender: '',
    age: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(formData);
    setFormData({
      id: Date.now(),
      name: '',
      contactNumber: '',
      email: '',
      gender: '',
      age: '',
    });
  };

  return (
    <div className="contact-form">
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Contact Number:
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default Contact_App;
