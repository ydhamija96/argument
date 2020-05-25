import React from "react";
import {Proposition} from "./Proposition";
import {PropositionT} from "../types";

type ArgumentProps = {
    propositions: PropositionT[]
    choicesMade?: string[]
}

function toElement(proposition: PropositionT, current: boolean): JSX.Element {
    return <Proposition
        past={!current} 
        key={proposition.id}
        timesPresented={proposition.timesPresented}
        id={proposition.id}
        text={proposition.text}
        choices={proposition.choices} />;
}

export class Argument extends React.Component<ArgumentProps> {
    render() {
        let propositionsToShow: PropositionT[] = [];

        this.props.propositions.length > 0 && 
            propositionsToShow.push(this.props.propositions[0]);

        for(let currentPropositionIndex = 1; currentPropositionIndex < this.props.propositions.length; currentPropositionIndex++){
            let previousProposition = this.props.propositions[currentPropositionIndex-1];

            let choicesOfPreviousProposition = previousProposition.choices.map(it => it.id);

            let isPreviousPropositionPresented = choicesOfPreviousProposition.filter(
                value => this.props.choicesMade && this.props.choicesMade?.includes(value)
            ).length > 0;

            if(isPreviousPropositionPresented) {
                propositionsToShow.push(this.props.propositions[currentPropositionIndex]);
            }
        }

        let currentProposition = propositionsToShow[propositionsToShow.length -1].id; 

        return (
            <div>
                <h1>My Argument:</h1>
                {propositionsToShow.map((it) => toElement(it, it.id === currentProposition))}
            </div>
        );
    }
}
