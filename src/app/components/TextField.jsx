import React from 'react';
import PropTypes from 'prop-types';

import styles from './TextField.module.scss';

export const TextField = ({
  placeholder = 'Choose Manager',
  value,
  onChange,
  onFocus,
  onKeyDown,
  testId,
}) => {
  return (
    <>
      <label className={styles.label} htmlFor="manager">
        Manager
      </label>
      <input
        className={styles.input}
        type="text"
        id="manager"
        name="manager"
        aria-label="manager"
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        value={value}
        data-testid={testId}
      />
    </>
  );
};

TextField.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  testId: PropTypes.string,
};
