import React from 'react';
import { render } from 'react-dom';
import Container from './Container';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducers';
import './index.css';

const middleware = [ thunk ];
middleware.push(createLogger());

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

store.dispatch({ type: 'GET_LAYOUT' });

render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root')
);
