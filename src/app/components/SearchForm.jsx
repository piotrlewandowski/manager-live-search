import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { TextField } from './TextField';

import { employees } from '../store/data/employees/employees.selectors';

import styles from './SearchForm.module.scss';

export const SearchForm = () => {
  /** STATE */

  const [value, setValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestions = useSelector((state) => employees(state, value));

  /** CONSTANTS */
  const hasSuggestions = suggestions.length > 0;

  /** HANDLERS */

  const handleFocus = () => {
    setShowSuggestions(true);
  };

  const handleChange = (event) => {
    setValue(event.currentTarget.value);
    setShowSuggestions(true);
  };

  return (
    <form
      action=""
      className={styles.form}
      autoComplete="off"
      data-testid="search-form"
    >
      <section className={styles.section}>
        <TextField
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          testId="search-form-input"
        />
        {showSuggestions &&
          (hasSuggestions ? (
            <ul data-testid="suggestions-list">
              {suggestions.map((suggestion) => {
                const { attributes } = suggestion;
                return (
                  <li key={suggestion.id}>
                    <span>{attributes.initials}</span>
                    <h3>{attributes.name}</h3>
                    <p>{attributes.email}</p>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div>
              <em>No suggestions!</em>
            </div>
          ))}
      </section>
    </form>
  );
};
