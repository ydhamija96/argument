import React from "react";
import {Proposition} from "./types";

type ArgumentProps = {
    propositions: Proposition[]
}

export class Argument extends React.Component<ArgumentProps> {
    render() {
        return "Argument: " + this.props.propositions[0].text + this.props.propositions[0].choices[0].text + this.props.propositions[0].choices[1].text;
    }
}
