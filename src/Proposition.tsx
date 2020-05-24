import React from "react";
import {PropositionT} from "./types";
import {ChoicePicker} from "./ChoicePicker";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class Proposition extends React.Component<PropositionT> {
    render() {
        return (
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Row className="align-items-center">
                        <Col>
                            {this.props.text}
                        </Col>
                        <Col>
                            <ChoicePicker choices={this.props.choices} />
                        </Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
        );
    }
}
