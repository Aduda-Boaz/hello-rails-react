import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Greeting = () => {
  const greeting = useSelector(state => state.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'FETCH_GREETING' });
  } , []);

  return (
    <h1>{ greeting } </h1>
  );
}

export default Greeting;
