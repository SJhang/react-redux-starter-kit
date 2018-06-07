// React
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Components
import Root from './components/App';
import configureStore from './configureStore';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  const root = document.getElementById('root');
  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>, root);
});
