import React from 'react';
import {Argument} from './Argument';
import {PropositionT} from './types';
import Container from "react-bootstrap/Container";

const propositions : PropositionT[] = [
    {
        "id": "25e5131a-63de-4e3c-878a-95e8f54b545f",
        "text": "The sky is blue.",
        "timesPresented": 12,
        "choices": [
            {
                "id": "cad86e39-550a-4eb9-bd2d-0f3528f9f205",
                "text": "True",
                "timesChosen": 8
            },
            {
                "id": "2e4ca602-780a-4276-829a-5dd5b4e56970",
                "text": "False",
                "timesChosen": 2,
                "endWith": "What do you mean the sky isn't blue?"
            }
        ]
    },
    {
        "id": "26e5131a-63de-4e3c-878a-95e8f54b545f",
        "text": "An orange is orange.",
        "timesPresented": 7,
        "choices": [
            {
                "id": "cad87e39-550a-4eb9-bd2d-0f3528f9f205",
                "text": "Yeah, it is.",
                "timesChosen": 6
            },
            {
                "id": "2e4ca603-780a-4276-829a-5dd5b4e56970",
                "text": "Nope.",
                "timesChosen": 0,
                "endWith": "What do you mean the sky isn't blue?"
            }
        ]
    },
];

function App() {
  return (
    <div className="App">
        <Container>
            <Argument propositions={propositions} choicesMade={["2e4ca602-780a-4276-829a-5dd5b4e56970"]} />
        </Container>
    </div>
  );
}

export default App;
