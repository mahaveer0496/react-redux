import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Compoennt
import App from './components/App'

// store
import store from './reducers/reducer';

// style
import './styles/styles.css';
render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
)
