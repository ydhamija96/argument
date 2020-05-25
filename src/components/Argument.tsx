import React from "react";
import {Proposition} from "./Proposition";
import {PropositionT} from "../types";
import {isNullOrUndefined} from "util";

type ArgumentProps = {
    propositions: PropositionT[]
    choicesMade?: string[]
}

export class Argument extends React.Component<ArgumentProps> {
    render() {
        let propositions: PropositionT[] = [];

        for (let i = 0; i < this.props.propositions.length; i++) {
            if (i === 0 || this.wasPropositionAlreadyPresented(this.props.propositions[i - 1])) {
                propositions.push(this.props.propositions[i]);
            }
        }

        return (
            <div>
                <h1>My Argument:</h1>
                {propositions.map((it) => this.toElement(it))}
            </div>
        );
    }

    private wasPropositionAlreadyPresented(proposition: PropositionT): boolean {
        return intersect(
            proposition.choices.map(it => it.id), 
            this.props.choicesMade
        ).length > 0;
    }

    private toElement(proposition: PropositionT): JSX.Element {
        let chosen = intersect(
            proposition.choices.map(it => it.id),
            this.props.choicesMade
        );

        return <Proposition
            key={proposition.id}
            chosen={chosen.length > 0 ? chosen[0] : undefined}
            timesPresented={proposition.timesPresented}
            id={proposition.id}
            text={proposition.text}
            choices={proposition.choices} />;
    }
}

function intersect<T>(a: T[] | undefined, b: T[] | undefined) : T[] {
    if(isNullOrUndefined(a) || isNullOrUndefined(b)) {
        return [];
    }
    let longer = a.length > b.length ? a : b;
    let shorter = a.length > b.length ? b : a;
    if(longer.length === 0){
        return [];
    }
    return longer.filter(value => shorter && shorter.includes(value));
}

