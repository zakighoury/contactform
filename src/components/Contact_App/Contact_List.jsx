// components/Contact_App/ContactList.js
import React, { useState } from 'react';

const ContactList = ({ contacts, updateContact, deleteContact }) => {
  const [editedContact, setEditedContact] = useState(null);

  const handleEdit = (contact) => {
    setEditedContact(contact);
  };

  const handleSave = () => {
    updateContact(editedContact.id, editedContact);
    setEditedContact(null);
  };

  const handleCancelEdit = () => {
    setEditedContact(null);
  };

  const handleEditField = (field, value) => {
    setEditedContact((prevContact) => ({
      ...prevContact,
      [field]: value,
    }));
  };

  return (
    <div className="contact">
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {editedContact && editedContact.id === contact.id ? (
              <div>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={editedContact.name}
                    onChange={(e) => handleEditField('name', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Contact Number:
                  <input
                    type="text"
                    name="contactNumber"
                    value={editedContact.contactNumber}
                    onChange={(e) => handleEditField('contactNumber', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Email:
                  <input
                    type="text"
                    name="email"
                    value={editedContact.email}
                    onChange={(e) => handleEditField('email', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Age:
                  <input
                    type="text"
                    name="age"
                    value={editedContact.age}
                    onChange={(e) => handleEditField('age', e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Gender:
                  <select
                    name="gender"
                    value={editedContact.gender}
                    onChange={(e) => handleEditField('gender', e.target.value)}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
                <br />
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </div>
            ) : (
              <div>
                <strong>{contact.name}</strong>
                <br />
                Contact Number: {contact.contactNumber}
                <br />
                Email: {contact.email}
                <br />
                Gender: {contact.gender}
                <br />
                Age: {contact.age}
                <br />
                <button onClick={() => handleEdit(contact)}>Edit</button>
                <button onClick={() => deleteContact(contact.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
