import React from "react";
import {Proposition} from "./Proposition";
import {PropositionT, ChoiceT} from "../types";
import {Row} from "antd";
import Title from "antd/lib/typography/Title";
import CSSTransition from "react-transition-group/CSSTransition";
import TransitionGroup from "react-transition-group/TransitionGroup";

type PropsT = {
    propositions: PropositionT[]
    title: string
}

type StateT = {
    choicesMade: string[]
}

export class Argument extends React.Component<PropsT, StateT> {
    constructor(props: PropsT) {
        super(props);
        this.state = {choicesMade: []};
    }

    componentDidMount() {
        document.title = "Argument: " + this.props.title;
    }

    render() {
        let elements: JSX.Element[] = [];

        for (let i = 0; i <= this.props.propositions.length; i++) {
            if (i === 0) {
                elements.push(this.toPropositionElement(this.props.propositions[i]));
                continue;
            }

            let choiceMade = this.getChoiceMade(this.props.propositions[i - 1]);
            if (choiceMade === null) {
                break;
            }

            if (choiceMade.endWith) {
                elements.push(this.toEndingElement(choiceMade));
                continue;
            }
            elements.push(this.toPropositionElement(this.props.propositions[i]));
        }

        return (
            <div>
                <Row justify="center">
                    <Title style={{marginBottom: "0"}}>{this.props.title}</Title>
                </Row>
                <TransitionGroup>
                    {elements}
                </TransitionGroup>
            </div >
        );
    }

    private choose = (choice: ChoiceT) => {
        this.setState(
            (state, _) => (
                {choicesMade: [...state.choicesMade, choice.id]}
            )
        );
    };

    private getChoiceMade(proposition: PropositionT): ChoiceT | null {
        return proposition.choices.find((it) => this.state.choicesMade.includes(it.id)) || null;
    }

    private toEndingElement(choice: ChoiceT): JSX.Element {
        return (
            <CSSTransition key={choice.id} classNames="fade-in" in={false} timeout={1000}>
                <Row justify="center">
                    {choice.endWith}
                </Row>
            </CSSTransition>
        );
    }

    private toPropositionElement(proposition: PropositionT): JSX.Element {
        return (
            <CSSTransition key={proposition.id} classNames="fade-in" in={false} timeout={1000}>
                <Proposition
                    onChoose={this.choose}
                    chosen={this.getChoiceMade(proposition)?.id || undefined}
                    timesPresented={proposition.timesPresented}
                    id={proposition.id}
                    text={proposition.text}
                    choices={proposition.choices} />
            </CSSTransition>
        );
    }
}
