import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

//component
import App from './components/App';

//store
import store from './reducers/rootReducer';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))
