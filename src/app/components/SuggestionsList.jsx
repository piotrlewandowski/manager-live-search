import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './SuggestionsList.module.scss';

export const SuggestionsList = ({ data, handleClick, activeOption }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.suggestionsList} data-testid="suggestions-list">
        {data.map((suggestion, index) => {
          const { attributes } = suggestion;
          const classes = classNames(styles.suggestionsList__item, {
            [styles.suggestionsList__item__active]: index === activeOption,
          });

          return (
            <li
              className={classes}
              key={suggestion.id}
              onClick={() => handleClick(attributes.name)}
            >
              <div className={styles.suggestionsList__initials}>
                {attributes.initials}
              </div>
              <div className={styles.suggestionsList__profile}>
                <h3 className={styles.suggestionsList__heading}>
                  {attributes.name}
                </h3>
                <p className={styles.suggestionsList__email}>
                  {attributes.email}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

SuggestionsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      attributes: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        initials: PropTypes.string,
      }),
    }),
  ),
  handleClick: PropTypes.func,
  activeOption: PropTypes.number,
};
