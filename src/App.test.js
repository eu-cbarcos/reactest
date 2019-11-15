import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const div2 = document.createElement('div');

  div2.setAttribute("id","portal");
  document.body.appendChild(div2);

  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
