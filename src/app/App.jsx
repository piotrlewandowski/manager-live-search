import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { isReady } from './store/init/init.selectors';
import { appInit, getInitData } from './store/init/init.actions';

import { SearchForm } from './components/SearchForm';

import styles from './App.module.scss';

const App = () => {
  /** CONSTANTS */

  const dispatch = useDispatch();

  /** STATE */

  const appIsReady = useSelector(isReady);

  /** CALLBACKS */

  const sendAppInitSignal = useCallback(() => {
    appInit(dispatch);
  }, [dispatch]);

  const loadInitData = useCallback(() => {
    if (!appIsReady) {
      getInitData(dispatch);
    }
  }, [appIsReady, dispatch]);

  /** EFFECTS */

  useEffect(() => sendAppInitSignal(), [sendAppInitSignal]);
  useEffect(() => loadInitData(), [appIsReady, loadInitData]);

  return (
    <div className={styles.wrapper} data-testid="app-wrapper">
      <SearchForm />
    </div>
  );
};

export { App };
