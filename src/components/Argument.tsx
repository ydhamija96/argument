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
        const propositionsToShow = this.getPropositionsToShow();
        return (
            <div>
                <Row justify="center">
                    <Title style={{marginBottom: "0"}}>{this.props.title}</Title>
                </Row>
                <TransitionGroup>
                    {propositionsToShow.map(it => this.toPropositionElement(it))}
                    {this.createEndingElement(last(propositionsToShow))}
                </TransitionGroup>
            </div >
        );
    }

    private getPropositionsToShow(): PropositionT[] {
        let elements: PropositionT[] = [];

        for (let i = 0; i < this.props.propositions.length; i++) {
            elements.push(this.props.propositions[i]);

            if (this.shouldBeTheLastOne(this.props.propositions[i])) {
                break;
            }
        }

        return elements;
    }

    private shouldBeTheLastOne(proposition: PropositionT): boolean {
        let choiceMade = this.getChoiceMade(proposition);
        return !!(choiceMade === null || choiceMade.endWith);
    }

    private createEndingElement(proposition: PropositionT): JSX.Element | null {
        let choiceMade = this.getChoiceMade(proposition);
        return (choiceMade && choiceMade.endWith) ?
            this.toEndingElement(choiceMade) :
            null;
    }

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

    private choose = (choice: ChoiceT) => {
        this.setState(
            (state, _) => (
                {choicesMade: [...state.choicesMade, choice.id]}
            )
        );
    };
}

function last<T>(arr: T[]): T {
    return arr[arr.length - 1];
}
