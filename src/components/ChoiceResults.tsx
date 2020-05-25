import React from "react";
import {ChoiceT} from "../types";
import ProgressBar from "react-bootstrap/ProgressBar"
import {Row, Col, Button} from "antd";

type ChoiceResultsProps = {
    choices: ChoiceT[];
    chosenId: string;
}

export class ChoiceResults extends React.Component<ChoiceResultsProps> {
    render() {
        let choiceElements : JSX.Element[] = [];

        let totalChosen = this.props.choices.map(it => it.timesChosen).reduce((acc, next) => acc+next, 0);

        this.props.choices.forEach((choice) => {
            let proportionChosen = choice.timesChosen * 100 / totalChosen;
            choiceElements.push(
                <Row key={choice.id}>
                    <Col flex="auto">
                        <Button 
                            block
                            disabled 
                            className={choice.id === this.props.chosenId ? "selected" : ""} >
                            {choice.text}
                        </Button>
                    </Col>
                    <Col flex="auto">
                        <ProgressBar 
                            now={proportionChosen} 
                            label={choice.timesChosen + "/" + totalChosen} 
                            style={{height:"31px", width:"150px"}} />
                    </Col>
                </Row>
            );
        })

        return (
            <div>
                {choiceElements}
            </div>
        );
    }
}
