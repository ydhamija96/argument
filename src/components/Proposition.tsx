import React from "react";
import {PropositionT, ChoiceT} from "../types";
import {ChoicePicker} from "./ChoicePicker";
import {ChoiceResults} from "./ChoiceResults";
import {Row, Col, Divider} from "antd";

interface PropositionProps extends PropositionT {
    chosen?: string;
    onChoose: (choice: ChoiceT) => void;  
}

export class Proposition extends React.Component<PropositionProps> {
    render() {
        return (
            <Row gutter={16} justify="center">
                <Divider />
                <Col span={8}>
                    {this.props.text}
                </Col>
                <Col span={8}>
                    {this.props.chosen ?
                        <ChoiceResults chosenId={this.props.chosen} choices={this.props.choices} /> :
                        <ChoicePicker choices={this.props.choices} onChoose={this.props.onChoose} />}
                </Col>
            </Row>
        );
    }
}
