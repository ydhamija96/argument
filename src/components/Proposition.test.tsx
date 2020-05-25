import React from 'react';
import {render} from "@testing-library/react";
import {Proposition} from "./Proposition";
import {PropositionT} from "../types";

const proposition : PropositionT = {
    "id": "p1",
    "text": "proposition text",
    "timesPresented": 12,
    "choices" : [
        { "id": "o1", "text": "option 1", "timesChosen": 8 },
        { "id": "o2", "text": "option 2", "timesChosen": 2, "endWith": "end with text" }
    ]
};

it('should display current proposition', () => {
    const {queryByText} = render(
        <Proposition 
            text = {proposition.text}
            timesPresented = {proposition.timesPresented}
            choices = {proposition.choices}
            id = {proposition.id} />
    );
    expect(queryByText(/proposition text/i)).toBeInTheDocument();
    expect(queryByText(/option 1/i)).toBeInTheDocument();
    expect(queryByText(/option 1/i)).toBeEnabled();
    expect(queryByText(/option 2/i)).toBeInTheDocument();
    expect(queryByText(/option 2/i)).toBeEnabled();
});

it('should display past proposition', () => {
    const {queryByText} = render(
        <Proposition 
            chosen = {"o1"}
            text = {proposition.text}
            timesPresented = {proposition.timesPresented}
            choices = {proposition.choices}
            id = {proposition.id} />
    );
    expect(queryByText(/proposition text/i)).toBeInTheDocument();
    expect(queryByText(/option 1/i)).toBeInTheDocument();
    expect(queryByText(/option 1/i)).toBeDisabled();
    expect(queryByText(/option 1/i)).toHaveClass("btn-dark");
    expect(queryByText(/option 2/i)).toBeInTheDocument();
    expect(queryByText(/option 2/i)).toBeDisabled();
    expect(queryByText(/option 2/i)).toHaveClass("btn-light");
});
