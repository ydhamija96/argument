import React from 'react';
import {render} from '@testing-library/react';
import {Argument} from './Argument';

const propositions = [
    {
        "id": "p1",
        "text": "proposition 1",
        "timesPresented": 12,
        "choices" : [
            { "id": "p1c1", "text": "proposition 1 choice 1", "timesChosen": 8 },
            { "id": "p1c2e", "text": "proposition 1 choice 2 with ending", "timesChosen": 2, 
                "endWith": "proposition 1 choice 2 ending" },
            { "id": "p1c3", "text": "proposition 1 choice 3", "timesChosen": 2 }
        ]
    },
    {
        "id": "p2",
        "text": "proposition 2",
        "timesPresented": 0,
        "choices": [
            {"id": "p2c1", "text": "proposition 2 choice 1", "timesChosen": 0}
        ]
    },
    {
        "id": "p3",
        "text": "proposition 3",
        "timesPresented": 0,
        "choices": [
            {"id": "p3c1", "text": "proposition 3 choice 1", "timesChosen": 0},
            {"id": "p3c2e", "text": "proposition 3 choice 2", "timesChosen": 0, 
                "endWith": "proposition 3 choice 2 ending" }
        ]
    }
];

it('should present only the first proposition', () => {
    const {queryByText} = render(<Argument propositions={propositions} />);

    expect(queryByText("proposition 1")).toBeInTheDocument();
    expect(queryByText("proposition 1 choice 1")?.parentNode).toBeEnabled();

    expect(queryByText("proposition 2")).not.toBeInTheDocument();
    expect(queryByText("proposition 3")).not.toBeInTheDocument();
});

it('should present an early ending', () => {
    const {queryByText} = render(<Argument propositions={propositions} />);

    queryByText("proposition 1 choice 2 with ending")?.click(); 

    expect(queryByText("proposition 1")).toBeInTheDocument();
    expect(queryByText("proposition 1 choice 1")?.parentNode).toBeDisabled();

    expect(queryByText("proposition 1 choice 2 ending")).toBeInTheDocument();

    expect(queryByText("proposition 2")).not.toBeInTheDocument();
    expect(queryByText("proposition 3")).not.toBeInTheDocument();
});

it('should present second proposition', () => {
    const {queryByText} = render(<Argument propositions={propositions} />);

    queryByText("proposition 1 choice 1")?.click(); 

    expect(queryByText("proposition 1")).toBeInTheDocument();
    expect(queryByText("proposition 1 choice 1")?.parentNode).toBeDisabled();

    expect(queryByText("proposition 2")).toBeInTheDocument();
    expect(queryByText("proposition 2 choice 1")?.parentNode).toBeEnabled();

    expect(queryByText("proposition 3")).not.toBeInTheDocument();
});

it('should present third proposition', () => {
    const {queryByText} = render(<Argument propositions={propositions} />);

    queryByText("proposition 1 choice 1")?.click(); 
    queryByText("proposition 2 choice 1")?.click(); 

    expect(queryByText("proposition 1")).toBeInTheDocument();
    expect(queryByText("proposition 1 choice 1")?.parentNode).toBeDisabled();

    expect(queryByText("proposition 2")).toBeInTheDocument();
    expect(queryByText("proposition 2 choice 1")?.parentNode).toBeDisabled();

    expect(queryByText("proposition 3")).toBeInTheDocument();
    expect(queryByText("proposition 3 choice 1")?.parentNode).toBeEnabled();
});

it('should present a late ending', () => {
    const {queryByText} = render(<Argument propositions={propositions} />);

    queryByText("proposition 1 choice 3")?.click(); 
    queryByText("proposition 2 choice 1")?.click(); 
    queryByText("proposition 3 choice 2")?.click(); 

    expect(queryByText("proposition 1")).toBeInTheDocument();
    expect(queryByText("proposition 1 choice 1")?.parentNode).toBeDisabled();

    expect(queryByText("proposition 2")).toBeInTheDocument();
    expect(queryByText("proposition 2 choice 1")?.parentNode).toBeDisabled();

    expect(queryByText("proposition 3")).toBeInTheDocument();
    expect(queryByText("proposition 3 choice 1")?.parentNode).toBeDisabled();

    expect(queryByText("proposition 3 choice 2 ending")).toBeInTheDocument();
});

