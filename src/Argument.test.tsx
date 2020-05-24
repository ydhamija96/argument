import React from 'react';
import {render} from '@testing-library/react';
import {Argument} from './Argument';

it('should present a proposition', () => {
    const {getByText} = render(<Argument propositions={[{"id": "", "text": "propositionText", "choices": [], "timesPresented": 0}]} />);
    expect(getByText(/propositionText/i)).toBeInTheDocument();
});
