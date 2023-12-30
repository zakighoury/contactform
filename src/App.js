// App.js
import React, { useState, useEffect } from 'react';
import ContactForm from './components/Contact_App/Contact_App';
import ContactList from './components/Contact_App/Contact_List';

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);

  const addContact = (contact) => {
    const updatedContacts = [...contacts, contact];
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const updateContact = (id, updatedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === id ? { ...contact, ...updatedContact } : contact
    );
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  return (
    <div className="App">
      <h1>Contact Management App</h1>
      <ContactForm addContact={addContact} />
      <ContactList
        contacts={contacts}
        updateContact={updateContact}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
