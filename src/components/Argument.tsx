import React from "react";
import {Proposition} from "./Proposition";
import {PropositionT} from "../types";

type ArgumentProps = {
    propositions: PropositionT[]
    choicesMade?: string[]
}

export class Argument extends React.Component<ArgumentProps> {
    render() {
        let propositionsToShow: PropositionT[] = [];

        this.props.propositions.length > 0 &&
            propositionsToShow.push(this.props.propositions[0]);

        for (let i = 1; i < this.props.propositions.length; i++) {
            if (this.wasPropositionAlreadyPresented(this.props.propositions[i - 1])) {
                propositionsToShow.push(this.props.propositions[i]);
            }
        }

        let currentProposition = propositionsToShow[propositionsToShow.length - 1].id;

        return (
            <div>
                <h1>My Argument:</h1>
                {propositionsToShow.map((it) => 
                    toElement(it, it.id === currentProposition)
                )}
            </div>
        );
    }

    private wasPropositionAlreadyPresented(proposition: PropositionT): boolean {
        return proposition.choices
            .map(it => it.id)
            .filter(value =>
                this.props.choicesMade && this.props.choicesMade.includes(value)
            ).length > 0;
    }
}

function toElement(proposition: PropositionT, isCurrent: boolean): JSX.Element {
    return <Proposition
        past={!isCurrent}
        key={proposition.id}
        timesPresented={proposition.timesPresented}
        id={proposition.id}
        text={proposition.text}
        choices={proposition.choices} />;
}

