import React from "react";
import {ChoiceT} from "../types";
import {Button} from "antd";

type ChoicePickerProps = {
    choices : ChoiceT[];
}

export class ChoicePicker extends React.Component<ChoicePickerProps> {
    render() {
        let choiceElements : JSX.Element[] = [];

        this.props.choices.forEach((choice) => {
            choiceElements.push(
                <Button key={choice.id}>
                    {choice.text}
                </Button>
            );
        })

        return (
            <div>{choiceElements}</div>
        );
    }
}
