import React from "react";
import {ChoiceT} from "../types";
import {Row, Col, Button, Progress} from "antd";

type PropsT = {
    choices: ChoiceT[];
    chosenId: string;
}

export class ChoiceResults extends React.Component<PropsT> {
    render() {
        let choiceElements: JSX.Element[] = [];

        this.props.choices.forEach((choice) => {
            choiceElements.push(
                <Row key={choice.id}>
                    <Col span={24}>
                        <Button
                            block
                            disabled
                            className={choice.id === this.props.chosenId ? "selected" : ""}>
                            {choice.text}
                        </Button>
                        <Progress
                            strokeWidth={2}
                            data-testid={"resultbar-" + choice.id}
                            strokeLinecap="square"
                            status="normal"
                            percent={this.calculatePercentChosen(choice)}
                            showInfo={false} />
                    </Col>
                </Row>
            );
        })

        return <div>{choiceElements}</div>;
    }

    private calculatePercentChosen(choice: ChoiceT) {
        let total = 1 + this.props.choices
                    .map(it => it.timesChosen)
                    .reduce((acc, next) => acc + next, 0);
        return (((this.props.chosenId === choice.id ? 1 : 0) + choice.timesChosen) * 100) / total;
    }
}
