import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Compoennts
import Container from './utils/app'

// store
import store from './utils/reducer'

render(
  <Provider store={store}>
    <Container />
  </Provider>
  , document.getElementById('root')
)
