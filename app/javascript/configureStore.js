import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const initialState = {
  greeting : 'Hello'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_GREETING':
      return {
        ...state,
        greeting: action.payload,
      };
    case 'CHANGE_GREETING_ASYNC':
      return {
        ...state,
        greeting: action.payload.greeting,
      };
    default:
      return state;
  }
}

const store = configureStore({
  reducer,
  middleware: [thunk],
});

export default store;
