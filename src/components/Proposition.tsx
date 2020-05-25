import React from "react";
import {PropositionT} from "../types";
import {ChoicePicker} from "./ChoicePicker";
import {ChoiceResults} from "./ChoiceResults";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface PropositionProps extends PropositionT {
    chosen?: string;
}

export class Proposition extends React.Component<PropositionProps> {
    render() {
        return (
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Row className="align-items-center">
                        <Col>
                            {this.props.text}
                        </Col>
                        <Col>
                            {
                                this.props.chosen ?
                                    <ChoiceResults choices={this.props.choices} /> :
                                    <ChoicePicker choices={this.props.choices} />
                            }
                        </Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
        );
    }
}
