import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Compoennts
import App from './components/app'

// store
import store from './reducers/reducer';

// style
import './../src/styles/styles.css';
render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
)
