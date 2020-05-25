import React from 'react';
import {render} from "@testing-library/react";
import {Proposition} from "./Proposition";
import {PropositionT} from "../types";

it('should display options', () => {
    const proposition : PropositionT = {
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
    };
    const {queryByText} = render(
        <Proposition 
            text = {proposition.text}
            timesPresented = {proposition.timesPresented}
            choices = {proposition.choices}
            id = {proposition.id} />
    );

    expect(queryByText(/The sky is blue./i)).toBeInTheDocument();
    expect(queryByText(/Yes, sky is blue./i)).toBeInTheDocument();
    expect(queryByText(/No, sky not blue./i)).toBeInTheDocument();
    expect(queryByText(/Not sure/i)).toBeInTheDocument();
});
