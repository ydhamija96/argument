import React from 'react';
import {render} from '@testing-library/react';
import {Argument} from './Argument';

const propositions = [
    {
        "id": "25e5131a-63de-4e3c-878a-95e8f54b545f",
        "text": "The sky is blue.",
        "timesPresented": 12,
        "choices" : [
            {
                "id": "",
                "text": "Yes, sky is blue.",
                "timesChosen": 8
            },
            {
                "id": "",
                "text": "No, sky not blue.",
                "timesChosen": 2,
                "endWith": "What do you mean the sky isn't blue?"
            },
        ]
    },
    {
        "id": "",
        "text": "text from proposition 2",
        "timesPresented": 0,
        "choices": [
            {"id": "", "text": "proposition 2 choice 1", "timesChosen": 0}
        ]
    },
    {
        "id": "",
        "text": "text from proposition 3",
        "timesPresented": 0,
        "choices": [
            {"id": "", "text": "proposition 3 choice 1", "timesChosen": 0}
        ]
    }
];

it('should present only the first proposition', () => {
    const {queryByText} = render(<Argument propositions={propositions} />);

    expect(queryByText(/The sky is blue./i)).toBeInTheDocument();

    expect(queryByText(/text from proposition 2/i)).not.toBeInTheDocument();
    expect(queryByText(/text from proposition 3/i)).not.toBeInTheDocument();
});

it('should present only the options of the first proposition', () => {
    const {queryByText} = render(<Argument propositions={propositions} />);

    expect(queryByText(/Yes, sky is blue./i)).toBeInTheDocument();
    expect(queryByText(/No, sky not blue./i)).toBeInTheDocument();
});
