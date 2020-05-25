import React from "react";
import {ChoiceT} from "../types";
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"
import ProgressBar from "react-bootstrap/ProgressBar"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

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
                <Container fluid key={choice.id}>
                    <Row noGutters>
                        <Col>
                            <Button 
                                disabled 
                                variant={choice.id === this.props.chosenId ? "dark" : "light"} 
                                size="sm" >
                                {choice.text}
                            </Button>
                        </Col>
                        <Col>
                            <ProgressBar 
                                now={proportionChosen} 
                                label={choice.timesChosen + "/" + totalChosen} 
                                style={{height:"31px", width:"150px"}} />
                        </Col>
                    </Row>
                </Container>
            );
        })

        return (
            <ButtonGroup vertical>
                {choiceElements}
            </ButtonGroup>
        );
    }
}
