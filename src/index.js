// React
import React from 'react';
import ReactDOM from 'react-dom';
// Components
import Root from './components/App';
import configureStore from './store/configureStore';
import initialState from './store/initialState';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore(initialState);

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
