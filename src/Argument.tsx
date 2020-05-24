import React from "react";
import {Proposition} from "./types";

type ArgumentProps = {
    propositions: Proposition[]
}

export class Argument extends React.Component<ArgumentProps> {
    render() {
        let str : string = "Arguments:";
        this.props.propositions.forEach((proposition) => {str += proposition.text});
        return str;
    }
}
