import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Greeting = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <p>This is a simple React component</p>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Greeting />,
    document.getElementById('app')
  );
});

export default Greeting;
