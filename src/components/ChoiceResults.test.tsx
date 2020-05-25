import React from 'react';
import {render} from "@testing-library/react";
import {ChoiceResults} from './ChoiceResults';
import {ChoiceT} from '../types';

const choices : ChoiceT[] = [
    { "id": "1", "text": "choice text 1", "timesChosen": 8 },
    { "id": "2", "text": "choice text 2", "timesChosen": 12 },
    { "id": "3", "text": "choice text 3", "timesChosen": 122, "endWith": "My name is Jeff." },
    { "id": "4", "text": "choice text 4", "timesChosen": 1, "endWith": "My name is Jeff." },
];

it('should display results bars', () => {
    const {queryByTestId} = render(
        <ChoiceResults 
            choices = {choices}
            chosenId = {"3"}
            />
    );
    expect(queryByTestId("resultbar-1")).toBeInTheDocument();
    expect(queryByTestId("resultbar-2")).toBeInTheDocument();
    expect(queryByTestId("resultbar-3")).toBeInTheDocument();
    expect(queryByTestId("resultbar-4")).toBeInTheDocument();
});

it('should highlight chosen result', () => {
    const {queryByText} = render(
        <ChoiceResults 
            choices = {choices}
            chosenId = {"3"}
            />
    );
    expect(queryByText(/choice text 1/i)?.parentElement).not.toHaveClass("selected");
    expect(queryByText(/choice text 2/i)?.parentElement).not.toHaveClass("selected");
    expect(queryByText(/choice text 3/i)?.parentElement).toHaveClass("selected");
    expect(queryByText(/choice text 4/i)?.parentElement).not.toHaveClass("selected");
});

it('should display disabled choices', () => {
    const {queryByText} = render(
        <ChoiceResults 
            choices = {choices}
            chosenId = {"1"}
            />
    );
    expect(queryByText(/choice text 1/i)).toBeInTheDocument();
    expect(queryByText(/choice text 2/i)).toBeInTheDocument();
    expect(queryByText(/choice text 3/i)).toBeInTheDocument();
    expect(queryByText(/choice text 4/i)).toBeInTheDocument();
    expect(queryByText(/choice text 1/i)).toBeDisabled();
    expect(queryByText(/choice text 2/i)).toBeDisabled();
    expect(queryByText(/choice text 3/i)).toBeDisabled();
    expect(queryByText(/choice text 4/i)).toBeDisabled();
});
