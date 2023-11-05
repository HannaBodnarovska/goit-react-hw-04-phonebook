import React, { useState, useEffect } from 'react';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  const [contactItems, setContactItems] = useState([]);

  useEffect(() => {
    const updatedContactItems = contacts.map((contact) => (
      <ContactItem key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
    ));
    setContactItems(updatedContactItems);
  }, [contacts, onDeleteContact]);

  return <ul className={styles.list}>{contactItems}</ul>;
};

export default ContactList;
