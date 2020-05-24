import React from 'react';
import {render} from '@testing-library/react';
import {Argument} from './Argument';

const propositions = [
    {
        "id": "1",
        "text": "The sky is blue.",
        "timesPresented": 12,
        "choices" : [
            {
                "id": "2",
                "text": "Yes, sky is blue.",
                "timesChosen": 8
            },
            {
                "id": "3",
                "text": "No, sky not blue.",
                "timesChosen": 2,
                "endWith": "What do you mean the sky isn't blue?"
            },
            {
                "id": "4",
                "text": "Not sure",
                "timesChosen": 2
            }
        ]
    },
    {
        "id": "5",
        "text": "text from proposition 2",
        "timesPresented": 0,
        "choices": [
            {"id": "6", "text": "proposition 2 choice 1", "timesChosen": 0}
        ]
    },
    {
        "id": "7",
        "text": "text from proposition 3",
        "timesPresented": 0,
        "choices": [
            {"id": "8", "text": "proposition 3 choice 1", "timesChosen": 0}
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
    expect(queryByText(/Not sure/i)).toBeInTheDocument();

    expect(queryByText(/proposition 2 choice 1/i)).not.toBeInTheDocument();
    expect(queryByText(/proposition 3 choice 1/i)).not.toBeInTheDocument();
});

it('should present second proposition', () => {
    const {queryByText} = render(<Argument propositions={propositions} choicesMade={["2"]} />);

    expect(queryByText(/The sky is blue./i)).toBeInTheDocument();
    expect(queryByText(/text from proposition 2/i)).toBeInTheDocument();

    expect(queryByText(/text from proposition 3/i)).not.toBeInTheDocument();
});
