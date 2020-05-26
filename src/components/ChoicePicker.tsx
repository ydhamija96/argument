import React from "react";
import {ChoiceT} from "../types";
import {Button, Col, Row} from "antd";

type ChoicePickerProps = {
    choices : ChoiceT[];
    onChoose : (a: ChoiceT) => void;
}

export class ChoicePicker extends React.Component<ChoicePickerProps> {
    render() {
        let choiceElements : JSX.Element[] = [];

        this.props.choices.forEach((choice) => {
            choiceElements.push(
                <Row key={choice.id}>
                    <Col span={24}>
                        <Button block onClick={() => this.props.onChoose(choice)} >
                            {choice.text}
                        </Button>
                    </Col>
                </Row>
            );
        })

        return (
            <div>{choiceElements}</div>
        );
    }
}
