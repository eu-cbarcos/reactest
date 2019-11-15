import React from 'react';
import ReactDOM from 'react-dom';
import ContadorClicksReducer from '../components/ContadorClicksReducer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContadorClicksReducer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('increases and decreases the clicks ', () => {
  const {getByText, getByTestId} = render(<ContadorClicksReducer />);
  fireEvent.click(getByText('Aumentar'));
  expect(  getByTestId('resultado')  ).toHaveTextContent('Van 1 clicks');
  fireEvent.click(getByText('Aumentar'));
  expect(  getByTestId('resultado')  ).toHaveTextContent('Van 2 clicks');
  fireEvent.click(getByText('Disminuir'));
  expect(  getByTestId('resultado')  ).toHaveTextContent('Van 1 clicks');
  fireEvent.click(getByText('Disminuir'));
  expect(  getByTestId('resultado')  ).toHaveTextContent('Van 0 clicks');
  fireEvent.click(getByText('Disminuir'));
  expect(  getByTestId('resultado')  ).toHaveTextContent('Van -1 clicks');
});
