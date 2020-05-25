import React from "react";
import {ChoiceT} from "../types";
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"

type ChoiceResultsProps = {
    choices: ChoiceT[];
    chosenId: string;
}

export class ChoiceResults extends React.Component<ChoiceResultsProps> {
    render() {
        let choiceElements : JSX.Element[] = [];

        this.props.choices.forEach((choice) => {
            choiceElements.push(
                <Button 
                    disabled 
                    variant={choice.id === this.props.chosenId ? "dark" : "light"} 
                    size="sm" 
                    key={choice.id}>
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
