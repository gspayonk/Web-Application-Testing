import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  render(<Dashboard />);
});

it('renders without crashing', () => {
  render(<Display />);
});