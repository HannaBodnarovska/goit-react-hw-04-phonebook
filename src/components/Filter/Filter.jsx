import React, { useState, useEffect } from 'react';
import styles from './Filter.module.css';

const Filter = ({ filter, onChangeFilter, contacts }) => {
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    const normalizedFilter = filter.toLowerCase();
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    setFilteredContacts(filtered);
  }, [filter, contacts]);

  return (
    <div>
      <label className={styles.label}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={(e) => onChangeFilter(e.target.value)}
          className={styles.input}
        />
      </label>
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;

