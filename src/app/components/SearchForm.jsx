import React, { useState, createRef } from 'react';
import { useSelector } from 'react-redux';

import { TextField } from './TextField';
import { SuggestionsList } from './SuggestionsList';

import { employees } from '../store/data/employees/employees.selectors';

import { keyCodes } from '../_helpers/keyCodes';

import styles from './SearchForm.module.scss';

export const SearchForm = () => {
  /** STATE */

  const [value, setValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestions = useSelector((state) => employees(state, value));
  const [activeOption, setActiveOption] = useState(0);

  /** CONSTANTS */
  const hasSuggestions = suggestions.length > 0;
  const refs = suggestions.reduce((acc, cur) => {
    acc[cur.id] = createRef();
    return acc;
  }, {});

  /** HANDLERS */

  const handleFocus = () => {
    setShowSuggestions(true);
  };

  const handleChange = (event) => {
    setValue(event.currentTarget.value);
    setShowSuggestions(true);
    setActiveOption(0);
  };

  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case keyCodes.ESCAPE:
      case keyCodes.ENTER:
        if (event.keyCode === keyCodes.ENTER) {
          setValue(suggestions[activeOption].attributes.name);
        }

        setShowSuggestions(false);
        setActiveOption(0);
        event.currentTarget.blur();

        break;
      case keyCodes.ARROW_DOWN:
        if (activeOption === suggestions.length - 1) return;

        setActiveOption((state) => state + 1);
        refs[suggestions[activeOption].id].current.scrollIntoView({
          // behavior: 'smooth',
          block: 'start',
        });

        break;
      case keyCodes.ARROW_UP:
        if (activeOption === 0) return;

        setActiveOption((state) => state - 1);
        refs[suggestions[activeOption].id].current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        break;
      default:
        break;
    }
  };

  const handleClick = (name) => {
    setValue(name);
    setShowSuggestions(false);
    setActiveOption(0);
  };

  return (
    <form
      action=""
      className={styles.form}
      autoComplete="off"
      data-testid="search-form"
      onSubmit={(event) => event.preventDefault()}
    >
      <section className={styles.section}>
        <TextField
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          testId="search-form-input"
        />
        {showSuggestions &&
          (hasSuggestions ? (
            <SuggestionsList
              data={suggestions}
              handleClick={handleClick}
              activeOption={activeOption}
              refs={refs}
            />
          ) : (
            <div className={styles.warning}>
              <em>No suggestions!</em>
            </div>
          ))}
      </section>
    </form>
  );
};
