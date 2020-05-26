import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {title} from './data/demo';

it('should load the argument component', () => {
    const { getByText } = render(<App />);
    expect(getByText(title)).toBeInTheDocument();
    expect(document.title).toBe("Argument: " + title);
});
