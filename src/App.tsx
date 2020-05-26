import React from 'react';
import {PropositionT} from './types';
import {Argument} from './components/Argument';

const propositions : PropositionT[] = [
    {
        "id": "p1",
        "text": "The sky is blue.",
        "timesPresented": 12,
        "choices": [
            {
                "id": "p1c1",
                "text": "True",
                "timesChosen": 8
            },
            {
                "id": "p1c2e",
                "text": "False",
                "timesChosen": 2,
                "endWith": "What do you mean the sky isn't blue?"
            }
        ]
    },
    {
        "id": "p2",
        "text": "An orange is orange.",
        "timesPresented": 7,
        "choices": [
            {
                "id": "p2c1",
                "text": "Yeah, it is.",
                "timesChosen": 6,
                "endWith": "Aight bet."
            },
            {
                "id": "p2c2e",
                "text": "Nope.",
                "timesChosen": 0,
                "endWith": "Whaaaat?"
            }
        ]
    },
];

function App() {
  return (
    <div className="App">
        <Argument propositions={propositions} />
    </div>
  );
}

export default App;
