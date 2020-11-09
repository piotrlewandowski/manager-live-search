import React from 'react';
import PropTypes from 'prop-types';

import styles from './SuggestionsList.module.scss';

export const SuggestionsList = ({ data }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.suggestionsList} data-testid="suggestions-list">
        {data.map((suggestion) => {
          const { attributes } = suggestion;

          return (
            <li className={styles.suggestionsList__item} key={suggestion.id}>
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
};
