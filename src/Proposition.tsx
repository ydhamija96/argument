import React from "react";
import {PropositionT} from "./types";
import {ChoicePicker} from "./ChoicePicker";

export class Proposition extends React.Component<PropositionT> {
    render() {
        return (
            <div>
                {this.props.text}
                <ChoicePicker choices={this.props.choices} />
            </div>
        );
    }
}
