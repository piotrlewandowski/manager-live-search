import React from 'react';
import PropTypes from 'prop-types';

import styles from './TextField.module.scss';

export const TextField = ({
  placeholder = 'Choose Manager',
  value,
  onChange,
  onFocus,
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
        value={value}
        data-testid={testId}
      />
    </>
  );
};

TextField.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};
