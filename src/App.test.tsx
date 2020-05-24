import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('should load the debate component', () => {
  const { getByText } = render(<App />);
  expect(getByText(/debate/i)).toBeInTheDocument();
});
