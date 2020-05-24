import React from "react";
import {PropositionT} from "./types";
import {Proposition} from "./Proposition";

type ArgumentProps = {
    propositions: PropositionT[]
}

export class Argument extends React.Component<ArgumentProps> {
    render() {
        return <div>
            <h1>My Argument:</h1>
            <Proposition 
                timesPresented={this.props.propositions[0].timesPresented}
                id={this.props.propositions[0].id}
                text={this.props.propositions[0].text}
                choices={this.props.propositions[0].choices} />
        </div>;
    }
}
