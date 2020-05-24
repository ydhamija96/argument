import React from "react";
import {PropositionT} from "./types";

export class Proposition extends React.Component<PropositionT> {
    render() {
        return this.props.text + this.props.choices[0].text + this.props.choices[1].text;
    }
}
