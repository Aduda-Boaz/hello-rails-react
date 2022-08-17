import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Greeting from './Greting';

export default function App() { 
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1> Welcome </h1>} />
          <Route path="/greeting" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
