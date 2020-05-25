import React from "react";
import {ChoiceT} from "../types";
import {Row, Col, Button, Progress} from "antd";

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
                    <Col span={24}>
                        <Button 
                            block
                            disabled 
                            className={choice.id === this.props.chosenId ? "selected" : ""} >
                            {choice.text}
                        </Button>
                        <Progress 
                            strokeWidth={2}
                            data-testid={"resultbar-" + choice.id}
                            strokeLinecap="square"
                            status="normal"
                            percent={proportionChosen} 
                            showInfo={false} />
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
