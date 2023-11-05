import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    const isContactExists = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isContactExists) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts([...contacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter((contact) =>
    contact.name && contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeFilter={changeFilter} contacts={contacts} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;
