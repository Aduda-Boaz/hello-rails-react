import { configureStore } from '@reduxjs/toolkit';
import reducer from './greeting/greeting';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getGreetingAsync } from './greeting/greeting';

const store = configureStore({
  greetingReducer: {
    greeting: reducer,
  }},
  composeWithDevTools(applyMiddleware(thunk, logger))
);

store.dispatch(getGreetingAsync());

export default store;
