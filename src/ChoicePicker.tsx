import React from "react";
import {ChoiceT} from "./types";

type ChoicePickerProps = {
    choices : ChoiceT[];
}

export class ChoicePicker extends React.Component<ChoicePickerProps> {
    render() {
        let choiceElements : JSX.Element[] = [];

        this.props.choices.forEach((choice) => {
            choiceElements.push(<li key={choice.id}>{choice.text}</li>);
        })

        return (
            <ul>
                {choiceElements}
            </ul>
        );
    }
}
