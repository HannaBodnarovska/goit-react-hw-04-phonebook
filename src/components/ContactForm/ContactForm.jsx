import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    onAddContact(newContact);
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
