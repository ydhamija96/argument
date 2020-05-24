import React from "react";
import {ChoiceT} from "./types";
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"

type ChoicePickerProps = {
    choices : ChoiceT[];
}

export class ChoicePicker extends React.Component<ChoicePickerProps> {
    render() {
        let choiceElements : JSX.Element[] = [];

        this.props.choices.forEach((choice) => {
            choiceElements.push(
                <Button variant="light" size="sm" key={choice.id}>
                    {choice.text}
                </Button>
            );
        })

        return (
            <ButtonGroup vertical>
                {choiceElements}
            </ButtonGroup>
        );
    }
}
