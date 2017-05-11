import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Compoennts
import App from './utils/app'

// store
import store from './utils/reducer'

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
)
