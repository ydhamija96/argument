import React from "react";
import {Proposition} from "./Proposition";
import {PropositionT, ChoiceT} from "../types";
import {Row} from "antd";
import Title from "antd/lib/typography/Title";

type ArgumentProps = {
    propositions: PropositionT[]
}

type ArgumentState = {
    choicesMade: string[]
}

export class Argument extends React.Component<ArgumentProps, ArgumentState> {
    constructor(props: ArgumentProps) {
        super(props);
        this.state = {choicesMade: []};
    }

    private choose = (choice: ChoiceT) => {
        this.setState(
            (state, _) => (
                {choicesMade: [...state.choicesMade, choice.id]}
            )
        );
    };

    render() {
        let elements: JSX.Element[] = [];

        for (let i = 0; i <= this.props.propositions.length; i++) {
            if (i === 0) {
                elements.push(this.toElement(this.props.propositions[i]));
                continue;
            }

            let choiceMade = this.getChoiceMade(this.props.propositions[i - 1]);
            if (choiceMade === null) {
                break;
            }

            if (choiceMade.endWith) {
                elements.push(
                    <Row justify="center" key={choiceMade.id}>
                        {choiceMade.endWith}
                    </Row>
                );
                continue;
            }
            elements.push(this.toElement(this.props.propositions[i]));
        }

        return (
            <div>
                <Row justify="center">
                    <Title style={{marginBottom: "0"}}>My Argument</Title>
                </Row>
                {elements}
            </div>
        );
    }

    private getChoiceMade(proposition: PropositionT): ChoiceT | null {
        return proposition.choices.find((it) => this.state.choicesMade.includes(it.id)) || null;
    }

    private toElement(proposition: PropositionT): JSX.Element {
        return <Proposition
            key={proposition.id}
            onChoose={this.choose}
            chosen={this.getChoiceMade(proposition)?.id || undefined}
            timesPresented={proposition.timesPresented}
            id={proposition.id}
            text={proposition.text}
            choices={proposition.choices} />;
    }
}
