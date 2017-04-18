import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Compoennts
import Container from './utils/app'
// actions
import { ADD_TODO, DELETE_TODO } from './utils/actionTypes';
// store
import store from './utils/reducer'

render(
  <Provider store={store}>
    <Container />
  </Provider>
  , document.getElementById('root')
)
